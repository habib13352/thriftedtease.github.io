Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$homepageOutputDir = Join-Path $repoRoot 'images\optimized\homepage'
$mediaOutputDir = Join-Path $repoRoot 'images\optimized\media'
$pageOutputDir = Join-Path $repoRoot 'images\optimized\pages'

New-Item -ItemType Directory -Path $homepageOutputDir -Force | Out-Null
New-Item -ItemType Directory -Path $mediaOutputDir -Force | Out-Null
New-Item -ItemType Directory -Path $pageOutputDir -Force | Out-Null

$ffmpeg = (Get-Command ffmpeg -ErrorAction Stop).Source

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

    & $ffmpeg -y -hide_banner -loglevel error -i $SourcePath -filter_complex $filterComplex -map "[v]" -frames:v 1 -q:v $qScale $DestinationPath

    if ($LASTEXITCODE -ne 0) {
        throw "ffmpeg failed while processing '$SourcePath'."
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

function New-OptimizedAsset {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,
        [Parameter(Mandatory = $true)]
        [string]$DestinationPath,
        [Parameter(Mandatory = $true)]
        [ValidateSet('fill', 'fit')]
        [string]$Mode,
        [Parameter(Mandatory = $true)]
        [int]$Width,
        [Parameter(Mandatory = $true)]
        [int]$Height,
        [Parameter(Mandatory = $true)]
        [int]$Quality
    )

    if ($Mode -eq 'fill') {
        New-FillImage -SourcePath $SourcePath -DestinationPath $DestinationPath -Width $Width -Height $Height -Quality $Quality
        return
    }

    New-FitImage -SourcePath $SourcePath -DestinationPath $DestinationPath -MaxWidth $Width -MaxHeight $Height -Quality $Quality
}

$homepageAssets = @(
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
        Source = Join-Path $repoRoot 'images\band_pics\band_15.jpg'
        Destination = Join-Path $mediaOutputDir 'hero-media.jpg'
        Mode = 'fill'
        Width = 1600
        Height = 960
        Quality = 70
    }
    @{
        Source = Join-Path $repoRoot 'images\the_pilot\spence_tp_1.JPG'
        Destination = Join-Path $pageOutputDir 'hero-shows.jpg'
        Mode = 'fill'
        Width = 1600
        Height = 960
        Quality = 70
    }
    @{
        Source = Join-Path $repoRoot 'images\band_pics\spennet_1.jpg'
        Destination = Join-Path $pageOutputDir 'hero-merch.jpg'
        Mode = 'fill'
        Width = 1600
        Height = 960
        Quality = 70
    }
)

$mediaEvents = @(
    @{
        Slug = 'cameron-house'
        SourceDir = Join-Path $repoRoot 'images\cameron_house'
        Files = @(
            'spence_ch_1.JPG',
            'kevin_ch_1.JPG',
            'hamza_ch_1.JPG',
            'dyl_ch_1.JPG',
            'bennett_ch_1.JPG',
            'spen-ben_ch_1.JPG',
            'spence_ch_2.JPG',
            'kevin_ch_2.JPG',
            'bennett_ch_2.JPG',
            'spence_ch_3.JPG'
        )
    }
    @{
        Slug = 'el-mocambo'
        SourceDir = Join-Path $repoRoot 'images\el_mocambo'
        Files = @(
            'tuning_el_1.HEIC',
            'tuning_el_2.HEIC',
            'Jan 16th Poster.png'
        )
    }
    @{
        Slug = 'painted-lady'
        SourceDir = Join-Path $repoRoot 'images\painted_lady'
        Files = @(
            'spence_pl_1.JPG',
            'kevin_pl_1.JPG',
            'hamza_pl_1.JPG',
            'dyl_pl_1.JPG',
            'bennett_pl_1.JPG',
            'spence_pl_2.JPG',
            'kevin_pl_2.JPG',
            'hamza_pl_2.JPG',
            'bennett_pl_2.JPG',
            'spence_pl_3.JPG'
        )
    }
    @{
        Slug = 'the-handlebar'
        SourceDir = Join-Path $repoRoot 'images\the_handlebar'
        Files = @(
            'band_hb_1.HEIC',
            'bennett_hb_1.HEIC',
            'spence_hb_1.HEIC'
        )
    }
    @{
        Slug = 'the-pilot'
        SourceDir = Join-Path $repoRoot 'images\the_pilot'
        Files = @(
            'spence_tp_1.JPG',
            'kevin_tp_1.JPG',
            'hamza_tp_1.JPG',
            'dyl_tp_1.JPG',
            'bennett_tp_1.JPG',
            'spence_tp_2.JPG',
            'kevin_tp_2.JPG',
            'dyl_tp_2.JPG',
            'bennett_tp_2.JPG',
            'spence_tp_3.JPG'
        )
    }
    @{
        Slug = 'band-pics'
        SourceDir = Join-Path $repoRoot 'images\band_pics'
        Files = @(
            'band_15.jpg',
            'band_14.jpg',
            'band_13.jpg',
            'band_12.jpg',
            'band_11.jpg',
            'spence_band_17.jpg',
            'spence_band_16.jpg',
            'kevin_band_13.jpg',
            'hamza_band_8.jpg',
            'bennett_band_13.jpg'
        )
    }
    @{
        Slug = 'recording-bts'
        SourceDir = Join-Path $repoRoot 'images\rtw_photos'
        Files = @(
            'band_rtw_1.JPG',
            'mic_rtw_1.JPG',
            'keys_rtw_1.JPG',
            'kevin_rtw_1.JPG',
            'hamza_rtw_1.JPG',
            'spence_rtw_1.JPG',
            'bennett_rtw_1.JPG',
            'gtr_rtw_1.JPG'
        )
    }
)

foreach ($asset in $homepageAssets) {
    New-OptimizedAsset -SourcePath $asset.Source -DestinationPath $asset.Destination -Mode $asset.Mode -Width $asset.Width -Height $asset.Height -Quality $asset.Quality
}

foreach ($event in $mediaEvents) {
    $eventOutputDir = Join-Path $mediaOutputDir $event.Slug

    New-Item -ItemType Directory -Path $eventOutputDir -Force | Out-Null

    for ($index = 0; $index -lt $event.Files.Count; $index++) {
        $sourceFile = $event.Files[$index]
        $sourcePath = Join-Path $event.SourceDir $sourceFile
        $sequence = '{0:D2}' -f ($index + 1)

        if (-not (Test-Path $sourcePath)) {
            throw "Missing source image '$sourcePath'."
        }

        New-OptimizedAsset -SourcePath $sourcePath -DestinationPath (Join-Path $eventOutputDir "$sequence-card.jpg") -Mode 'fill' -Width 960 -Height 600 -Quality 72
        New-OptimizedAsset -SourcePath $sourcePath -DestinationPath (Join-Path $eventOutputDir "$sequence-full.jpg") -Mode 'fit' -Width 1800 -Height 1800 -Quality 80
    }
}

Get-ChildItem $repoRoot\images\optimized -Recurse -File |
    Sort-Object FullName |
    Select-Object FullName, @{ Name = 'SizeKB'; Expression = { [Math]::Round($_.Length / 1KB, 1) } } |
    Format-Table -AutoSize
