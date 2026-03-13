# Homepage Performance Notes

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
- `hero-home.jpg` is the static hero background used for first paint
- `hero-desktop.mp4` is the deferred desktop-only hero video asset

Media-page assets now live in `images/optimized/media/`.

- `hero-media.jpg` is the optimized media-page hero background
- each venue gallery now has its own folder such as `images/optimized/media/cameron-house/`
- `NN-card.jpg` is the displayed media-card thumbnail inside a venue folder
- `NN-full.jpg` is the larger image opened from the media page

Keep original source photos and source video outside the deploy path when possible. Commit only web-ready derivatives.

## Hero video policy

The homepage remains image-first.

- `images/hero.mp4` stays in the repo as an optional future enhancement
- the first render should continue using `hero-home.jpg`
- the desktop page can attach `images/optimized/homepage/hero-desktop.mp4` only after first paint
- mobile and constrained users should remain image-only

## Regeneration workflow

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
