# Thrifted Tease — Plan for Dev 3

Status: proposal only. Prepared October 23, 2026 from the supplied Website Creative Direction and Codex Audit Brief and a targeted local repository inspection.

## Goal and boundaries

Develop the surreal, tactile world of *Two Weeks Notice* while preserving the site's music, photographs, routes, branding, and usable interactions. The album cover is the canonical reference: vermilion door, monochrome optical tunnel, suited traveller, rust desert, blue sky, and analogue print texture.

This document authorizes no implementation, generation, deployment, or repository cleanup. The initial delivery is this plan file. A full evidence-based audit comes before further design changes. Do not treat proposed assets as requirements to use every asset.

## Branch and baseline plan

- Proposed branch name: `dev-3` (Git branch names cannot contain spaces).
- Current branch at inspection: `dev2`. Existing branches include `dev1`, `main`, and a backup branch; `dev-3` was not present.
- There are staged changes across the homepage, media archive, streaming page, styles, scripts, documentation, and character assets. Do not reset, discard, unstage, or silently commit them.
- Before branch creation, inventory staged and unstaged diffs and establish an explicitly authorized baseline commit containing the intended Dev 2 work. Alternatively, carry the worktree onto the new branch if the user chooses that workflow. Record the base commit so Dev 3 changes remain reviewable.
- Once the baseline is settled and branch creation is authorized, create `dev-3` from that baseline. No merge into `main`, push, or deployment is implied.

## Current-state map and audit priorities

The observed site uses static HTML, shared CSS, and vanilla JavaScript. No framework migration is proposed. The local repository, not the earlier hosted demonstration, is the source of truth.

| Area | Current implementation | Dev 3 treatment |
| --- | --- | --- |
| Home | `index.html`; layered doorway, album reveal with Spotify, plain contact panel with suited figure | Preserve the working narrative and direct listening access |
| Music | `stream.html`; dark composition, platform tabs, template-based iframe mounting, no-JavaScript players | Finish browser and playback validation before adding decoration |
| Media | `media.html`; uniform photo/video grids, desktop gallery rail, mobile menu, grouped photo viewer | Preserve the latest grid and navigation decisions |
| Shows | `shows.html`; poster/date/ticket presentation | Audit real dates and links; consider restrained ticket styling |
| Merch | `merch.html`; existing product presentation and external store links | Preserve products and destinations; do not invent inventory |
| About | No dedicated About page among the five current entrypoints | Propose only after locating an approved biography and choosing placement |
| Shared design | `css/styles.css`, `css/identity.css`, page-specific styles | Consolidate deliberately after documenting cascade and dependencies |
| Motion | Doorway requestAnimationFrame updates, section reveals, heading entrances | Reuse existing mechanisms; audit reduced motion and hidden-content failures |
| Assets | Door layers, identity derivatives, optimized media, ten-PNG character pack | Inventory and reuse before generating |
| QA | `scripts/verify-door.py`, `scripts/verify-identity.py` | Update stale assertions, then verify current behaviour |

The README describes GitHub Pages hosting, but the actual publishing branch/settings still need verification. No `.github` directory was found during this targeted inspection. Do not infer a deployment workflow from that absence.

### Evidence-backed priorities for the full audit

1. **High: streaming verification gap.** The latest tabbed streaming implementation received static checks only. Existing identity checks still contain assumptions from the previous layout, including both live iframes and removed sections. Update the checks before claiming acceptance.
2. **High: content truth.** Review show dates, ticket destinations, merchandise descriptions, biography availability, and video attribution. Existing YouTube playlist positions do not establish that a clip belongs to a named venue.
3. **Medium: documentation drift.** Earlier documents describe the cream player section, panorama contact background, and earlier media layouts. Reconcile them with the actual pages.
4. **Medium: styling complexity.** Shared and page-specific overrides require a cascade audit before cleanup. Remove dead rules only after confirming they are unused by all pages and the reference prototype.
5. **To verify, not established defects:** focus visibility, touch targets, image cropping, mobile overlays, contrast on artwork, social previews, layout shifts, and motion performance.

The full audit must cite file paths and line references, distinguish observed issues from hypotheses, and state which previews or devices were actually inspected. Do not invent Core Web Vitals scores.

## Creative system

Retain the existing starting tokens: ink `#151311`, dark surface `#231f1b`, ivory `#f2e9d8`, light paper `#fbf6ec`, door red `#c64125`, action red `#ac351e`, rust `#b65b2d`, and sky `#8ebbe9`. Compare these against the original cover before adjusting; these are current implementation values, not newly measured colour samples.

- Use red sparingly for the doorway, important actions, and active navigation. Keep secondary actions quieter.
- Retain Georgia display typography and the existing system body stack initially. Preserve the handwritten band mark; do not generate a replacement logo.
- Standardize spacing around an 8px base: 8, 16, 24, 32, 48, 64, and 96px. Retain responsive clamps where needed.
- Use subtle paper or ink texture only where it helps the composition; no texture over readable text or player controls that reduces contrast.
- Keep photographs in their original colours. Avoid shiny 3D, neon, glitch effects, generic gradients, and unnecessary decorative cards.
- Keep entrances short, approximately 400–650ms, and disable them for reduced motion. Do not add continuous movement to controls or essential content.

## Asset placement and production plan

Existing character sources are in `images/Character_Assets/Thrifted-Tease-Character-Assets/`. Its README describes generated interpretations, not exact cover extractions. Visually inspect alpha edges, grain, lighting, and resolution before using them. Keep source PNGs; serve appropriately sized WebP derivatives.

| Concept / priority | Placement and production decision | Responsive, motion, and fallback rules |
| --- | --- | --- |
| Isolated red door / P0 concept | Audit existing `images/door/door.webp` first; reuse rather than regenerate | Foreground layer above portal; preserve current portal alignment and static fallback |
| Closed/open pair / deferred | Existing open door remains the default; generate only if opening motion is approved | Matched frame, camera, and hinge geometry required; no mandatory interaction |
| Optical portal / P0 concept | Reuse current SVG/canvas geometry | Behind door; no animation behind player controls; static SVG for fallback |
| Desert panorama / P0 concept | Reuse responsive hero landscape derivatives | Background beneath cutouts; mobile-specific crop; do not restore removed contact clouds |
| Clouds / P1 concept | Optional hero atmosphere only after core validation | Two or three decorative cutouts; no drift in reduced motion; omit on constrained mobile layout |
| Notice letter / P1 concept | Candidate About treatment after real bio is approved | Paper image behind HTML text; never rasterize biography or invent personal information |
| Timecard / P2 concept | Defer unless shows styling needs it | Decorative only; no fabricated countdown or schedule |
| Departure ticket / P1 concept | Candidate show-row treatment | Keep date, venue, status, and link as semantic HTML; simplify to plain rows on phones |
| Long shadow / P2 concept | Audit existing CSS shadow before creating a bitmap | Keep beneath figure; no pointer motion on touch or reduced-motion devices |
| Texture kit / P0 concept | Reuse paper tile; generate grain/ink tiles only for demonstrated gaps | Small repeatable WebP tiles, low opacity, no large texture downloads |
| Existing character pack | Prefer current standing man in contact; consider one accessory in About or merch | Decorative empty alt text unless conveying real content; no repeated figures on every page |

For each approved asset, record its exact destination, crop, stacking order, source reference, generation prompt if applicable, derivative dimensions, byte size, loading priority, and fallback. Background sources may be 2400px+ wide; cutout sources should support their maximum rendered size at approximately 2x. Export responsive derivatives rather than shipping full-resolution PNGs to phones. Below-fold decoration is lazy-loaded.

## Hero architecture and narrative

Keep native scrolling, the sticky scene, CSS transforms, and the existing single requestAnimationFrame update. This fits the current stack and gives explicit reverse-scroll and responsive alignment control. Native CSS scroll timelines may be evaluated later as progressive enhancement, but are not a prerequisite. No new animation library, 3D engine, scroll interception, or heavyweight video is planned.

Audit the existing sequence rather than rebuilding it:

1. Establish the complete landscape, man, red door, and portal.
2. Approach with distinct layer speeds and the measured portal position as zoom target.
3. Pass the threshold; remove the figure cleanly from view and retain crisp tunnel rings.
4. Continue through the tunnel without seams or exposed image edges.
5. Arrive at an immediately usable music feature, with no dead black interval or scroll trap.

Retain approximately two viewport heights of desktop travel and one on phones, in addition to the scene viewport. Preserve reverse scrolling, resizing, direct fragments, the visible skip link, static/no-JavaScript fallbacks, and user-initiated audio. Door-opening animation remains a separate optional experiment.

## Ranked implementation roadmap

Each row is a reversible review-sized change after approval. Effort is relative, not a delivery estimate.

| Order | Priority / effort | Work and dependency | Acceptance / main risk |
| --- | --- | --- | --- |
| 1 | P0 / S | Record baseline, complete code/content/asset audit, reconcile documentation | Findings cite evidence; no unrelated staged work lost; deployment assumptions explicit |
| 2 | P0 / M | Update streaming tests and fix only demonstrated defects | Tabs, provider loading, playback teardown, no-JS, anchors, keyboard, and layout pass; external providers remain a dependency |
| 3 | P0 / M | Document tokens, responsive breakpoints, asset inventory, and measured performance baseline | No visual regressions; mobile does not request unnecessary desktop assets |
| 4 | P1 / M | Tune existing hero only where audit evidence shows problems | Beginning, midpoint, threshold, and arrival look aligned; reverse/fast scroll and motion fallbacks work |
| 5 | P1 / M | Introduce a restrained ticket motif on shows after content verification | Real show text and working links remain primary; no fabricated details |
| 6 | P1 / M | Add approved biography presentation using notice-paper motif | Depends on genuine bio and placement decision; readable semantic text, real photography |
| 7 | P2 / S–M | Selective texture/accessory refinements across music, merch, and footer | Preserve dark stream layout, media grids/rail, and plain suited-man contact treatment |
| 8 | P2 / M | Cross-page accessibility, performance, metadata, documentation, and regression pass | Verified local acceptance report; separate decision for publishing |

## Validation and release gates

- Preview locally with `python -m http.server 8000 --bind 127.0.0.1`. Existing browser suites use Python Playwright and installed Edge. Inspect dependencies before running; do not install packages as part of the initial audit.
- Cover 320px and 390px phones, tablet, phone landscape, standard desktop, and widescreen. Check overflow, navigation overlap, focus order, and touch controls.
- Verify all five pages, existing fragments, platform URLs, contact links, media viewer navigation, desktop rail, mobile gallery menu, and menu dismissal.
- On streaming: test repeated provider switching, removal of the previous iframe, no autoplay, keyboard tabs, blocked embeds, no JavaScript, stable player height, and direct `#album-players` loading. Distinguish actual audio testing from checking iframe removal.
- Test reduced motion, keyboard-only use, slow network, image failure, and scroll reversal. Check contrast rather than assuming brand colours meet requirements.
- Measure request counts, transferred asset bytes, layout shifts, and responsiveness before setting numerical performance budgets. No new framework or unapproved runtime dependency; no regression without documented justification.
- A physical phone and Safari/iOS check remain explicit acceptance tasks, not claims supported by desktop emulation.
- Publish only after the local review is accepted and deployment is separately authorized.

## Open decisions for the audit review

1. Should the Dev 2 staged work be committed as the branch baseline, or carried onto `dev-3`?
2. Where should an About section live, and which biography is approved?
3. Should the door ever open, or should the established open-door entrance remain definitive?
4. Which ticket/paper motif is worth adding after reviewing a concrete mockup?
5. Which actual logo source should be used wherever the handwritten mark replaces text branding?

## Recommended first implementation slice

After the baseline and audit are approved, finish the focused streaming page's browser validation and repair its stale test coverage. It is the clearest known gap in the current experience. Establish a reliable Dev 2 baseline before expanding the visual system or generating additional assets.
