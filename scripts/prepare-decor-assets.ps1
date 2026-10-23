param([string]$RepositoryRoot = (Join-Path $PSScriptRoot '..'))
$ErrorActionPreference = 'Stop'
$output = Join-Path $RepositoryRoot 'images/optimized/decor'
New-Item -ItemType Directory -Force $output | Out-Null

$assets = @(
    @{ Name='hypnotic-tv'; Source='images/Additional_Assets/tv/01-hypnotic-spiral.png' },
    @{ Name='melted-door'; Source='images/Additional_Assets/mirror/05-melted-red-door.png' },
    @{ Name='desert-tv'; Source='images/Additional_Assets/tv/03-desert-broadcast.png' },
    @{ Name='punch-clock'; Source='images/World_Assets/Thrifted-Tease-World-Assets/props/07-time-punch-clock.png' },
    @{ Name='departure-ticket'; Source='images/World_Assets/Thrifted-Tease-World-Assets/props/08-departure-ticket.png' },
    @{ Name='mushroom-brogues'; Source='images/Additional_Assets/shoes/04-mushroom-brogues.png' },
    @{ Name='open-briefcase'; Source='images/Character_Assets/Thrifted-Tease-Character-Assets/open-briefcase.png' }
)

foreach ($asset in $assets) {
    $source = Join-Path $RepositoryRoot $asset.Source
    foreach ($size in @(@{ Suffix='desktop'; Edge=600; Quality=70 }, @{ Suffix='mobile'; Edge=320; Quality=66 })) {
        $filter = "scale='if(gt(iw,ih),$($size.Edge),-2)':'if(gt(iw,ih),-2,$($size.Edge))'"
        $destination = Join-Path $output "$($asset.Name)-$($size.Suffix).webp"
        & ffmpeg -hide_banner -loglevel error -y -i $source -vf $filter -frames:v 1 -c:v libwebp -quality $size.Quality $destination
        if ($LASTEXITCODE -ne 0) { throw "Image export failed: $destination" }
    }
}
