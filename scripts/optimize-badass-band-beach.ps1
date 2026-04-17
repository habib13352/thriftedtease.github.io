Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$sourceDir = Join-Path $repoRoot 'images\badass_beach_band'
$outputDir = Join-Path $repoRoot 'images\optimized\media\badass-band-beach'
$alternateHeicDir = Join-Path $sourceDir 'heic-alt-colorfix'
$alternateShadowHeicDir = Join-Path $sourceDir 'heic-alt-shadowfix'

if (-not (Test-Path $sourceDir)) {
    throw "Missing source directory '$sourceDir'."
}

New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
New-Item -ItemType Directory -Path $alternateHeicDir -Force | Out-Null
New-Item -ItemType Directory -Path $alternateShadowHeicDir -Force | Out-Null

$ffmpeg = (Get-Command ffmpeg -ErrorAction Stop).Source
$ffprobe = (Get-Command ffprobe -ErrorAction Stop).Source

function Get-JpegQScale {
    param(
        [Parameter(Mandatory = $true)]
        [int]$Quality
    )

    if ($Quality -ge 80) {
        return 2
    }

    if ($Quality -ge 72) {
        return 4
    }

    return 6
}

function Invoke-FfmpegStill {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath,
        [Parameter(Mandatory = $true)]
        [string]$Filter,
        [Parameter(Mandatory = $true)]
        [int]$Quality
    )

    $destinationDir = Split-Path -Parent $DestinationPath
    if ($destinationDir) {
        New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
    }

    $qScale = Get-JpegQScale -Quality $Quality
    $filterComplex = "[0:v]$Filter[v]"

    & $ffmpeg -y -hide_banner -loglevel error -i $SourcePath -filter_complex $filterComplex -map "[v]" -frames:v 1 -update 1 -q:v $qScale $DestinationPath

    if ($LASTEXITCODE -ne 0) {
        throw "ffmpeg failed while processing '$SourcePath'."
    }
}

function Get-BestHeicColorStreamIndex {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath
    )

    $streamRows = & $ffprobe -v error -show_entries stream=index,codec_type,width,height,pix_fmt -of csv=p=0 $SourcePath

    if ($LASTEXITCODE -ne 0) {
        throw "ffprobe failed while inspecting '$SourcePath'."
    }

    $candidateStreams = foreach ($row in $streamRows) {
        if ([string]::IsNullOrWhiteSpace($row)) {
            continue
        }

        $parts = $row.Split(',')
        if ($parts.Count -lt 5) {
            continue
        }

        $streamIndex = 0
        $width = 0
        $height = 0

        if (-not [int]::TryParse($parts[0], [ref]$streamIndex)) {
            continue
        }

        if ($parts[1] -ne 'video') {
            continue
        }

        if (-not [int]::TryParse($parts[2], [ref]$width)) {
            continue
        }

        if (-not [int]::TryParse($parts[3], [ref]$height)) {
            continue
        }

        $pixelFormat = $parts[4]

        if ($pixelFormat -eq 'gray') {
            continue
        }

        [PSCustomObject]@{
            Index = $streamIndex
            Width = $width
            Height = $height
            PixelFormat = $pixelFormat
            Area = $width * $height
        }
    }

    $bestStream = $candidateStreams |
        Sort-Object Area -Descending |
        Select-Object -First 1

    if (-not $bestStream) {
        throw "No usable color video stream found in '$SourcePath'."
    }

    return $bestStream.Index
}

function Convert-HeicToJpeg {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath
    )

    $destinationDir = Split-Path -Parent $DestinationPath
    if ($destinationDir) {
        New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
    }

    $streamIndex = Get-BestHeicColorStreamIndex -SourcePath $SourcePath

    & $ffmpeg -y -hide_banner -loglevel error -i $SourcePath -map "0:$streamIndex" -frames:v 1 -update 1 -q:v 1 $DestinationPath

    if ($LASTEXITCODE -ne 0) {
        throw "ffmpeg failed while converting '$SourcePath' using stream index '$streamIndex'."
    }
}

function Convert-HeicToJpegAlternate {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath
    )

    $destinationDir = Split-Path -Parent $DestinationPath
    if ($destinationDir) {
        New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
    }

    $preferredRows = & $ffprobe -v error -show_entries stream=index,codec_type,width,height,pix_fmt -of csv=p=0 $SourcePath

    if ($LASTEXITCODE -ne 0) {
        throw "ffprobe failed while inspecting '$SourcePath' for alternate conversion."
    }

    $preferredStream = $preferredRows |
        ForEach-Object {
            if ([string]::IsNullOrWhiteSpace($_)) {
                return
            }

            $parts = $_.Split(',')
            if ($parts.Count -lt 5 -or $parts[1] -ne 'video') {
                return
            }

            $streamIndex = 0
            $width = 0
            $height = 0

            if (-not [int]::TryParse($parts[0], [ref]$streamIndex)) {
                return
            }

            if (-not [int]::TryParse($parts[2], [ref]$width)) {
                return
            }

            if (-not [int]::TryParse($parts[3], [ref]$height)) {
                return
            }

            [PSCustomObject]@{
                Index = $streamIndex
                Width = $width
                Height = $height
                PixelFormat = $parts[4]
                Area = $width * $height
            }
        } |
        Where-Object { $_ -and $_.PixelFormat -like '*10le' -and $_.Width -ge 768 -and $_.Height -ge 768 } |
        Sort-Object Area -Descending |
        Select-Object -First 1

    if (-not $preferredStream) {
        throw "No suitable 10-bit comparison stream found in '$SourcePath'."
    }

    $filter = 'zscale=transferin=linear:transfer=bt709:matrixin=bt709:matrix=bt709:primariesin=bt709:primaries=bt709,eq=saturation=1.08:gamma=1.03'

    & $ffmpeg -y -hide_banner -loglevel error -i $SourcePath -map "0:$($preferredStream.Index)" -vf $filter -frames:v 1 -update 1 -q:v 1 $DestinationPath

    if ($LASTEXITCODE -ne 0) {
        throw "ffmpeg failed while writing alternate HEIC conversion for '$SourcePath'."
    }
}

function Convert-HeicToJpegShadowAlternate {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath
    )

    $destinationDir = Split-Path -Parent $DestinationPath
    if ($destinationDir) {
        New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
    }

    $preferredRows = & $ffprobe -v error -show_entries stream=index,codec_type,width,height,pix_fmt -of csv=p=0 $SourcePath

    if ($LASTEXITCODE -ne 0) {
        throw "ffprobe failed while inspecting '$SourcePath' for shadow alternate conversion."
    }

    $preferredStream = $preferredRows |
        ForEach-Object {
            if ([string]::IsNullOrWhiteSpace($_)) {
                return
            }

            $parts = $_.Split(',')
            if ($parts.Count -lt 5 -or $parts[1] -ne 'video') {
                return
            }

            $streamIndex = 0
            $width = 0
            $height = 0

            if (-not [int]::TryParse($parts[0], [ref]$streamIndex)) {
                return
            }

            if (-not [int]::TryParse($parts[2], [ref]$width)) {
                return
            }

            if (-not [int]::TryParse($parts[3], [ref]$height)) {
                return
            }

            [PSCustomObject]@{
                Index = $streamIndex
                Width = $width
                Height = $height
                PixelFormat = $parts[4]
                Area = $width * $height
            }
        } |
        Where-Object { $_ -and $_.PixelFormat -like '*10le' -and $_.Width -ge 768 -and $_.Height -ge 768 } |
        Sort-Object Area -Descending |
        Select-Object -First 1

    if (-not $preferredStream) {
        throw "No suitable 10-bit shadow comparison stream found in '$SourcePath'."
    }

    $filter = 'zscale=transferin=linear:transfer=bt709:matrixin=bt709:matrix=bt709:primariesin=bt709:primaries=bt709,eq=contrast=1.12:brightness=-0.045:saturation=1.06:gamma=0.88'

    & $ffmpeg -y -hide_banner -loglevel error -i $SourcePath -map "0:$($preferredStream.Index)" -vf $filter -frames:v 1 -update 1 -q:v 1 $DestinationPath

    if ($LASTEXITCODE -ne 0) {
        throw "ffmpeg failed while writing shadow alternate HEIC conversion for '$SourcePath'."
    }
}

function New-FitImage {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath,
        [Parameter(Mandatory = $true)]
        [int]$MaxWidth,
        [Parameter(Mandatory = $true)]
        [int]$MaxHeight,
        [Parameter(Mandatory = $true)]
        [int]$Quality
    )

    $filter = "scale=$MaxWidth`:$MaxHeight`:force_original_aspect_ratio=decrease"
    Invoke-FfmpegStill -SourcePath $SourcePath -DestinationPath $DestinationPath -Filter $filter -Quality $Quality
}

function New-FillImage {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath,
        [Parameter(Mandatory = $true)]
        [int]$Width,
        [Parameter(Mandatory = $true)]
        [int]$Height,
        [Parameter(Mandatory = $true)]
        [int]$Quality
    )

    $filter = "scale=$Width`:$Height`:force_original_aspect_ratio=increase,crop=$Width`:$Height"
    Invoke-FfmpegStill -SourcePath $SourcePath -DestinationPath $DestinationPath -Filter $filter -Quality $Quality
}

# Convert iPhone HEIC captures into JPGs beside the originals so the source folder
# contains a consistent set of JPG assets before optimization.
$heicFiles = Get-ChildItem -LiteralPath $sourceDir -File |
    Where-Object { $_.Extension -ieq '.heic' } |
    Sort-Object Name

foreach ($heicFile in $heicFiles) {
    $jpgPath = Join-Path $sourceDir ($heicFile.BaseName + '.jpg')
    Convert-HeicToJpeg -SourcePath $heicFile.FullName -DestinationPath $jpgPath

    $alternateJpgPath = Join-Path $alternateHeicDir ($heicFile.BaseName + '.jpg')
    Convert-HeicToJpegAlternate -SourcePath $heicFile.FullName -DestinationPath $alternateJpgPath

    $alternateShadowJpgPath = Join-Path $alternateShadowHeicDir ($heicFile.BaseName + '.jpg')
    Convert-HeicToJpegShadowAlternate -SourcePath $heicFile.FullName -DestinationPath $alternateShadowJpgPath
}

$jpgFiles = Get-ChildItem -LiteralPath $sourceDir -File |
    Where-Object { $_.Extension -in '.jpg', '.jpeg', '.JPG', '.JPEG' } |
    Sort-Object Name

if (-not $jpgFiles) {
    throw "No JPG files found in '$sourceDir' after HEIC conversion."
}

$manifest = foreach ($jpgFile in $jpgFiles) {
    [PSCustomObject]@{
        Name = $jpgFile.Name
        FullName = $jpgFile.FullName
    }
}

for ($index = 0; $index -lt $manifest.Count; $index++) {
    $sourcePath = $manifest[$index].FullName
    $sequence = '{0:D2}' -f ($index + 1)

    New-FillImage -SourcePath $sourcePath -DestinationPath (Join-Path $outputDir "$sequence-card.jpg") -Width 960 -Height 600 -Quality 72
    New-FitImage -SourcePath $sourcePath -DestinationPath (Join-Path $outputDir "$sequence-full.jpg") -MaxWidth 1800 -MaxHeight 1800 -Quality 80
}

$indexedManifest = for ($index = 0; $index -lt $manifest.Count; $index++) {
    [PSCustomObject]@{
        Index = '{0:D2}' -f ($index + 1)
        Name = $manifest[$index].Name
    }
}

$indexedManifest |
    Select-Object Index, Name |
    Format-Table -AutoSize

Get-ChildItem -LiteralPath $outputDir -File |
    Sort-Object Name |
    Select-Object Name, @{ Name = 'SizeKB'; Expression = { [Math]::Round($_.Length / 1KB, 1) } } |
    Format-Table -AutoSize
