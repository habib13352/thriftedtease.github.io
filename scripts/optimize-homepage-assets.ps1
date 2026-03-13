Add-Type -AssemblyName System.Drawing

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$homepageOutputDir = Join-Path $repoRoot 'images\optimized\homepage'
$mediaOutputDir = Join-Path $repoRoot 'images\optimized\media'

New-Item -ItemType Directory -Path $homepageOutputDir -Force | Out-Null
New-Item -ItemType Directory -Path $mediaOutputDir -Force | Out-Null

function Get-JpegCodec {
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq 'image/jpeg' } |
        Select-Object -First 1

    if (-not $codec) {
        throw 'JPEG encoder not available.'
    }

    return $codec
}

function Save-Jpeg {
    param(
        [Parameter(Mandatory = $true)]
        [System.Drawing.Image]$Image,
        [Parameter(Mandatory = $true)]
        [string]$Path,
        [Parameter(Mandatory = $true)]
        [int]$Quality
    )

    $codec = Get-JpegCodec
    $encoder = [System.Drawing.Imaging.Encoder]::Quality
    $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long]$Quality)

    try {
        $Image.Save($Path, $codec, $encoderParameters)
    }
    finally {
        $encoderParameters.Dispose()
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

    $source = [System.Drawing.Image]::FromFile($SourcePath)

    try {
        $ratio = [Math]::Min($MaxWidth / $source.Width, $MaxHeight / $source.Height)
        $targetWidth = [Math]::Max([int][Math]::Round($source.Width * $ratio), 1)
        $targetHeight = [Math]::Max([int][Math]::Round($source.Height * $ratio), 1)

        $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

        try {
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.DrawImage($source, 0, 0, $targetWidth, $targetHeight)
            Save-Jpeg -Image $bitmap -Path $DestinationPath -Quality $Quality
        }
        finally {
            $graphics.Dispose()
            $bitmap.Dispose()
        }
    }
    finally {
        $source.Dispose()
    }
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

    $source = [System.Drawing.Image]::FromFile($SourcePath)

    try {
        $sourceRatio = $source.Width / $source.Height
        $targetRatio = $Width / $Height

        if ($sourceRatio -gt $targetRatio) {
            $cropHeight = $source.Height
            $cropWidth = [int][Math]::Round($cropHeight * $targetRatio)
            $cropX = [int][Math]::Round(($source.Width - $cropWidth) / 2)
            $cropY = 0
        }
        else {
            $cropWidth = $source.Width
            $cropHeight = [int][Math]::Round($cropWidth / $targetRatio)
            $cropX = 0
            $cropY = [int][Math]::Round(($source.Height - $cropHeight) / 2)
        }

        $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

        try {
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

            $destinationRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
            $sourceRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropWidth, $cropHeight)
            $graphics.DrawImage($source, $destinationRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)

            Save-Jpeg -Image $bitmap -Path $DestinationPath -Quality $Quality
        }
        finally {
            $graphics.Dispose()
            $bitmap.Dispose()
        }
    }
    finally {
        $source.Dispose()
    }
}

$assets = @(
    @{
        Source = Join-Path $repoRoot 'images\spencer.JPG'
        Destination = Join-Path $homepageOutputDir 'hero-home.jpg'
        Mode = 'fill'
        Width = 1600
        Height = 900
        Quality = 70
    }
    @{
        Source = Join-Path $repoRoot 'images\kevin.JPG'
        Destination = Join-Path $homepageOutputDir 'kevin-thumb.jpg'
        Mode = 'fill'
        Width = 800
        Height = 800
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\bennett.JPG'
        Destination = Join-Path $homepageOutputDir 'bennett-thumb.jpg'
        Mode = 'fill'
        Width = 800
        Height = 800
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\hamza.JPG'
        Destination = Join-Path $homepageOutputDir 'hamza-thumb.jpg'
        Mode = 'fill'
        Width = 800
        Height = 800
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\spencer.JPG'
        Destination = Join-Path $homepageOutputDir 'spencer-thumb.jpg'
        Mode = 'fill'
        Width = 800
        Height = 800
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\kevin.JPG'
        Destination = Join-Path $homepageOutputDir 'kevin-full.jpg'
        Mode = 'fit'
        Width = 1600
        Height = 1600
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\bennett.JPG'
        Destination = Join-Path $homepageOutputDir 'bennett-full.jpg'
        Mode = 'fit'
        Width = 1600
        Height = 1600
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\hamza.JPG'
        Destination = Join-Path $homepageOutputDir 'hamza-full.jpg'
        Mode = 'fit'
        Width = 1600
        Height = 1600
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\spencer.JPG'
        Destination = Join-Path $homepageOutputDir 'spencer-full.jpg'
        Mode = 'fit'
        Width = 1600
        Height = 1600
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\spencer.JPG'
        Destination = Join-Path $mediaOutputDir 'hero-media.jpg'
        Mode = 'fill'
        Width = 1600
        Height = 960
        Quality = 70
    }
    @{
        Source = Join-Path $repoRoot 'images\kevin.JPG'
        Destination = Join-Path $mediaOutputDir 'kevin-card.jpg'
        Mode = 'fill'
        Width = 960
        Height = 600
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\bennett.JPG'
        Destination = Join-Path $mediaOutputDir 'bennett-card.jpg'
        Mode = 'fill'
        Width = 960
        Height = 600
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\hamza.JPG'
        Destination = Join-Path $mediaOutputDir 'hamza-card.jpg'
        Mode = 'fill'
        Width = 960
        Height = 600
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\spencer.JPG'
        Destination = Join-Path $mediaOutputDir 'spencer-card.jpg'
        Mode = 'fill'
        Width = 960
        Height = 600
        Quality = 72
    }
    @{
        Source = Join-Path $repoRoot 'images\kevin.JPG'
        Destination = Join-Path $mediaOutputDir 'kevin-full.jpg'
        Mode = 'fit'
        Width = 1800
        Height = 1800
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\bennett.JPG'
        Destination = Join-Path $mediaOutputDir 'bennett-full.jpg'
        Mode = 'fit'
        Width = 1800
        Height = 1800
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\hamza.JPG'
        Destination = Join-Path $mediaOutputDir 'hamza-full.jpg'
        Mode = 'fit'
        Width = 1800
        Height = 1800
        Quality = 80
    }
    @{
        Source = Join-Path $repoRoot 'images\spencer.JPG'
        Destination = Join-Path $mediaOutputDir 'spencer-full.jpg'
        Mode = 'fit'
        Width = 1800
        Height = 1800
        Quality = 80
    }
)

foreach ($asset in $assets) {
    if ($asset.Mode -eq 'fill') {
        New-FillImage -SourcePath $asset.Source -DestinationPath $asset.Destination -Width $asset.Width -Height $asset.Height -Quality $asset.Quality
    }
    else {
        New-FitImage -SourcePath $asset.Source -DestinationPath $asset.Destination -MaxWidth $asset.Width -MaxHeight $asset.Height -Quality $asset.Quality
    }
}

Get-ChildItem $repoRoot\images\optimized -Recurse -File |
    Sort-Object Name |
    Select-Object FullName, @{ Name = 'SizeKB'; Expression = { [Math]::Round($_.Length / 1KB, 1) } } |
    Format-Table -AutoSize
