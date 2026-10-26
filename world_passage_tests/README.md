# The Passage test prototypes

This directory parks the Gate 1 visual exploration for a possible post-album hallway sequence. It is deliberately isolated from the live site and from `door_animation_tests`; nothing here is included by the current pages.

## Gate 1 preview

Open `gate1/index.html` through a local HTTP server from the repository root:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then visit:

`http://127.0.0.1:8000/world_passage_tests/gate1/`

The prototype shows an album-context block, a desktop-only native-scroll approach through the checkerboard arches, one dissolve into the organic portal, a static mobile/reduced-motion fallback, keyboard-accessible links, and a crop-study panel. The `Listen` and `Explore media` links are real destinations; `Skip scene` jumps to the following placeholder Contact block.

## Scope and provenance

- `index.html`, `styles.css`, and `passage.js` are standalone review code. They are not loaded by `index.html` or any existing route.
- `assets/` contains only responsive WebP derivatives made from the supplied hallway PNGs. The original PNGs and ZIP remain in `images/Additional_Assets/` unchanged.
- Selected hallway sources: `hall/01-checkerboard-arches.png` for the opening and `hall/03-organic-portal.png` for the deferred second scene. `hall/02-motel-corridor.png` appears only as a small comparison crop.
- Desktop hallway derivatives are approximately 224 KB and 242 KB; the mobile opening is approximately 103 KB. These are prototype measurements, not an integration budget.

## Review status

Gate 1 browser checks passed in Microsoft Edge at 1440×900, 390×844, 320×700, and 844×390. The checks cover responsive source selection, overflow, reverse scrolling, direct hash navigation, keyboard skip, reduced motion, no JavaScript, failed second-image fallback, and console errors.

Integration remains intentionally parked. Do not copy these files into the live root or add them to shared CSS/JS until the concept, placement, pacing, and scroll length receive separate approval.
