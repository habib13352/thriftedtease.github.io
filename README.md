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

The current site is centered around four public-facing pages:

- `index.html` for the main landing experience
- `media.html` for the long-scroll media archive
- `shows.html` for upcoming live dates
- `merch.html` for merchandise promotion

The design system is shared through `css/styles.css`, with page-specific enhancements layered on top where needed.

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

This repo currently contains a responsive band website with a shared fixed navigation, dark navy and gold branding, and lightweight vanilla JavaScript interactions.

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
- full-screen hero with background video (`images/hero.mp4`)
- streaming platform links for Spotify, Apple Music, YouTube, and SoundCloud
- a simple media preview grid using local band images
- contact and social links

### `media.html`

The media page is no longer a placeholder gallery.

It now includes:

- a dedicated media hero using a real local band image
- a long-scroll archive layout
- three starter event sections
- mixed media grids inside each event section
- five media items per section
- four clickable image cards and one responsive YouTube embed per section
- lightbox-friendly image markup using `data-lightbox-group` and `data-media-index`

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
|   `-- spencer.JPG
`-- README.md
```

## Colour Scheme and Branding

The site uses a dark performance-oriented palette with gold accents.

Core CSS variables:

```css
:root {
    --primary-color: #0a0e27;
    --secondary-color: #d4a574;
    --accent-color: #e8d4c0;
    --text-color: #e0e0e0;
    --dark-bg: #1a1f3a;
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
- `media.html` for event sections, media captions, image links, and YouTube embeds
- `shows.html` for upcoming dates and ticket URLs
- `merch.html` for item names, descriptions, imagery, and store links

### Styling

- use `css/styles.css` for shared site styling
- keep page-specific additions aligned with the existing navy and gold system
- preserve shared classes used by `js/main.js` such as `navbar`, `hamburger`, and `nav-menu`

### Media page pattern

To add another media event section:

1. Duplicate one existing `.media-event` block in `media.html`
2. Update the title and metadata line
3. Replace the four image cards and one video embed
4. Keep `data-lightbox-group` consistent within that event section

## Assets

### Current local image assets

The repo currently includes these local band images:

- `images/kevin.JPG`
- `images/bennett.JPG`
- `images/hamza.JPG`
- `images/spencer.JPG`

### Current video assets

- `images/hero.mp4`
- `images/hero.MOV`

### Asset notes

- `index.html` uses the MP4 hero video
- `media.html` uses local JPG images plus embedded YouTube content
- `shows.html` and `merch.html` still reference placeholder imagery in their page-specific inline styles and cards

## Extending Functionality

Existing hooks and structure make the following straightforward to add later:

- real lightbox behavior for media image cards
- analytics integration through `trackEvent()`
- CMS or JSON-backed show and media data
- real merch catalog integration
- improved SEO metadata across subpages

## Known Issues

| Issue | Status | Notes |
|---|---|---|
| Media lightbox next/prev behavior | Scaffolded only | Image cards are structured for it, but functionality is not implemented |
| Shows page background image | Placeholder | `shows.html` still uses a placeholder hero image |
| Merch imagery and product copy | Placeholder | `merch.html` still uses sample merch content |
| Hero video autoplay on some mobile browsers | Known | Browser autoplay restrictions may apply |

## Future Development

Potential next steps:

- replace placeholder visuals on `shows.html` and `merch.html`
- connect analytics to a real provider
- add a functioning image lightbox for `media.html`
- add Open Graph and richer per-page meta tags
- optimize local images and add modern formats where appropriate

## License

Copyright 2026 Thrifted Tease. All rights reserved.

Last Updated: March 12, 2026  
Version: 2.3
