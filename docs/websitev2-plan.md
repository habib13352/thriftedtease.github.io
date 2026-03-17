# Thrifted Tease Website V2 Plan

## Purpose
This document is the source of truth for the next iteration of the Thrifted Tease website. It is intended to guide branding, design, copy, UX, and implementation decisions so that future work moves in one coherent direction.

The goal of v2 is not to add more pages or effects for their own sake. The goal is to make the site feel unmistakably like Thrifted Tease while still helping people discover the music, follow the band, buy merch, and book shows.

This file is written to be usable by both non-technical collaborators and human or AI implementers. It should be consulted before making major visual, structural, or copy changes.

## Current Site Assessment
The current site is a solid static foundation. It already has a clear multi-page structure, a shared visual system, responsive layouts, and enough real media to avoid feeling empty. It is also simple to edit, which is a real strength at this stage.

What is working now:
- The repo is easy to understand: static HTML, one shared stylesheet, one shared JavaScript file, and organized media folders.
- Navigation is straightforward and the main user paths are easy to find.
- The media page uses real venue content and currently feels like the most authentic part of the site.
- Performance-minded choices already exist, including optimized homepage media and deferred hero video loading.
- The site is usable on desktop and mobile without requiring a build step or CMS.

Codebase strengths:
- Small, readable codebase with low setup overhead.
- Shared CSS and JS reduce immediate complexity.
- Static-first architecture is appropriate for the current scale.
- Real assets are already available to support a stronger brand direction.

UI/UX strengths:
- Users can reach music, shows, merch, and contact quickly.
- Sectioning is clear and visually scannable.
- Calls to action are visible and understandable.
- The site is not overloaded with distracting interactions.

Design and brand weaknesses:
- The current look feels like a polished band template rather than a distinct world.
- The navy and gold palette reads as generic premium styling instead of something ownable to Thrifted Tease.
- Typography is functional but not expressive enough to carry a memorable identity.
- The homepage communicates what the site is, but not why the band feels special.
- Several sections still sound like website copy rather than artist copy.

What feels generic or placeholder-driven:
- The homepage hero language is too broad and safe.
- Merch presentation feels like a sample storefront rather than a band-specific drop.
- Shows are readable, but do not yet feel like proof of a living scene presence.
- Some copy describes layout decisions or page intent instead of presenting the band.
- Repeated UI treatments across all pages make the experience feel uniform, but not characterful.

Is the current site a good foundation?

Yes. The current site is a good technical and structural base for v2. The bigger problem is not architecture. It is identity. The next major step should be a stronger brand system, sharper copy, and more ownable design decisions built on top of the existing foundation.

## Brand Direction
### Working Brand Statement
Thrifted Tease is thrift-store glamour for the indie room: vintage charm, art-pop color, live-band chemistry, and a flirtier edge that feels found rather than manufactured.

### Brand Pillars
- Secondhand romance: collected, worn-in, expressive, and full of character rather than sterile or pristine.
- Art-pop intrigue: thoughtful visuals, a little mystery, and enough intention to feel curated without becoming precious.
- Live-room credibility: real venues, real players, real chemistry, and a sense that the band actually exists in rooms people can enter.
- Playful tease: charm, wit, seduction, and tension without becoming ironic, gimmicky, or over-sexualized.

### What The Brand Is Not
- Not a generic luxury-music brand.
- Not a dive-bar chaos aesthetic with no elegance.
- Not glossy pop-star perfection.
- Not retro costume play.
- Not overly corporate, startup-like, or minimalist in a way that drains personality.

### Audience Impression Goals
Within a few seconds, a visitor should feel:
- this is a real band with taste and identity
- this band has live credibility, not just a logo and links
- the music likely sits somewhere between vintage warmth, indie groove, and art-pop color
- the band feels stylish, but still human and local

### Emotional Tone
The tone should feel:
- warm
- textured
- confident
- slightly mysterious
- romantic without being soft
- cool without feeling detached

### Directional References
References like The Beatles, Tame Impala, thrift-store culture, and Patagonia should be used as directional cues only.

They should inform:
- musical and cultural atmosphere
- confidence in color and taste
- balance between warmth and polish

They should not lead to imitation, tribute aesthetics, or obvious visual borrowing.

## Visual Identity Direction
### Color Philosophy
The current navy-and-gold system is serviceable, but too close to a generic premium template. V2 should move toward a palette that feels more collected, organic, and ownable.

The palette should feel like:
- faded but intentional
- warm without becoming sepia-only
- earthy with selective contrast
- confident enough to be recognizable at a glance

Example palette family:
- deep ink or midnight blue as the grounding dark
- washed forest or muted green
- tobacco, rust, or brown-red accents
- cream or soft parchment as the light tone
- one restrained cool counterpoint such as oxidized blue or dusty teal

Patagonia is a useful reference for disciplined color confidence, not literal styling. The lesson to borrow is recognizability through restraint.

### Typography Direction
V2 should use a more expressive typography pairing:
- one headline typeface with editorial, romantic, vintage, or art-forward character
- one body typeface that stays readable and grounded

The typography should help carry the identity even when imagery is minimal. It should feel deliberate, not default.

### Photo And Art Direction
The site should emphasize:
- real venue photography
- candid band moments
- imperfect crops and film-like texture where appropriate
- rehearsal details, posters, gear, cases, flyers, and found-object energy
- selective use of collage, layering, or ephemera if it supports the brand

Avoid:
- generic stock-like promo treatments
- overly polished mock-brand imagery
- visual clutter that hides the band itself

### Layout And Motion Principles
- Use more editorial rhythm and less app-like uniformity.
- Build stronger contrast between hero moments, content sections, and quieter supporting areas.
- Favor a few meaningful visual surprises over constant decoration.
- Motion should be restrained, atmospheric, and intentional.
- Sections should feel curated, not mechanically repeated.

### UI Traits To Avoid From V1
- overly generic rounded-pill buttons everywhere
- repeated card treatments with little variation
- premium-template gradients that do not relate to the brand story
- copy and UI that feel interchangeable with any indie band site

## Product Goals
The v2 site should support all three business goals:
- grow fans
- sell merch
- help book shows

Priority order:
1. Identity first
2. Discovery second
3. Conversion third

This means the site should first make people feel the band, then help them explore, then give them clear next actions. Conversions matter, but they should grow out of a strong impression rather than override it.

## Experience Strategy By Page
### Homepage
Page job:
Introduce the band fast, establish the emotional world, and route visitors into listening, live dates, merch, or deeper media.

Key content blocks:
- hero with sharper positioning
- featured music or latest release
- short band statement in real voice
- upcoming show highlight
- featured merch drop or item
- curated media strip rooted in real performances
- clear footer/contact/social pathways

Tone of voice:
- immediate
- evocative
- confident
- artist-led rather than admin-led

What should change from v1:
- replace vague positioning with memorable identity language
- create stronger CTA hierarchy
- shift from “official band site” energy to “brand trailer” energy
- reduce generic section labeling and increase narrative flow

### Media
Page job:
Act as the authenticity anchor of the brand by showing the band in real rooms, with real energy, and enough curation to feel intentional.

Key content blocks:
- stronger page intro
- curated venue sections
- better prioritization of strongest images
- embedded video only where it adds value
- captions that reinforce mood, not just file organization

Tone of voice:
- grounded
- observant
- confident
- less explanatory, more documentary

What should change from v1:
- curate more aggressively instead of simply expanding archives
- let the best photos define the page
- align captions and metadata with the brand tone
- make the page feel like an archive with taste, not just a folder browser

### Shows
Page job:
Help fans attend shows and help promoters quickly see that the band is active, credible, and bookable.

Key content blocks:
- strong live-focused intro
- upcoming dates
- past venue credibility if current dates are limited
- clear ticket, RSVP, or venue actions
- booking contact or EPK-style pathway if needed later

Tone of voice:
- confident
- local
- alive
- scene-aware without overhyping

What should change from v1:
- remove any sense of placeholder sample listings
- make dates feel like real momentum
- support both fan attendance and promoter trust
- include stronger context if the calendar is light

### Merch
Page job:
Make merch feel like an extension of the band world, not a detached ecommerce tab.

Key content blocks:
- merch intro tied to the brand
- featured drop or collection framing
- product cards or modules with stronger story and visual identity
- direct Shopify path
- optional release context, scarcity, or style cues when true

Tone of voice:
- stylish
- tactile
- specific
- not salesy for the sake of it

What should change from v1:
- replace sample-like presentation with brand-specific framing
- use real or more convincing product visuals
- make each item feel like part of the same world as the music and shows

### Contact, Footer, And Navigation
Page job:
Provide clarity and trust without becoming visually generic or overly administrative.

Key content blocks:
- navigation that reflects top priorities
- social links that feel integrated
- contact and booking pathways
- footer with concise, useful information

Tone of voice:
- simple
- direct
- confident

What should change from v1:
- keep navigation clear, but make it feel less like a generic site shell
- ensure footer and contact design still carry the brand mood
- reduce any language that sounds like placeholder business copy

## Content And Copy Direction
Copy should sound like the band has a point of view. It should feel human, specific, and a little charged. It should not sound like it was written to describe a web layout.

Writing characteristics:
- concise
- image-rich without becoming purple prose
- confident without overclaiming
- conversational in places, but still composed
- suggestive and textured rather than generic

Phrases and tones to avoid:
- “official home”
- “built for”
- “cleaner page”
- “focused layout”
- “available on all platforms”
- generic marketing claims with no character
- copy that explains the website instead of expressing the band

How to write about the band:
- use mood, chemistry, and setting
- describe the kind of room, energy, or impression the band creates
- be specific without forcing genre labels too hard

How to write about shows:
- emphasize room, energy, scene, and invitation
- avoid fake-tour language or inflated hype
- stay honest and grounded

How to write about merch:
- focus on feel, look, drop identity, or connection to the band world
- avoid generic product-placeholder language

How to write about media:
- use captions that reinforce memory, mood, or live presence
- avoid sounding like file-management notes

How to stop sounding like a template:
- remove process-oriented or layout-oriented phrases
- prefer band voice over design voice in user-facing content
- let each page have a job and a tone, not just a heading and cards

## UX Improvements
V2 should improve the experience without making the site complicated.

Core UX improvements:
- clearer CTA hierarchy, especially on the homepage
- stronger first-impression storytelling
- better prioritization of the band, the music, and the next useful action
- more variation in section rhythm so the site feels designed, not assembled
- stronger consistency between brand tone and interface choices

Usability expectations:
- users should be able to find music, shows, merch, and contact quickly
- navigation should remain simple and obvious
- interactions should feel smooth, but not overly animated
- the site should remain responsive and easy to scan on mobile

Accessibility expectations:
- maintain strong text contrast
- ensure navigation and interactive elements are keyboard-usable
- provide meaningful alt text
- avoid motion that creates distraction or discomfort
- keep semantic structure clear across pages

## Technical Direction
The current static stack is acceptable for v2. There is no need to add a framework unless future content needs clearly justify it.

Recommended technical direction:
- stay static-first for now
- improve maintainability as the design system becomes more specific
- reduce duplication where it begins to slow updates
- consider shared content structures or reusable templates if shows, merch, or media updates become frequent
- strengthen metadata, SEO basics, and social sharing tags across all public pages
- preserve fast-loading behavior and careful media handling

Maintainability goals:
- clearer separation between shared patterns and page-specific styling
- less repeated copy structure across pages
- easier updates to nav, footer, metadata, and recurring content blocks

Accessibility and performance goals:
- preserve or improve current responsive behavior
- keep heavy assets out of the critical path
- optimize images and video intentionally
- ensure visual ambition does not come at the cost of usability

## Implementation Roadmap
### Phase 1: Brand System And Copy Direction
- finalize brand voice, pillars, and positioning language
- choose v2 visual references, palette direction, and typography pairings
- rewrite core homepage and section copy in band voice
- define the primary CTA hierarchy

### Phase 2: Homepage Redesign
- redesign the homepage as the main brand entry point
- build a stronger hero and narrative flow
- add featured music, live, merch, and media moments with better prioritization
- ensure the page communicates vibe within seconds

### Phase 3: Secondary Pages Alignment
- bring media, shows, and merch into the same v2 brand system
- replace placeholder-feeling copy and treatments
- strengthen page-specific identity while preserving cohesion

### Phase 4: Polish, Accessibility, And Performance
- refine responsive behavior
- improve accessibility details and states
- tune media loading, metadata, and social sharing basics
- remove leftover generic or inconsistent interface patterns

### Phase 5: Optional Content And Data Improvements
- consider shared content sources for shows, merch, or media
- consider lightweight template reuse if manual HTML duplication becomes a problem
- explore richer integrations only if they clearly improve upkeep or user experience

## Acceptance Criteria
V2 is successful when:
- the site feels unmistakably like Thrifted Tease rather than a polished generic band template
- a first-time visitor understands the band’s vibe within a few seconds
- users can quickly find music, shows, merch, and contact information
- merch and shows feel real and current rather than placeholder-driven
- the media page remains authentic and helps shape the rest of the site identity
- the visual system feels consistent, memorable, and ownable
- the site remains simple to use, responsive, and maintainable

## Notes For Future Human Or AI Implementers
- Use this document as the decision source before changing visual direction, copy, or structure.
- Preserve the authenticity already present in real venue photography and live assets.
- Prefer brand-led choices over generic polish.
- Do not over-corporatize the experience in pursuit of tidiness.
- Avoid introducing trends that could apply to any band site without adapting them to the Thrifted Tease identity.
- If a proposed design choice looks cleaner but makes the band feel less specific, reject it.
- When in doubt, choose the option that feels more human, more textured, and more rooted in real band presence.

## Locked Decisions
These decisions are intentionally fixed unless the brand direction changes in a later revision:

- Thrifted Tease brand lane is a blend of vintage, art-pop, and indie-rock.
- The strongest framing is thrift-store glamour with live-room credibility.
- Patagonia is a reference for disciplined, ownable color confidence, not literal visual styling.
- The current navy-and-gold system is usable, but too template-like to be the final brand language.
- The media page is currently the most authentic brand asset and should strongly influence v2.
- V2 should sound like the band, not like a website template or a product brief.

## Document Use Guidelines
This document is a planning artifact only. It does not require immediate code changes by itself.

Anyone implementing v2 should treat this file as a brief that defines:
- what the site should feel like
- what problems v2 is solving
- what should be preserved from v1
- what must change for the brand to become clearer and more ownable
