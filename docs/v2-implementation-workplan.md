# Thrifted Tease V2 Implementation Workplan

## Purpose
This document breaks the V2 plan into practical phases so design, copy, and implementation can move in the right order.

## Guiding Principle
Do not jump into code-first redesign work before the brand, voice, and page priorities are stable enough to guide decisions.

## Recommended Sequence

### Phase 1: Audit And Direction Lock
Deliverables:
- confirm the V2 brief
- review the current site audit
- agree on brand and voice rules
- agree on visual direction boundaries

Why first:
- V2 will drift quickly if design work starts before the tone is locked

### Phase 2: Homepage Strategy
Deliverables:
- homepage content hierarchy
- hero copy options
- CTA hierarchy
- rough wireframe or block order

Why second:
- the homepage should become the reference point for all other page decisions

### Phase 3: Visual System Development
Deliverables:
- final palette direction
- typography pairing
- spacing and composition rules
- CTA and module style decisions

Why here:
- this phase should be informed by the homepage and media reference material, not invented in isolation

### Phase 4: Secondary Page Redirection
Deliverables:
- media curation approach
- shows credibility structure
- merch storytelling structure
- nav, footer, and contact refinement

Why here:
- once the homepage and system are stable, the remaining pages can be brought into alignment faster

### Phase 5: Content And Asset Pass
Deliverables:
- revised page copy
- selected hero and feature assets
- stronger merch and live-supporting content
- metadata and alt-text pass

Why here:
- final content should land into a stable page system

### Phase 6: Build And Polish
Deliverables:
- updated HTML structure where needed
- refactored CSS system as needed
- lightweight JS updates only if they add value
- accessibility, mobile, and performance review

Why last:
- implementation should serve the approved direction, not decide it

## Suggested Technical Approach
- keep the site static-first
- refactor CSS toward clearer design tokens and page-specific sections as needed
- keep JavaScript restrained
- only introduce shared data or templates if manual duplication becomes a real maintenance issue

## Likely Codebase Focus Areas
- `index.html` will need the largest structural and copy rethink
- `css/styles.css` will likely need design-system reorganization
- `media.html`, `shows.html`, and `merch.html` will need copy and composition updates more than architectural rewrites
- `js/main.js` should stay lightweight unless new interactions become essential

## Definition Of Ready For Implementation
V2 is ready for build work when:
- the homepage hierarchy is agreed
- the voice direction is stable
- the visual system has enough specificity to avoid generic fallback choices
- the strongest asset set is selected

## Definition Of Done For V2
- the site feels specific to Thrifted Tease
- homepage first impression is materially stronger
- media remains the authenticity anchor
- shows and merch no longer feel placeholder-adjacent
- the static stack stays maintainable
- performance and accessibility remain part of the finished product
