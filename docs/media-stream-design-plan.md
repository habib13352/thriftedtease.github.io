# Media and Stream: layout and art direction

Planning proposal, October 26, 2026. This document proposes the next pass; it does not change the pages.

## Direction

Extend the homepage's album world: open space, warm ink, printed texture, rust earth, cream typography, and a clear focal point. The homepage establishes the doorway; Media and Stream should feel like destinations reached through it. Immersion comes from consistent materials, lighting, scale, and composition across those destinations.

The reference PNGs are composition references, not literal templates. Their useful qualities are continuous surfaces, artwork anchored to the terrain, strong editorial type, and clear content regions. Their decorative density should be reduced for a usable website.

## Principles

1. Content establishes the hierarchy. On Media, real band photography is dominant; on Stream, the album and listening controls are dominant.
2. One decorative object per page. One quiet setting supports that object. Do not add an illustration to every gallery or content section.
3. Reserve art space in the layout. Artwork can overlap the landscape, but cannot cover text, controls, navigation, or focus indicators.
4. Compose a scene. Give objects a plausible ground plane, consistent warm light, matching grain, and restrained contact shadows. Avoid unrelated floating objects and conspicuous glows.
5. Keep comfortable reading widths and deliberate whitespace. Use two main columns on Stream; do not squeeze prose into a third column.
6. Maintain a shared content spine. Page titles, album/video edges, gallery headings, and section rules should align to consistent gutters.
7. Match the material, not every color. Preserve the original album and photographs; background treatment should not tint the content.
8. Movement must explain a transition or acknowledge interaction. Keep ordinary scrolling, stable controls, subtle photo hover feedback, and reduced-motion support. Backgrounds do not need parallax or looping animation.

## Media layout

Desktop content width approximately 1240–1320px, with 40–64px outer gutters when space permits. Keep the opening around 280–340px below the navigation so the first gallery appears promptly.

```text
SHARED NAVIGATION
---------------------------------------------------------------
THE ARCHIVE                                   modest desert TV
Photos & Films                               grounded at edge
One short line of introduction                   quiet terrain
---------------------------------------------------------------
Cameron House                                   GALLERIES
Verified venue/context                          Cameron House
                                                El Mocambo
[ real photo ][ real photo ][ real photo ]       Painted Lady
[ real photo ][ real photo ][ real photo ]       ...
[ remaining photos and clearly labeled film ]

Next venue
...
```

- Use the existing desert-broadcast TV at roughly 280–340px wide on large screens. It is an introduction accent, smaller than the gallery's visual weight.
- Keep gallery sections in a predictable grid rather than a scattered scrapbook or masonry layout. Start with three columns; use two on tablets and one on narrow phones.
- Review thumbnail focal points individually, especially tightly cropped faces. Keep full photographs available in the existing viewer.
- Reduce repetitive descriptive captions to useful, short labels. Keep video labels explicit. Do not invent dates, credits, or venue-specific video claims.
- Keep a restrained sticky venue index in its own desktop column. Replace the floating phone button with a compact in-flow sticky Galleries control below the navigation, to avoid covering photos. Its expanded menu must remain keyboard accessible and fit the viewport.
- Use quiet textured ink through the archive. Terrain belongs at the opening, not behind every venue heading or thumbnail.
- Give each venue a clear pause: heading, small context line, media, then generous separation before the next venue.

Phone: short introduction, no decorative TV, gallery chooser, then photos. Text and imagery get the full available width. The first photograph should appear within approximately the first screen at a typical phone size.

## Stream layout

Use a centered composition approximately 1120–1200px wide. Replace the three-column cover/player/story arrangement with two comfortable columns. Remove the melted-door mirror from this page.

```text
SHARED NAVIGATION
---------------------------------------------------------------
THRIFTED TEASE / LISTEN
Two Weeks Notice

[ original album cover ]       Spotify | Apple Music
[ original album cover ]       [ native album player          ]
[ original album cover ]       [                              ]
Short liner note below cover   Open in selected platform

                  generous pause / subtle rule

WATCH
Listen on YouTube
[ wide native video player                 ]    spiral TV
[                                          ]    on low terrain
Open playlist on YouTube
---------------------------------------------------------------
```

- Let the cover and listening controls lead. Use a cover around 380–440px on desktop and a player column at least approximately 400px wide where space permits.
- Place the short album description beneath the cover as a liner note, with comfortable line length. Keep actual prose secondary to listening.
- Keep Spotify and Apple Music as clearly labeled tabs with the existing lazy mounting and keyboard behavior. Leave direct platform links available.
- Remove the redundant Listen now anchor next to an already visible player. Use the native play control and clearly labeled external link as the actions.
- Give YouTube a separate, calmer section. Keep its player as an ordinary rectangular embed. The spiral TV sits to its right at approximately 240–300px wide, smaller than the video and anchored to one low rock shelf.
- Use no decorative mirror, extra door, ticket, letter, hat, or shoes here. Those assets remain available elsewhere in the site.

Phone: title, cover capped around 260–300px, platform chooser and player, short liner note, YouTube. Hide the decorative TV and terrain. Avoid a tall introduction that delays the listening controls.

## Asset selection

| Asset | Decision | Role |
| --- | --- | --- |
| Original Two Weeks Notice cover | Keep, dominant | Album identity and connection to homepage |
| Real venue/band photographs | Keep, dominant on Media | Authentic performance archive |
| Desert-broadcast TV | Keep, reduce | Single Media introduction accent |
| Hypnotic-spiral TV | Keep, reduce | Single Stream accent beside YouTube |
| Melted-door mirror | Remove from Stream | Competes with album and TV in this composition |
| Dark ink grain | Keep, refine scale | Continuous quiet material across both pages |
| Generated rocky backdrop | Adapt placement | Limited terrain beneath decorative objects |
| Hallway illustrations | Reserve | Too visually dense behind these galleries or players |
| Hats, shoes, briefcases, clock, ticket | Reserve | Adding them here weakens the pages' focal points |
| Optical portal and red door | Refer through existing album art | Avoid repeating the homepage's entrance on every page |

Existing optimized cutouts are available in `images/optimized/decor/`. The broader source library is in `images/Additional_Assets/`, `images/World_Assets/`, and `images/Character_Assets/`. Source PNGs remain design material rather than production downloads.

## Generation only if needed

First compose the two layouts using the existing assets. If the TV feet and terrain still fail to align, generate one small, low desert ground plate matched to their viewpoint and palette, with empty dark space around it. Reuse it across the two compositions with different crops and opacity where appropriate.

If the grain appears enlarged or blurred on wide displays, create a genuinely seamless fine ink texture. It must have no bright flecks, obvious scratches, directional lighting, or recognizable landmarks that reveal repetition.

New decorative objects, replacement album art, generated performance photographs, and full-page raster UI mockups are unnecessary for this pass.

## Implementation sequence

1. Build the Media and Stream layouts with quiet backgrounds and existing content. Set widths, type scale, spacing, and mobile order before decorating.
2. Select the actual Media thumbnail crops and simplify captions. Confirm reading and keyboard order remain predictable.
3. Place one decorative object on each page. Tune the terrain and shadow around that exact object placement, not the other way around.
4. Check the paired desktop compositions and phone layouts for balance. Generate a missing supporting background asset only if a specific gap remains.
5. Consolidate the current atmosphere/layout overrides into clear shared material rules and page-specific layout rules to make later refinement predictable.
6. Verify navigation, gallery chooser/viewer, streaming tabs, blocked embeds, direct links, no JavaScript, and reduced motion. Keep the homepage as the comparison point for coherence.

## Review criteria

- Within a few seconds, a visitor can identify the page and its primary action.
- There is one dominant content area and no more than one decorative focal object per page.
- The first media gallery appears promptly; listening controls are easy to reach on phones.
- Backgrounds stay quiet behind text; images retain their original color; focus states remain obvious.
- Artwork never covers a photo or control, including at intermediate widths.
- The grain stays fine and consistent; terrain fades without hard seams or stretched rocks.
- Controls have comfortable touch targets, roughly 44px minimum where practical.
- Desktop, tablet, narrow phone, and landscape phone layouts have no horizontal overflow.
- Playback stays user initiated, and the site remains usable when third-party players fail.
- Changes remain local until publication is requested.
