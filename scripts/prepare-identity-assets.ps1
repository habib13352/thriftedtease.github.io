param([string]$SourceDirectory = (Join-Path $PSScriptRoot '../images/identity/source'))
$ErrorActionPreference = 'Stop'
$outputDirectory = Join-Path $PSScriptRoot '../images/identity'
function Export-IdentityImage($Name, $OutputName, $Filter, $Quality) {
    & ffmpeg -hide_banner -loglevel error -y -i (Join-Path $SourceDirectory $Name) -vf $Filter -frames:v 1 -c:v libwebp -quality $Quality (Join-Path $outputDirectory $OutputName)
    if ($LASTEXITCODE -ne 0) { throw "Image export failed: $OutputName" }
}
Export-IdentityImage 'paper.png' 'paper.webp' 'scale=512:512' 65
Export-IdentityImage 'panorama.png' 'panorama-desktop.webp' 'scale=1440:960' 78
Export-IdentityImage 'panorama.png' 'panorama-mobile.webp' 'crop=684:1024,scale=640:960' 74
Export-IdentityImage 'divider.png' 'divider-desktop.webp' 'scale=1600:-2' 78
Export-IdentityImage 'divider.png' 'divider-mobile.webp' 'scale=720:-2' 74
