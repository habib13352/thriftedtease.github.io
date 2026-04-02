# Thrifted Tease V2 Site Audit

## Purpose
This document translates the high-level V2 plan into a grounded assessment of the current repository, current site experience, and the biggest opportunities for the next version.

It is meant to answer one practical question before any redesign work starts:

What should V2 preserve, and what should it deliberately move away from?

## Current Repo Snapshot
- The repo is a static site with four public HTML entry points: `index.html`, `media.html`, `shows.html`, and `merch.html`.
- Shared presentation lives in `css/styles.css`.
- Shared interaction logic lives in `js/main.js`.
- The project already has an optimization workflow for homepage and media assets in `scripts/optimize-homepage-assets.ps1`.
- The documentation base is still small, which makes now a good time to formalize V2 planning.

## Current Experience Summary
The site already works as a usable band website. Navigation is clear, the page set is easy to understand, and the repo is still small enough to change confidently.

The main V2 issue is not technical debt. It is that the site currently feels more like a polished template for a band than a world built specifically for Thrifted Tease.

## What The Current Site Does Well

### 1. Clear structure
- The site has simple page jobs and obvious routes to music, media, shows, merch, and contact.
- The static architecture is easy to maintain and does not add unnecessary tooling.

### 2. Strong media foundation
- The media page is the most convincing proof that the band is real, active, and rooted in actual rooms.
- The archive already contains the strongest raw material for a more ownable brand direction.

### 3. Performance awareness
- The homepage uses optimized image derivatives.
- The hero video is treated as an enhancement instead of critical content.
- Heavy media is already being handled more carefully than in many small artist sites.

### 4. Responsive baseline
- The current layouts adapt across desktop and mobile without introducing major structural complexity.
- Core interactions are light and predictable.

## Current UI And UX Findings

### Homepage
The homepage is structurally sound but emotionally generic.

Observed in the current implementation:
- The hero still uses safe positioning language like "Toronto Based. Progressive Pop." and "The Official Home of Thrifted Tease" in [index.html](../index.html).
- The streaming section is useful, but "Available on all platforms" feels like template copy rather than band voice.
- The homepage photo section introduces members with labels like "This is Kevin," which is functional but underpowered for brand storytelling.
- The page routes clearly, but it does not yet create a memorable first impression within a few seconds.

Implication for V2:
- The homepage should shift from directory-style utility toward a sharper brand trailer that still preserves quick routing.

### Media
The media page is the strongest page in the current site.

Observed in the current implementation:
- The archive structure is authentic because it is organized around real venues and sessions.
- The page already feels more specific than the homepage because it contains actual rooms, actual stills, and more varied content types.
- Even so, some copy still explains the archive instead of using it to create mood.
- The page uses repeated event-card treatments that are clean but visually uniform.

Implication for V2:
- Media should be treated as the emotional reference page for the whole redesign.
- V2 should curate more aggressively so the archive feels intentional rather than exhaustive.

### Shows
The shows page is readable and more polished than a placeholder list, but it still reads as representative content rather than fully lived-in band proof.

Observed in the current implementation:
- The date cards are clear and scannable.
- The page already understands the difference between local credibility and fake-tour posturing.
- The copy still describes the shape of a local live schedule instead of presenting a compelling live presence.
- The page needs stronger support for both fans and promoters when the calendar is light.

Implication for V2:
- Shows should become a credibility page, not just a date list.
- The page should support upcoming dates, recent venue proof, and booking confidence in one system.

### Merch
The merch page is visually tidy but still feels the most placeholder-adjacent.

Observed in the current implementation:
- The page uses stylized mock shirt cards rather than real merch imagery.
- The layout is coherent, but the content reads like a card system demo more than a band-specific drop.
- It communicates store access, but not product desire or drop identity.

Implication for V2:
- Merch needs real product context, a more tactile mood, and stronger band-world framing.
- V2 should treat merch as part of the same story as the music and live identity.

### Contact, nav, and footer
These are functional but generic shell elements.

Observed in the current implementation:
- Navigation is consistent and easy to understand.
- Contact pathways are clear.
- The shell language and repeated treatment make the site feel uniform in a way that sometimes reduces personality.

Implication for V2:
- Keep clarity, but let the shell carry more mood through typography, spacing, tone, and hierarchy.

## Current Design System Findings

### Strengths
- The site has a real shared system rather than page-by-page one-offs.
- The palette is coherent.
- Reusable cards, hero patterns, and buttons already exist.

### Weaknesses
- The dark navy and gold system reads as "polished premium" before it reads as "Thrifted Tease."
- The typography is functional and safe.
- Rounded-pill CTAs and repeated card treatments flatten page personality.
- The overall rhythm is consistent, but often too consistent.

## Codebase Findings That Matter For V2
- The codebase is small enough to redesign without introducing a framework.
- Shared CSS is useful, but V2 should more clearly separate global tokens, layout primitives, and page-specific styling.
- Shared JS is currently light and appropriate; V2 should keep that restraint.
- If page content grows, a lightweight shared content structure may help, but that should only happen when duplication becomes painful.

## Preserve In V2
- Static-first architecture
- Real venue and session photography
- Straightforward navigation
- Performance-minded media handling
- Small-codebase maintainability

## Change In V2
- Replace generic homepage positioning with identity-led copy
- Move away from the current navy-and-gold premium-template feel
- Introduce more expressive typography and stronger editorial rhythm
- Reduce repeated UI patterns that make pages feel interchangeable
- Turn shows and merch into proof of a living band world instead of well-styled utility pages

## Working Conclusion
V1 is not a failed site. It is a good structural prototype with enough real media to support a much more distinctive V2.

The strongest path forward is:
- use the media page as the authenticity benchmark
- redesign the homepage as the emotional front door
- bring shows and merch into the same world
- preserve the simple static stack while making the identity far more specific
