# Thrifted Tease - Official Band Website

<p align="center">
Official website for the Toronto-based progressive pop band <strong>Thrifted Tease</strong>.
</p>

<p align="center">

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?logo=javascript)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey)

</p>

<p align="center">
<a href="https://habib13352.github.io/thriftedtease.github.io/">Live Website</a> •
<a href="https://open.spotify.com/artist/2Bzx8VvEQmCcalgPMMIpay">Spotify</a> •
<a href="https://www.instagram.com/thriftedtease/">Instagram</a>
</p>

---

A static band website built with **HTML5, CSS3, and vanilla JavaScript**.

The homepage now features the layered **Through the Door** entrance to *Two Weeks Notice*. See [implementation and preview notes](docs/door-entrance.md) for the current hero, responsive assets, reduced-motion fallback, and browser checks. The earlier hero/video notes below describe the previous implementation.

The shared album-inspired identity and dedicated streaming page are implemented locally. See [identity, assets, streaming, and validation notes](docs/identity-and-streaming.md). Historical video notes below refer to the retired hero treatment.

The current site is centered around five public-facing pages:

- `index.html` for the main landing experience
- `stream.html` for Spotify and Apple Music album players, SoundCloud, and YouTube
- `media.html` for the long-scroll media archive
- `shows.html` for upcoming live dates
- `merch.html` for merchandise promotion

The design system uses tokens in `css/styles.css`, shared treatments in `css/identity.css`, and dedicated doorway styles in `css/door-hero.css`.

## Live Site

https://habib13352.github.io/thriftedtease.github.io/

---

## Table of Contents

- [Project Overview](#project-overview)
- [Current Website Pages](#current-website-pages)
- [Technical Features](#technical-features)
- [Project Structure](#project-structure)
- [Colour Scheme and Branding](#colour-scheme-and-branding)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Assets](#assets)
- [Extending Functionality](#extending-functionality)
- [Known Issues](#known-issues)
- [Future Development](#future-development)
- [License](#license)

---

## Project Overview

This repo contains a responsive band website with shared fixed navigation, a warm ink, cream, and red visual system, and lightweight vanilla JavaScript interactions.

The site goals are:

- showcase the band visually
- drive traffic to streaming platforms
- promote merch
- surface show information
- provide contact and social links

## Current Website Pages

### `index.html`

The main landing page includes:

- fixed navigation with mobile hamburger menu
- layered scroll-through-door hero with reduced-motion and static fallbacks
- album reveal linking to the dedicated streaming page
- a simple media preview grid using optimized homepage derivatives
- contact and social links

### `media.html`

The media page is no longer a placeholder gallery.

It now includes:

- a compact Photos & Films introduction with album-inspired typography
- a long-scroll archive layout
- venue-based event sections for Cameron House, El Mocambo, Painted Lady, The Handlebar, The Pilot, and band portraits
- mixed media grids inside each event section
- optimized venue-specific image folders under `images/optimized/media/`
- responsive YouTube embeds paired with each section
- a grouped photo viewer with previous/next controls, arrow keys, Escape, and focus restoration

This page is authored directly in HTML and is intended to be extended by duplicating a full `media-event` block.

### `shows.html`

The shows page includes:

- a dedicated hero section
- a styled table of upcoming dates
- CTA buttons for ticket links

Note: the show entries are currently static sample entries and the hero still uses a placeholder background image.

### `merch.html`

The merch page includes:

- a dedicated hero section
- a product card grid
- links out to the Shopify store

Note: the merch page still uses placeholder product imagery and sample item copy.

## Technical Features

- fully static site with no build step
- shared design system in `css/styles.css`
- responsive layout across desktop and mobile breakpoints
- mobile navigation toggle in `js/main.js`
- smooth scrolling for in-page anchor links
- scroll-triggered section fade-in effects
- analytics hook stubs for buttons, streaming links, and social links
- responsive YouTube embeds on the media page

## Project Structure

```text
thriftedtease.github.io/
|-- index.html
|-- media.html
|-- shows.html
|-- merch.html
|-- docs/
|   `-- homepage-performance.md
|-- scripts/
|   `-- optimize-homepage-assets.ps1
|-- css/
|   `-- styles.css
|-- js/
|   `-- main.js
|-- images/
|   |-- hero.mp4
|   |-- hero.MOV
|   |-- kevin.JPG
|   |-- bennett.JPG
|   |-- hamza.JPG
|   |-- optimized/
|   |   |-- homepage/
|   |   |   |-- hero-home.jpg
|   |   |   |-- hero-desktop.mp4
|   |   |   |-- kevin-thumb.jpg
|   |   |   |-- kevin-full.jpg
|   |   |   |-- bennett-thumb.jpg
|   |   |   |-- bennett-full.jpg
|   |   |   |-- hamza-thumb.jpg
|   |   |   |-- hamza-full.jpg
|   |   |   |-- spencer-thumb.jpg
|   |   |   `-- spencer-full.jpg
|   |   `-- media/
|   |       |-- hero-media.jpg
|   |       |-- kevin-card.jpg
|   |       |-- kevin-full.jpg
|   |       |-- bennett-card.jpg
|   |       |-- bennett-full.jpg
|   |       |-- hamza-card.jpg
|   |       |-- hamza-full.jpg
|   |       |-- spencer-card.jpg
|   |       `-- spencer-full.jpg
|   `-- spencer.JPG
`-- README.md
```

## Colour Scheme and Branding

The site uses warm black, cream paper, red actions, rust landscape accents, and sky blue drawn from the album.

Core CSS variables:

```css
:root {
    --ink: #151311;
    --paper: #f2e9d8;
    --action-red: #ac351e;
    --rust: #b65b2d;
    --sky: #8ebbe9;
}
```

These variables live in `css/styles.css` and drive the main visual identity across pages.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
```

### Run locally

Because the site is static, you can either open `index.html` directly in a browser or use a lightweight local server.

#### Python

```bash
python -m http.server 8000
```

#### Node

```bash
npx http-server
```

Then open:

```text
http://localhost:8000
```

## Customization Guide

### Content updates

Edit these files directly:

- `index.html` for landing page copy, streaming links, and contact details
- `stream.html` for album embeds and streaming destinations
- `media.html` for event sections, media captions, image links, and YouTube embeds
- `shows.html` for upcoming dates and ticket URLs
- `merch.html` for item names, descriptions, imagery, and store links

### Styling

- use `css/styles.css` for shared site styling
- use `css/identity.css` for the shared cream, ink, and red treatments
- preserve shared classes used by `js/main.js` such as `navbar`, `hamburger`, and `nav-menu`

### Media page pattern

To add another media event section:

1. Duplicate one existing `.media-event` block in `media.html`
2. Update the title and metadata line
3. Point the image cards at the matching venue folder inside `images/optimized/media/<section-slug>/`
4. Replace or add the section's YouTube embed and keep `data-lightbox-group` consistent within that event section

## Assets

### Homepage web assets

The homepage now uses optimized derivatives in:

- `images/optimized/homepage/hero-home.jpg`
- `images/optimized/homepage/hero-desktop.mp4`
- `images/optimized/homepage/*-thumb.jpg`
- `images/optimized/homepage/*-full.jpg`

### Media page web assets

The media page now uses optimized derivatives in:

- `images/optimized/media/hero-media.jpg`
- `images/optimized/media/<section-slug>/NN-card.jpg`
- `images/optimized/media/<section-slug>/NN-full.jpg`

### Current source image assets

The repo currently includes these local band images:

- `images/kevin.JPG`
- `images/bennett.JPG`
- `images/hamza.JPG`
- `images/spencer.JPG`

### Current video assets

- `images/hero.mp4`
- `images/hero.MOV`

### Asset notes

- `index.html` uses optimized JPG derivatives instead of the original full-size photos
- `media.html` uses optimized JPG derivatives plus embedded YouTube content
- `shows.html` and `merch.html` still reference placeholder imagery in their page-specific inline styles and cards

### Historical hero video policy (retired)

- the homepage remains image-first for first paint
- `images/optimized/homepage/hero-desktop.mp4` is the desktop-only enhancement path
- `images/hero.mp4` remains the editable source asset, not required initial content
- the homepage video is deferred until after first render and skipped on phones or constrained devices

### Homepage optimization workflow

When homepage or media-page source images change, regenerate the web-ready derivatives:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\optimize-homepage-assets.ps1
```

For performance notes and the current asset baselines, see `docs/homepage-performance.md`.

The retained desktop video is no longer loaded by the homepage. If reused later, keep it out of the critical path; derivatives can be refreshed with `ffmpeg`, for example:

```powershell
ffmpeg -y -i images\hero.mp4 -an -c:v libx264 -preset slow -crf 30 -vf scale=1080:-2 -pix_fmt yuv420p -movflags +faststart images\optimized\homepage\hero-desktop.mp4
```

## Extending Functionality

Existing hooks and structure make the following straightforward to add later:

- additional curated videos for media chapters
- analytics integration through `trackEvent()`
- CMS or JSON-backed show and media data
- real merch catalog integration
- improved SEO metadata across subpages

## Known Issues

| Issue | Status | Notes |
|---|---|---|
| Media photo viewer | Implemented | Grouped navigation, keyboard controls, modal focus, and original-image fallback |
| Shows page background image | Placeholder | `shows.html` still uses a placeholder hero image |
| Merch imagery and product copy | Placeholder | `merch.html` still uses sample merch content |
| Large media archive folders still need optimization | Known | Homepage and `media.html` are optimized, but the archive source folders still contain large originals |

## Future Development

Potential next steps:

- replace placeholder visuals on `shows.html` and `merch.html`
- connect analytics to a real provider
- curate permanent video IDs for the media archive's existing playlist embeds
- add Open Graph and richer per-page meta tags
- optimize local images and add modern formats where appropriate

## License

Copyright 2026 Thrifted Tease. All rights reserved.

Last Updated: March 12, 2026  
Version: 2.3
