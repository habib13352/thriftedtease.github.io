# Thrifted Tease V2 Strict Development Roadmap

## Purpose

This roadmap turns the V2 redesign, media cleanup, and Square merch integration into small, gated sprints. Complete one sprint at a time and do not move forward until its approval gate is satisfied.

Estimated solo-development effort: **38–64 focused hours**. At 6–8 hours per week, expect approximately **6–9 weeks**.

## Ground Rules

- [ ] Do not redesign every page simultaneously.
- [ ] Do not code before the required content for that sprint exists.
- [ ] Do not expand a visual direction until the band approves one representative section.
- [ ] Use real band content wherever possible.
- [ ] Collect band feedback once per milestone, not continuously.
- [ ] Keep a separate "later" list for ideas outside the current sprint.
- [ ] Finish functionality before adding decorative effects.
- [ ] Keep the static stack unless it genuinely becomes difficult to maintain.

## Sprint 0: Find Out What The Band Wants

**Time:** 2–3 hours  
**Goal:** Replace vague opinions with usable creative inputs.

### Band Homework

- [ ] Choose three visual references the band likes.
- [ ] Choose three references or styles the band dislikes.
- [ ] Pick five words the website should communicate.
- [ ] Rank the site goals: listening, shows, merch, booking, and media.
- [ ] Select the best 10–15 live photographs.
- [ ] Select the best 3–5 portraits or candid images.
- [ ] Confirm the featured song or current release.
- [ ] Provide real upcoming-show information.
- [ ] Confirm which shirts are actually being sold.
- [ ] Provide merch photographs, prices, sizes, and quantities.

### Developer Work

- [ ] Inventory available content against the list above.
- [ ] Record missing assets and who is responsible for them.
- [ ] Identify content that is real, outdated, or placeholder.
- [ ] Create one organized location for approved V2 assets.
- [ ] Record confirmed decisions in the project docs.

### Approval Gate

- [ ] The band has supplied references, dislikes, descriptive words, prioritized goals, and the most important real content.

## Sprint 1: Lock The Creative Direction

**Time:** 3–5 hours  
**Goal:** Produce a one-page creative direction the band can approve.

- [ ] Finalize the brand statement and emotional tone.
- [ ] Choose the colour palette.
- [ ] Choose headline and body typography.
- [ ] Define photography and cropping rules.
- [ ] Define primary buttons, secondary actions, and text links.
- [ ] Define the copy voice and phrases to avoid.
- [ ] Confirm the homepage priority and CTA hierarchy.
- [ ] Document visual treatments that must be avoided.

### Recommended Direction

- [ ] Build from "thrift-store glamour with live-room credibility."
- [ ] Keep the experience warm, textured, and slightly mysterious.
- [ ] Use an editorial, image-led layout instead of an app-like layout.
- [ ] Use real live photography as part of the design system.
- [ ] Reduce repeated cards and rounded-pill buttons.
- [ ] Use expressive typography, confident colour, and restrained motion.
- [ ] Pair the cool visual atmosphere with readable copy and obvious actions.

### Approval Gate

- [ ] The band clearly agrees that the direction feels like them.

## Sprint 2: Build A Visual Proof

**Time:** 6–10 hours  
**Goal:** Prove the new direction is better than a template before rebuilding everything.

- [ ] Build the navigation.
- [ ] Build the homepage hero.
- [ ] Build one representative content section.
- [ ] Build primary and secondary actions.
- [ ] Complete desktop and mobile versions.
- [ ] Add basic hover, keyboard-focus, and reduced-motion states.

### Quality Test

- [ ] The design remains recognizable without relying only on the logo.
- [ ] Real band imagery is structural rather than decorative filler.
- [ ] Typography and composition feel distinctive.
- [ ] The page does not repeat the same card treatment everywhere.
- [ ] The main action is obvious.
- [ ] Mobile feels deliberately designed.
- [ ] Every decorative choice connects to the band.
- [ ] The result could not belong to any indie band after only changing the name.

### Approval Gate

- [ ] The band approves the representative slice before it is expanded.

## Sprint 3: Complete The Homepage

**Time:** 6–10 hours  
**Goal:** Make the homepage the emotional front door and visual reference for V2.

### Recommended Page Order

1. Hero
2. Featured music
3. Short band statement
4. Upcoming show
5. Featured merch
6. Curated media
7. Booking, contact, and social footer

### Checklist

- [ ] Replace template-like public copy.
- [ ] Establish one unmistakable primary action.
- [ ] Use real music and show information.
- [ ] Feature one real merch product.
- [ ] Use only the strongest media selections.
- [ ] Vary section compositions.
- [ ] Complete mobile layouts while building each section.
- [ ] Confirm keyboard access and visible focus states.
- [ ] Keep large media outside the critical loading path.

### Approval Gate

- [ ] The homepage feels complete and is approved as the reference for all secondary pages.

## Sprint 4: Repair The Media Page

**Time:** 5–8 hours  
**Goal:** Turn the media page from an asset dump into a curated archive.

### Content Pass

- [ ] Rank venue folders from strongest to weakest.
- [ ] Select one lead venue or recent event.
- [ ] Choose the best 3–6 images per featured venue.
- [ ] Remove weak duplicates from the visible experience.
- [ ] Keep additional material behind an archive or expansion path.
- [ ] Add concise venue, date, or mood context.
- [ ] Use video only when it adds something the photographs cannot.

### Recommended Page Order

1. Short editorial introduction
2. Lead venue or story
3. Supporting venue sections
4. Selected video moments
5. Deeper archive path

### Technical Pass

- [ ] Use thumbnails in grids.
- [ ] Load larger files only when opened.
- [ ] Provide meaningful alt text.
- [ ] Make the lightbox keyboard-accessible.
- [ ] Add previous, next, and close controls.
- [ ] Prevent avoidable layout shifts.
- [ ] Test long-page mobile performance.

### Approval Gate

- [ ] The page feels like an intentionally edited record of the band rather than a folder browser.

## Sprint 5: Integrate Square Merch

**Time:** 4–7 hours  
**Goal:** Sell real shirts without adding an unnecessary payment backend.

### Square Setup

- [ ] Create one catalogue item per shirt.
- [ ] Add real names, descriptions, photographs, and prices.
- [ ] Add size variations.
- [ ] Add SKUs and inventory.
- [ ] Configure Canadian taxes.
- [ ] Configure shipping, pickup, or both.
- [ ] Disable tipping unless it is intentionally wanted.
- [ ] Generate and test one production payment link per product.

### Website Work

- [ ] Replace placeholder shirt graphics.
- [ ] Remove every Shopify reference.
- [ ] Make each product image clickable.
- [ ] Add a clear "Choose Size & Buy" action.
- [ ] Connect each product to its matching Square link.
- [ ] Display accurate product names and prices.
- [ ] Add accessible labels and focus states.
- [ ] Track product clicks without collecting customer information.
- [ ] Feature one shirt on the homepage.

### Security Rule

- [ ] No Square password, access token, or private key exists in the repository.
- [ ] Use Square-hosted checkout links while the site remains static.

### Approval Gate

- [ ] Complete a real low-value purchase and refund test before launch.

## Sprint 6: Align The Remaining Site

**Time:** 4–7 hours

- [ ] Apply the visual system to Shows.
- [ ] Replace placeholder show information.
- [ ] Add an honest no-upcoming-shows state.
- [ ] Make booking contact easy to locate.
- [ ] Finish navigation and active states.
- [ ] Finish the footer and social links.
- [ ] Update page titles and meta descriptions.
- [ ] Add social-sharing images.
- [ ] Remove leftover generic copy and inconsistent components.

## Sprint 7: Quality And Launch

**Time:** 4–6 hours

### Functional Testing

- [ ] Test all links and navigation.
- [ ] Test every merch product.
- [ ] Test shipping, taxes, receipts, and inventory.
- [ ] Test the media viewer.
- [ ] Test contact and booking paths.

### Responsive Testing

- [ ] Small phone
- [ ] Large phone
- [ ] Tablet
- [ ] Laptop
- [ ] Wide desktop

### Accessibility Testing

- [ ] Keyboard navigation
- [ ] Visible focus states
- [ ] Colour contrast
- [ ] Meaningful alt text
- [ ] Logical heading structure
- [ ] Reduced-motion support

### Performance Testing

- [ ] Optimized thumbnails
- [ ] Deferred large images
- [ ] Deferred video
- [ ] No missing assets
- [ ] No major layout shifts
- [ ] No console errors

## Band Review And Revision

**Review time:** 1–2 hours  
**Revision time:** 3–6 hours

1. Show one complete milestone.
2. Give the band a review deadline.
3. Ask the band to consolidate all comments.
4. Separate required changes from personal preferences.
5. Complete one focused revision pass.
6. Mark the milestone approved.
7. Do not reopen it unless a real problem appears.

## Suggested Weekly Pace

| Week | Outcome |
| --- | --- |
| 1 | Band inputs and approved creative direction |
| 2 | Homepage visual proof |
| 3 | Completed homepage |
| 4 | Media-page restructuring |
| 5 | Square catalogue and merch page |
| 6 | Shows and shared site shell |
| 7 | Testing, revision, and launch |

At a lighter pace, split each row across two weeks.

## Immediate Next Actions

Complete only Sprint 0 now:

- [ ] Ask the band for three likes and three dislikes.
- [ ] Ask for five brand words.
- [ ] Have the band rank the website's goals.
- [ ] Collect the strongest photographs.
- [ ] Confirm current music and shows.
- [ ] Confirm real merch products, prices, sizes, stock, and fulfillment.
- [ ] Schedule one decision meeting.
- [ ] Do not begin broad coding until these answers exist.
