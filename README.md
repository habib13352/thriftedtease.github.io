# Thrifted Tease – Official Band Website

<p align="center">
Official landing page for the Toronto-based progressive pop band <strong>Thrifted Tease</strong>.
</p>

<p align="center">

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?logo=javascript)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey)

</p>

<p align="center">
<a href="https://habib13352.github.io/thriftedtease.github.io/">🌐 Live Website</a> •
<a href="https://open.spotify.com/artist/2Bzx8VvEQmCcalgPMMIpay">🎵 Spotify</a> •
<a href="https://www.instagram.com/thriftedtease/">📸 Instagram</a>
</p>

---

A clean, minimal band website built with **HTML5, CSS3, and vanilla JavaScript**.

The goal of this project is simple:

- Showcase the band
- Drive traffic to streaming platforms
- Promote merch
- Provide booking contact information

The site is fully responsive and optimized for fast loading.

## Live Site

Visit the official website here:

https://habib13352.github.io/thriftedtease.github.io/

## Website Preview

![Thrifted Tease Website](images/site-preview.jpg)

> If the preview image does not appear yet, add a screenshot at `images/site-preview.jpg`.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technical Features](#technical-features)
- [Project Structure](#project-structure)
- [Colour Scheme & Branding](#colour-scheme--branding)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Optimizing Assets](#optimizing-assets)
- [Extending Functionality](#extending-functionality)
- [Performance & SEO](#performance--seo)
- [Known Issues](#known-issues)
- [Future Development](#future-development)
- [Support & Maintenance](#support--maintenance)
- [License](#license)

---

## Project Overview

The landing page contains five main sections.

### Navigation

A sticky navigation bar with four links:

- Home
- Listen
- Gallery
- Contact

The navigation collapses into a **mobile hamburger menu**.

JavaScript handles:

- Menu toggling
- Closing the menu after navigation
- Adding a subtle shadow when scrolling

### Hero

A full-screen hero section featuring:

- Background video (`images/hero.mp4`)
- Band name
- Tagline: **Toronto Based. Progressive Pop.**
- Subtitle

Three call-to-action buttons lead to:

- Streaming platforms
- Shopify merch store
- Contact section

### Listen

Promotes the band's music with direct links to:

- Spotify
- Apple Music
- YouTube
- SoundCloud

Each platform card includes an icon and logs an **analytics event** when clicked.

### Media

A gallery grid displaying photos of band members.

Images are stored in the `images/` directory:

```text
images/
├── kevin.JPG
├── bennett.JPG
├── hamza.JPG
└── spencer.JPG
```

### Contact

Displays:

- Booking email
- General contact email
- Social media links

Platforms include:

- Instagram
- Spotify
- YouTube
- TikTok
- Twitter

JavaScript logs clicks on these links for analytics.

## Technical Features

- Mobile-first responsive design
- Smooth scrolling navigation
- Scroll-triggered animations
- Analytics hooks for links and buttons
- CSS variables for easy theme customization
- Font Awesome icons via CDN
- Minimal dependencies

## Project Structure

```text
thriftedtease.github.io/
├── index.html
│   Main landing page
│   Sections: hero, listen, gallery, contact, footer
│
├── css/
│   └── styles.css
│       Global styles (~760 lines)
│       Variables, layout, animations, responsive rules
│
├── js/
│   └── main.js
│       JavaScript (~196 lines)
│       Menu toggle
│       Smooth scrolling
│       Scroll animations
│       Analytics hooks
│
├── images/
│   ├── hero.mp4
│   ├── kevin.JPG
│   ├── bennett.JPG
│   ├── hamza.JPG
│   └── spencer.JPG
│
├── .gitignore
└── README.md
```

## Colour Scheme & Branding

The site uses a **dark theme with gold accents**.

Example CSS variables:

```css
:root {
  --primary-color: #0a0e27;
  --secondary-color: #d4a574;
  --accent-color: #e8d4c0;
  --text-color: #e0e0e0;
  --highlight: #ff6b6b;
}
```

These variables are defined in `css/styles.css`.

Edit them to customize the theme.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
```

### Run locally

Open `index.html` directly in a browser, or run a local server.

#### Python

```bash
python -m http.server 8000
```

#### Node

```bash
npx http-server
```

### View the live site

The site is deployed with GitHub Pages:

https://habib13352.github.io/thriftedtease.github.io/

## Customization Guide

Edit `index.html` to update:

- Band name
- Streaming platform links
- Shopify store link
- Gallery images
- Contact information

## Optimizing Assets

### Hero Video

Location: `images/hero.mp4`

Recommended:

- Resolution: 1920×1080
- File size: < 5MB
- Format: MP4

### Gallery Images

Recommended:

- Resolution: 1200×800
- File size: < 300KB

Compression tools:

- https://tinyjpg.com
- https://imageoptim.com
- `ffmpeg`

## Extending Functionality

Analytics hooks exist via:

`trackEvent()`

This can be connected to:

- Google Analytics
- Mixpanel
- Segment

For contact forms, consider:

- Formspree
- EmailJS

## Performance & SEO

Current optimizations:

- Semantic HTML5
- Mobile-first CSS
- Minimal dependencies
- Fast loading assets

Future improvements:

- Lazy loading images
- WebP image support
- Schema.org structured data
- Service workers
- Open Graph metadata

## Known Issues

| Issue | Status | Notes |
|---|---|---|
| Hero video autoplay on iOS | Known | iOS blocks autoplay |
| Contact form backend missing | Planned | Use Formspree or EmailJS |
| Light mode toggle | Not implemented | Dark theme chosen intentionally |

## Future Development

Potential improvements:

- Google Analytics integration
- Working contact form
- Newsletter signup
- Embedded music player
- Tour dates integration
- Schema markup
- Open Graph metadata
- PWA features

## Support & Maintenance

### HTML Structure

Sections in `index.html` map to CSS and JavaScript hooks.

### CSS Variables

Theme variables are located in `css/styles.css`.

### JavaScript

All interactivity is handled in `js/main.js`.

### Responsive Testing

Test layouts at:

- 320px
- 768px
- 1200px

Use Chrome DevTools Lighthouse for performance testing.

## License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026  
Version: 2.2
