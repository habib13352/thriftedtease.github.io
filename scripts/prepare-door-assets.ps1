param(
    [string]$SourceDirectory = (Join-Path $PSScriptRoot '../images/door/source'),
    [string]$OutputDirectory = (Join-Path $PSScriptRoot '../images/door')
)
$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
function Export-WebImage($InputFile, $OutputFile, $Filter, $Quality) {
    & ffmpeg -hide_banner -loglevel error -y -i $InputFile -vf $Filter -frames:v 1 -c:v libwebp -quality $Quality $OutputFile
    if ($LASTEXITCODE -ne 0) { throw "Image export failed: $OutputFile" }
}
Export-WebImage (Join-Path $SourceDirectory 'landscape.png') (Join-Path $OutputDirectory 'landscape-desktop.webp') 'scale=1536:1024' 82
Export-WebImage (Join-Path $SourceDirectory 'landscape.png') (Join-Path $OutputDirectory 'landscape-mobile.webp') 'crop=672:1024,scale=672:1024' 78
Export-WebImage (Join-Path $SourceDirectory 'door.png') (Join-Path $OutputDirectory 'door.webp') 'crop=800:1190:260:40' 88
Export-WebImage (Join-Path $SourceDirectory 'figure.png') (Join-Path $OutputDirectory 'figure.webp') 'crop=516:1512:260:12,scale=258:756' 86
Export-WebImage (Join-Path $PSScriptRoot '../images/Two_Weeks_Notice_albumart/Thrifted Tease_Two Weeks Notice Album Cover.png') (Join-Path $OutputDirectory 'album.webp') 'scale=800:800' 86
