# Identity and streaming implementation

Completed locally on October 23, 2026. No publishing is part of this change.

## Experience and files

All five pages share warm ink, cream paper, red actions, serif display headings, and square-edged controls. Tokens live in css/styles.css; css/identity.css supplies the shared finish and page layouts. The original cover, band photographs, show posters, and shirt colours remain intact.

stream.html provides the album introduction, Spotify and Apple Music album players, direct fallback links, SoundCloud, and a separate YouTube channel section. Specific video selections can be added later without changing the album players. Audio is user initiated. Players load lazily and stack on phones.

Every Stream navigation link, the hero Skip to music link, and the homepage All listening options link lead to stream.html. The homepage retains #listen, now with larger cover art and an inline, lazy-loaded Spotify album player. A one-time 650ms entrance introduces the details; reduced-motion, keyboard focus, and no-JavaScript experiences keep them static. The album flows directly into Contact, with the former gallery and divider removed. The doorway geometry and static fallbacks remain intact.

## Verified destinations

- Spotify: https://open.spotify.com/album/4H9qIaUgfiSg7yycOVRrJH (identified through https://linktr.ee/thriftedtease).
- Apple Music: https://music.apple.com/ca/album/two-weeks-notice/1847751617
- SoundCloud: https://soundcloud.com/thriftedtease
- YouTube: https://www.youtube.com/channel/UCr0SN3FVP-U01tANF-V4nBA

Both live album embeds rendered the correct album artwork and track listings during Edge verification. Apple took longer to initialize. Direct links remain available when a provider is blocked; full playback and sign-in depend on the provider and were not exercised.

## Assets

Generated with the built-in imagegen tool, referencing images/door/source/landscape.png, without transparency. Retained PNG sources are images/identity/source/{paper,panorama,divider}.png. No generated substitute band photos or logos are used.

| Web asset | Bytes |
| --- | ---: |
| paper.webp | 1,106 |
| panorama-desktop.webp | 116,466 |
| panorama-mobile.webp | 39,850 |
| divider-desktop.webp | 85,978 |
| divider-mobile.webp | 15,196 |

Regenerate derivatives with installed ffmpeg:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prepare-identity-assets.ps1
```

### Exact generation prompts

**paper**

> Use case stylized-concept. Supporting reference: supplied Two Weeks Notice desert landscape. Generate a flat scanned warm cream paper texture for a website background, 1024 by 1024. Match the fine vintage printed grain of the reference, but no scenery. Very subtle tiny fibers and extremely low contrast warm ivory variation, evenly lit edge to edge. Base color approximately #F2E9D8. No stains, folds, torn edges, vignette, lettering, drawings or objects. Quiet enough for small dark text.

**panorama**

> Edit target: supplied Two Weeks Notice landscape. Create a new wide 3:2 panoramic view of this same desert for the website contact section. Preserve photographic collage style, orange-rust earth, brown mountain ridges, pale blue sky and fine printed grain. Mountains low on horizon at 65 percent height, lots of quiet sky above, subtle low clouds at edges, textured foreground below. Extend the same world; no new landmarks, no door, man, portal, shadows of objects, lettering or logos. Clear calm space on the left half for an overlaid contact panel, more interesting ridge on right. Full bleed landscape, no borders.

**divider**

> Supporting reference: supplied Two Weeks Notice desert. Generate a shallow wide panoramic photographic collage mountain divider for a website, landscape 3:1 composition. A continuous chain of low dark rust mountains stretches edge to edge across the middle; pale sky blue above in top third and burnt orange desert below in lower third. Match original fine printed grain and cut-paper photographic atmosphere. Simple strong silhouette, no large foreground peaks. No people, doors, portals, letters, logos or borders. This is a decorative horizontal landscape band, not a new scene.

## Verification and preview

Run a local server from the repository:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/stream.html or the homepage.

With Playwright installed under .cache/qa and Microsoft Edge installed:

```powershell
python scripts/verify-door.py
python scripts/verify-identity.py
```

Both suites passed. Identity checks cover all five pages at 1440x900, 390x844, and 844x390: overflow, missing local assets, page errors, streaming routes, iframe sizing and titles, phone-specific landscape downloads, and blocked-third-party/no-JavaScript fallback links. Screenshots are saved under ignored .cache/identity-qa/. Door checks cover scroll direction, resize, legacy #listen, keyboard skip navigation, motion preferences, static fallbacks, and secondary-page mobile navigation.

Main text/button contrast pairs pass WCAG AA (ink/paper 15.38:1, muted dark/paper 6.14:1, cream/red 5.94:1); this is not a full accessibility audit. Physical phone performance and Safari/iOS still require device review. Existing show dates, merchandise placeholder products, and media content were preserved.

