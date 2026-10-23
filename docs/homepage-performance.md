# Homepage Performance Notes

The current layered doorway hero and asset sizes are documented in [Through the Door](door-entrance.md). The video and static-hero baselines below are historical; the homepage no longer initializes the hero video.

The shared identity includes a 1,106-byte paper texture. The homepage now omits the gallery and divider; its lazy-loaded contact panorama is 116,466 bytes on desktop or 39,850 bytes on phones. Responsive pictures avoid downloading the desktop version on phones. These assets add no new hero imagery. A lazy-loaded Spotify album player appears in the homepage album reveal; the dedicated streaming page also offers Apple Music. Provider-controlled resources add network cost as the player approaches the viewport. See [identity and streaming notes](identity-and-streaming.md).

## Baseline

The original homepage requested these local assets on first load:

- `images/hero.mp4` at about `3788 KB`
- `images/kevin.JPG` at about `5431 KB`
- `images/bennett.JPG` at about `6328 KB`
- `images/hamza.JPG` at about `6258 KB`
- `images/spencer.JPG` at about `5995 KB`

That put the homepage's local media payload at roughly `27800 KB` before CSS, JS, fonts, or any browser overhead.

## Homepage asset convention

Homepage-ready assets now live in `images/optimized/homepage/`.

- `*-thumb.jpg` is the displayed gallery thumbnail
- `*-full.jpg` is the larger image opened from the expand action
- `hero-album-top.jpg` is the 1560 x 520 static strip cropped from the album art's top third; CSS blends it into navy
- `hero-home.jpg` is the previous Spencer fallback, retained but no longer requested by the home hero
- `hero-desktop.mp4` is the retained desktop video asset, currently disabled

Media-page assets now live in `images/optimized/media/`.

- `hero-media.jpg` is the optimized media-page hero background
- each venue gallery now has its own folder such as `images/optimized/media/cameron-house/`
- `NN-card.jpg` is the displayed media-card thumbnail inside a venue folder
- `NN-full.jpg` is the larger image opened from the media page

Keep original source photos and source video outside the deploy path when possible. Commit only web-ready derivatives.

## Hero video policy

The homepage is currently static. The video element and its initialization call
are commented out, so no MP4 is requested. Search for `RESTORE HERO VIDEO` in
`index.html` and `js/main.js` for the two restoration steps.

- `images/hero.mp4` stays in the repo as an optional future enhancement
- the first render uses `hero-album-top.jpg`
- once restored, the desktop page can attach `images/optimized/homepage/hero-desktop.mp4` only after page load
- mobile and constrained users should remain image-only

## Regeneration workflow

To regenerate only the hero crop while preserving other derivatives:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\optimize-homepage-assets.ps1 -HeroOnly
```

The source is `images/Two_Weeks_Notice_albumart/Thrifted Tease_Two Weeks Notice Album Cover.png`.
The script crops the full width and top third, then exports a 3:1 JPG. Keep the
source unchanged; adjust the gradient in `.hero::before` to tune the blend.

Run this from the repo root when homepage or media-page source images change:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\optimize-homepage-assets.ps1
```

This script creates resized JPG derivatives for the homepage and `media.html` so those pages do not ship source-resolution images. It now uses `ffmpeg`, which lets the media archive process JPG, PNG, and HEIC source folders into venue-specific output directories.

The desktop hero video is managed separately with `ffmpeg`:

```powershell
ffmpeg -y -i images\hero.mp4 -an -c:v libx264 -preset slow -crf 30 -vf scale=1080:-2 -pix_fmt yuv420p -movflags +faststart images\optimized\homepage\hero-desktop.mp4
```

Keep the desktop video in `images/optimized/homepage/` and avoid preloading it from HTML.
