# Dev2 launch plan: 1–3 hours per week

Reviewed against all 14 existing docs, README, and the dev2 source on October 20, 2026. This is the working plan for launch scope and weekly priorities. The older V2 documents remain creative references; their full redesign and approval sequence are not prerequisites for this release.

## Goal and budget

Publish a credible, readable band website where visitors can listen, find accurate show information, contact the band, view selected media, and **buy real shirts through Square**. Working merch is required at launch, as confirmed by Hamza. A coming-soon merch page does not satisfy this goal.

Keep the four pages and static HTML/CSS/JavaScript stack. Improve the existing design with real assets, concise copy, and a consistent palette. Do not rebuild the homepage or introduce a framework to launch.

Budget **15–23 focused hours plus 3 hours of contingency: 18–26 hours total**. This includes Hamza's setup, photo preparation, review, testing, and release work. Band asset delivery and response time can extend the calendar. These are estimates, not a promised launch date; revise them after the first two hours and after Square setup.

| Actual weekly time | Approximate launch window |
| --- | --- |
| 1 hour | 18–26 weeks |
| 2 hours | 9–13 weeks |
| 3 hours | 6–9 weeks |

The older strict roadmap estimates 38–64 hours for a fuller redesign, or roughly 13–64 weeks at this pace. That work should not all sit between us and launch.

## What is already there, and what still needs work

| Area | Evidence from current dev2 | Launch action |
| --- | --- | --- |
| Foundation | Four static pages, shared styles/scripts, optimized media, deferred desktop hero video | Keep it; verify in browsers rather than rebuild |
| Local links | Static inspection found no missing local HTML/CSS asset targets or local HTML anchors | Repeat after edits and on the deployed site; this does not prove external links or rendering work |
| Shows | Four dates from April–July 2026 still appear under upcoming shows; empty state is commented out | Publish confirmed future dates only, or activate the honest empty state; do not treat unconfirmed old entries as verified past gigs |
| Merch | Three CSS shirt mockups, no product prices, Shopify links on merch and the homepage | Confirm actual launch inventory, replace mockups with real photos, connect and test Square |
| Media | 63 image elements, seven playlist-based embeds, generic captions, empty Sneaky Dees section | Select a small accurate set; use verified video IDs and remove empty sections |
| Branding | Existing logos/photos; current CSS is navy, rust, parchment, and teal | Ask for current assets and colour input; do one bounded visual pass, not a complete identity exercise |
| Accessibility | Four unnamed hamburger buttons; toggle does not expose expanded state; reduced-motion handling exists for video but not the general reveal/smooth-scroll behaviour | Fix menu naming/state, keyboard visibility and access, and reduced motion; verify contrast |
| Photo viewer | Photos link to full images in new tabs; no lightbox implementation in the shared script | Keep usable direct image links at launch; defer a custom viewer |
| Contact/social | Email and platform links exist in source | Hamza confirms ownership and mailbox delivery; remove unverified social destinations |
| Hosting | README names a GitHub Pages project URL; no local workflow or CNAME file found | Confirm actual Pages settings, production branch, URL, and deployed revision; absence of a workflow does not mean Pages is disabled |
| Manifest | Icon paths begin at the domain root | Make paths work under the actual project URL and verify after deployment |

The web tool could not retrieve the README's public URL during this review. Live availability and deployed content remain unverified. No browser rendering, checkout, email delivery, or performance measurement has been signed off by this audit.

## Launch milestones

Hamza owns implementation and release. Spencer supplies current brand assets. Kevin, Bennett, Hamza, and Spencer supply feedback and media selections. Use the [band readiness checklist](dev2-band-readiness-checklist.md) for requests and file links; use this table for execution priority. All milestones start unchecked because planning is not implementation.

| Done | Milestone | Effort | Measurable completion |
| --- | --- | --- | --- |
| [ ] | 1. Freeze the small launch scope | 1–2 h | Record the exact shirt list, verified contact address, current show information or no-shows decision, one lead image, and asset owners. Send one consolidated band request. Check Pages settings and record the intended production URL/branch. |
| [ ] | 2. Make public information accurate | 1–2 h | Zero past/unconfirmed dates presented as upcoming; zero layout/development notes in public copy; every retained music/social/contact link confirmed. At least one mailbox receives a test email. |
| [ ] | 3. Make shirts purchasable | 5–7 h | Every launch item has a real photo, name, price/currency, available sizes and matching Square link. One completed production purchase and refund verified by Hamza; receipt, inventory, fulfillment, and sold-out behaviour checked. |
| [ ] | 4. Curate media | 2–3 h | Publish 8–12 strong photos and two verified YouTube videos, each accurately titled/captioned, with credits where applicable. Zero empty sections or playlist-position stand-ins. Preserve source files. |
| [ ] | 5. Finish a consistent visual pass | 2–3 h | One palette used across all pages, real band imagery, readable text/buttons, consistent spacing, and no mock product art. Band reviews one homepage/merch preview and provides one consolidated response. |
| [ ] | 6. Pass release checks | 3–4 h | All four pages pass the functional, responsive, accessibility, and loading checks below; fix blockers within the time budget or re-estimate explicitly. |
| [ ] | 7. Publish and verify | 1–2 h | Approved dev2 changes reach the confirmed production source; deployed revision and URL recorded; all four public pages and main journeys pass a fresh production check. Record a known-good rollback revision. |

Use the [Square checklist](square-integration-checklist.md) for catalogue and checkout details. Start with the smallest real launch assortment Hamza confirms; do not assume all three mockup cards represent actual products. Complete every confirmed launch item. If the assortment expands, revise the estimate before expanding the work.

For product presentation, use consistently cropped front photos on a plain background and a simple hover/focus lift. Use real back/detail photos when available. Accurate products and a clear buy action are required; background removal, alternate-image controls, and elaborate animation can follow launch. Do not alter the shirt's actual print or colour to make a prettier mockup.

### Release checks: the definition of live

- [ ] **Content:** all four pages contain final public copy; no placeholder inventory, false availability, stale upcoming dates, or empty archive sections. Each page has an accurate title and description.
- [ ] **Purchase:** each shirt image/buy action reaches its matching Square item; displayed price/currency agrees; available sizes can be selected; unavailable sizes cannot be purchased. Hamza confirms fulfillment settings, applicable taxes, receipts, order visibility, stock changes, and a purchase/refund result. No Square secrets enter the repo.
- [ ] **Main journeys:** from the homepage, a visitor can reach music, show information, a product checkout, and contact in no more than two site clicks. Check every retained external destination manually; a successful HTTP response alone does not prove it is the right account or item.
- [ ] **Responsive appearance:** inspect all four pages at 360, 768, and 1440 px widths, plus one real phone. No horizontal page overflow, clipped text, obscured buttons, distorted shirt photos, or unusable menu. Inspect hero crops and caption readability.
- [ ] **Keyboard and motion:** named mobile menu with correct expanded state; keyboard can open/close and use it; visible focus on all actions; photo actions have accessible names; meaningful image alt text. Reduced-motion mode suppresses nonessential reveals, smooth scrolling, hover motion, and background video.
- [ ] **Readability:** verify text contrast of at least 4.5:1 for normal text and 3:1 for large text, including text on imagery. Use an overlay or simpler background where needed.
- [ ] **Loading:** zero missing local assets and site-caused console errors in browser checks. Grid images use optimized thumbnails, full images load only when opened, and the hero video is not requested on mobile/reduced-motion. Record one mobile Lighthouse run per page; investigate performance below 80, prioritizing visible loading problems over chasing a perfect score.
- [ ] **Band review:** each member is asked for one consolidated review; Hamza records the launch decision and any deferred preferences. Broken checkout, inaccurate content, and unreadable layouts block release; cosmetic preferences become later tasks.
- [ ] **Deployment:** verify Pages source rather than assuming main or dev2 publishes. Confirm HTTPS, project-relative assets/manifest icons, and the deployed revision. Repeat navigation, images, video playback, and each checkout-link check at the public URL. If release breaks those journeys, restore the recorded known-good production revision and retest.

Record evidence compactly: date, revision/URL, device or viewport, result, and unresolved issue. Unverified gates stay unchecked. Do not equate a pushed commit with a working public release.

## A sustainable weekly routine

Treat the 1–3 hours as the entire website budget, including coordination and review. Keep one task in progress. Break milestone work into 30–60 minute tasks that can finish in a session.

| Available time | Session plan |
| --- | --- |
| 1 hour | 10 min check priorities/inputs; 40 min one task; 10 min verify and record next action |
| 2 hours | Same base session plus 60 min on the next task in that milestone |
| 3 hours | Same two hours plus 60 min for a second task or band review/release checks |

**First two hours:** spend up to 30 minutes requesting missing inputs and confirming the launch item list, 30 minutes checking hosting/contact/current shows, then 60 minutes correcting stale shows and public-facing development copy. If facts are missing, use an honest empty state and work on menu accessibility instead of inventing content. Record actual time and revise remaining estimates.

Ask for band responses within a week as a proposed turnaround; agree actual dates rather than assigning them silently. If assets are delayed, continue independent cleanup and accessibility work. Never substitute mock products or untested checkout to meet a date. A missed week moves the forecast; it does not create catch-up debt.

Update this small scorecard at the end of each session:

| Measure | Starting value | Launch target |
| --- | --- | --- |
| Milestones accepted | 0/7 | 7/7 |
| Past dates shown as upcoming | 4 | 0 |
| Merch items verified end to end | 0; launch item count unconfirmed | All confirmed launch items |
| Media curated and approved | Not yet reviewed | 8–12 photos + 2 verified videos |
| Public pages passing release checks | 0/4 verified | 4/4 |
| Production URL/revision verified | No | Yes |

For each session, append: `Date | Task | Minutes spent | Evidence/result | Blocker/owner | Next 30–60 minute action`. Measure completed journeys and current content first; do not set traffic or sales quotas without a baseline or promotion plan.

## Improve while the site is running

Reserve **15–20 minutes of each weekly budget** for checking upcoming dates, checkout destinations, and incoming site issues. Keep Square inventory and fulfillment current whenever orders occur; customer service is an ongoing band responsibility and may need separate time if sales grow. Update announced shows within seven days and remove a past show from upcoming within seven days of the event.

| Priority | Improvement | Time budget | Done when |
| --- | --- | --- | --- |
| 1 | Better merch presentation | 2–3 h | One item gains a consistent background and front/back/detail viewing that works on touch and keyboard; repeat for other items only if worthwhile |
| 2 | Fuller Thrifted Tease branding | 2–4 h | Incorporate Spencer's remaining artwork and the band's vibrant vintage direction into one approved homepage section, then reuse the treatment |
| 3 | Featured release and homepage routing | 1–2 h | One real release/artwork block with a working listening link; optional current-show/merch teaser only if it can be kept current |
| 4 | Media refresh | 1 h per batch | Add or replace 3–5 photos or one video with verified captions; keep the page selective |
| 5 | Social sharing polish | 1–2 h | All four pages have accurate sharing metadata and a tested image preview at the production URL |
| 6 | Better photo viewer | 2–4 h | If still wanted, implement and test close/next/previous, keyboard operation, and focus return; keep direct image links as fallback |

Do not commit to all these in the first month. After launch, spend the first two weekly sessions checking stability, orders, and content freshness; then choose one improvement at a time. A month with an accurate, working site and one finished improvement is a successful month.

Defer CMS/framework migration, a custom payment backend, complete archive processing, new top-level pages, analytics dashboards, and a full homepage rebuild until there is a concrete need. Analytics hooks currently only log locally; do not treat them as visitor measurement.

## How the existing docs fit

All 14 pre-existing docs were reviewed. Keep them as references rather than 14 simultaneous task lists:

| Documents | Use now |
| --- | --- |
| [Band readiness](dev2-band-readiness-checklist.md) | Asset requests, owners, band message; richer visual requests may follow launch under this plan |
| [Square integration](square-integration-checklist.md) | Required launch dependency and detailed checkout checks |
| [Homepage performance](homepage-performance.md) | Preserve optimized images and deferred video; regenerate only assets that change |
| [Content and assets](v2-content-and-assets.md), [brand and voice](v2-brand-and-voice.md) | Select authentic content and remove copy about site implementation |
| [Visual system](v2-visual-system.md), [site audit](v2-site-audit.md) | Creative references; verify historical findings against current code |
| [Homepage brief](v2-homepage-brief.md), [information architecture](v2-information-architecture.md), [secondary pages](v2-secondary-pages-brief.md) | Later design direction; retain the existing page structure for launch |
| [V2 master plan](websitev2-plan.md), [implementation workplan](v2-implementation-workplan.md), [consolidation checklist](v2-consolidation-checklist.md), [strict roadmap](v2-strict-development-roadmap.md) | Broader redesign backlog, not the launch critical path |

Older documents still mention Shopify, full redesign gates, or historical placeholder heroes. For this release, Square is the checkout choice, this document controls sequencing/budget, and actual source/browser evidence controls completion. No new approvals are needed just to fix stale content or accessibility while creative inputs are being collected.
