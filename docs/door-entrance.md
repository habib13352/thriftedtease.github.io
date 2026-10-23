# Through the Door

The homepage now uses the layered entrance to *Two Weeks Notice*. This is local source work; no deployment is part of this change. The original demo ZIP is preserved.

## Preview and architecture

Run `python -m http.server 8000 --bind 127.0.0.1` from the repository, then open:

- Homepage: `http://127.0.0.1:8000/`
- Isolated prototype: `http://127.0.0.1:8000/door_animation_tests/layered/`

The prototype shares `css/door-hero.css`, `js/door-hero.js`, and assets with the homepage. Its HTML intentionally contains only the scene and album section; update both markup copies when changing the scene structure.

The desktop story is three viewport heights (one visible scene plus two of travel). Phones up to 700px wide and short landscape screens use two heights. The stage uses stable viewport units to avoid mobile browser chrome changing the camera distance. The opening's measured bounds determine the camera target. Native scroll drives a single animation-frame update; there is no autoplay or scroll interception.

The foreground figure and shadow move faster than the doorway, while the landscape moves more slowly. The door remains open. The tunnel uses geometrically receding ellipses matched to the artwork's elongated proportions, drawn at viewport resolution with device pixel ratio capped at two. Its static SVG uses the same geometry. The tunnel therefore continues from the opening without crossfading to another pattern. Canvas redraws stop when progress is unchanged, including after the story.

The final fifth of the journey fades to the album section's background. `#home` and `#listen` remain supported. Skip to music now navigates directly to `stream.html`, as does the album feature's listening button. The dedicated page uses verified album destinations for Spotify and Apple Music and existing band/channel links for SoundCloud and YouTube.

Reduced motion, unavailable canvas, disabled JavaScript, or scene-image decode failure leave the ordinary one-screen scene. There is no long empty scrolling region. The media and contact sections and secondary-page navigation remain in place. The new scene and album section are excluded from shared section-reveal animations.

## Assets and regeneration

`images/door/source/` contains the three selected PNG outputs from the built-in image generation tool. They are reconstructions based on the supplied cover, not exact pixel extractions. The original album cover is unchanged. CSS creates independent ground shadows from a polygon and a projected copy of the figure.

`images/door/` contains responsive WebP derivatives, the optimized original album cover, and the procedural static tunnel SVG. Initial scene assets total approximately 372 KB desktop or 210 KB mobile; the album cover is another 96 KB, lazy loaded. These totals exclude the existing page styles, icons, and media below the feature.

Regenerate raster derivatives with installed ffmpeg:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prepare-door-assets.ps1
```

Crop coordinates refer to the retained generated source canvases. If replacing a source, recheck its crop and the opening's CSS bounds. Tunnel colors and ellipse geometry must agree between the SVG and JavaScript painter.

### Final generation prompts (built-in tool, not CLI)

Landscape, using the original cover:

> Edit target: supplied album cover. Create a clean wide 3:2 landscape background plate for a layered website animation. Remove completely the man, his shadow, door, frame, portal, door shadow, and ALL lettering/logos. Reconstruct the hidden orange desert and mountain ridge. Extend the landscape horizontally. Preserve the original blue sky, soft white clouds, orange desert, dark rust mountains, vintage photographic collage grain and lighting. Horizon at 51 percent of image height. No objects or text. Output only the background plate.

Door, using the original cover, transparent output:

> Use case background-extraction. Edit target supplied album art. Extract ONLY the complete red open door and cream rectangular doorframe, keeping identical front view, angle, proportions, handle, texture and colors. Remove the man, landscape, text and all black-white tunnel contents: opening inside frame must be genuinely TRANSPARENT, as must everything outside door and frame. Reconstruct frame where man obscured it. No ground shadow. Tightly frame the entire extracted door/frame assembly with small transparent margin, centered. Output transparent PNG cutout.

Figure, first pass using the original cover, transparent output:

> Use case background-extraction. Edit target supplied album art. Extract ONLY the full-length back-facing black-and-white man with bowler hat, dark suit, shoes and briefcase. Preserve original pose, silhouette, proportions, grain, and photographic collage appearance. Genuinely transparent background. Remove door, tunnel, scenery, lettering, and ground shadow. Full figure including shoes, centered in tight portrait canvas with small transparent margin. No new details or people.

Figure, selected refinement using that first pass, transparent output:

> Correct this cutout only: remove ALL background including the gray/white glowing halo surrounding the man's outline. Output the man with his briefcase on a genuinely transparent alpha background, crisp carefully masked silhouette edges. Absolutely no glow, no shadow, no background haze. Preserve this entire figure exactly. Full length with shoes. Tightly cropped portrait canvas.

## Verification

Acceptance checks passed in installed Microsoft Edge at 1440×900 and 390×844, with a resize to 844×390. Screenshots were reviewed at the opening, approach, tunnel, and album reveal. The shared mobile menu now collapses without its former padded overlay, uses the compact layout through 1000px, reports its expanded state, and closes with Escape.

With the local server running, `python scripts/verify-door.py` checks desktop and phone layouts, responsive image selection, scroll reversal, keyboard navigation through Skip to music, direct fragment loading, motion preference changes, orientation, no-JavaScript and failed-image fallbacks, and secondary-page navigation. It uses Playwright and installed Microsoft Edge, with screenshots under ignored `.cache/door-qa/`.

If Playwright is not installed: `python -m pip install --target .cache/qa playwright`. The browser is a QA dependency only; the site itself remains dependency free with no build step.

Physical-device smoothness and Safari/iOS rendering still need review on those devices. Desktop browser emulation does not establish real mobile GPU performance.
