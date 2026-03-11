<<<<<<< ours
import pypandoc, os

readme_content = """
# Thrifted Tease – Official Band Website

<p align="center">
  Official landing page for the Toronto-based progressive pop band <strong>Thrifted Tease</strong>.
</p>

<p align="center">
<<<<<<< ours
<<<<<<< ours
<a href="https://habib13352.github.io/thriftedtease.github.io/">Live Website</a> •
<a href="https://open.spotify.com/artist/2Bzx8VvEQmCcalgPMMIpay">Spotify</a> •
<a href="https://www.instagram.com/thriftedtease/">Instagram</a>
=======
# Thrifted Tease – Official Band Website

<p align="center">
  Official landing page for the Toronto-based progressive pop band <strong>Thrifted Tease</strong>.
</p>

<p align="center">
=======
>>>>>>> theirs
=======
>>>>>>> theirs
  <img alt="HTML" src="https://img.shields.io/badge/HTML-5-orange?logo=html5" />
  <img alt="CSS" src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-Vanilla-yellow?logo=javascript" />
  <img alt="GitHub Pages" src="https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github" />
  <img alt="License" src="https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey" />
</p>

<p align="center">
  <a href="https://habib13352.github.io/thriftedtease.github.io/">🌐 Live Website</a> •
  <a href="https://open.spotify.com/artist/2Bzx8VvEQmCcalgPMMIpay">🎵 Spotify</a> •
  <a href="https://www.instagram.com/thriftedtease/">📸 Instagram</a>
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
</p>

---

A clean, minimal band website built with **HTML5, CSS3, and vanilla JavaScript**.

The goal of this project is simple:

- Showcase the band
- Drive traffic to streaming platforms
- Promote merch
- Provide booking contact information

The site is fully responsive and optimized for fast loading.

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
---

# Table of Contents

- Project Overview
- Technical Features
- Project Structure
- Colour Scheme & Branding
- Getting Started
- Customization Guide
- Optimizing Assets
- Extending Functionality
- Performance & SEO
- Known Issues
- Future Development
- Support & Maintenance
- License
=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
## Live Site

Visit the official website:

https://habib13352.github.io/thriftedtease.github.io/

## Website Preview

> Add a homepage screenshot at `images/site-preview.jpg` and uncomment the line below.

<!-- ![Thrifted Tease Website](images/site-preview.jpg) -->

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
>>>>>>> theirs

---

## Project Overview

The landing page contains five core sections: **Navigation**, **Hero**, **Listen**, **Media**, and **Contact**.

### Navigation

A sticky navigation bar with four links:

- Home
- Listen
- Gallery
- Contact

The navigation collapses into a mobile hamburger menu.

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

Each platform card includes an icon and logs an analytics event when clicked.
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours

---
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs

### Media

A gallery grid displaying photos of band members.

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
Images stored in:
=======
Images are stored in the `images/` directory:
>>>>>>> theirs

```text
images/
<<<<<<< ours
- kevin.JPG
- bennett.JPG
- hamza.JPG
- spencer.JPG

---

## Contact
=======
=======
Images are stored in the `images/` directory:

=======
Images are stored in the `images/` directory:

>>>>>>> theirs
```text
images/
>>>>>>> theirs
├── kevin.JPG
├── bennett.JPG
├── hamza.JPG
└── spencer.JPG
```

### Contact
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs

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

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
---

# Technical Features
=======
JavaScript logs clicks on these links for analytics.

## Technical Features
>>>>>>> theirs
=======
JavaScript logs clicks on these links for analytics.

## Technical Features
>>>>>>> theirs
=======
JavaScript logs clicks on these links for analytics.

## Technical Features
>>>>>>> theirs

- Mobile-first responsive design
- Smooth scrolling navigation
- Scroll-triggered animations
- Analytics hooks for links and buttons
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
- CSS variables for easy theme changes
=======
- CSS variables for easy theme customization
>>>>>>> theirs
=======
- CSS variables for easy theme customization
>>>>>>> theirs
=======
- CSS variables for easy theme customization
>>>>>>> theirs
- Font Awesome icons via CDN

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
---

# Project Structure

thriftedtease.github.io/

index.html – Main landing page

css/styles.css – Global styling

js/main.js – Interactivity and tracking

images/ – Media assets

README.md – Documentation
=======
## Project Structure

```text
thriftedtease.github.io/
=======
## Project Structure

```text
thriftedtease.github.io/
>>>>>>> theirs
=======
## Project Structure

```text
thriftedtease.github.io/
>>>>>>> theirs
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
│       Menu toggle, smooth scrolling, scroll animations, analytics hooks
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
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs

The site uses a dark theme with gold accents.

<<<<<<< ours
# Colour Scheme & Branding

CSS variables control the theme.

Example:
=======
Example CSS variables:
>>>>>>> theirs
=======

The site uses a dark theme with gold accents.

Example CSS variables:
>>>>>>> theirs
=======

The site uses a dark theme with gold accents.

Example CSS variables:
>>>>>>> theirs

:root {
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
--primary-color: #0a0e27;
--secondary-color: #d4a574;
--accent-color: #e8d4c0;
--text-color: #e0e0e0;
--highlight: #ff6b6b;
=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
  --primary-color: #0a0e27;
  --secondary-color: #d4a574;
  --accent-color: #e8d4c0;
  --text-color: #e0e0e0;
  --highlight: #ff6b6b;
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
}
```

<<<<<<< ours
Edit values inside:
=======
These variables are defined in `css/styles.css`. Edit them to customize the theme.
>>>>>>> theirs

## Getting Started

<<<<<<< ours
---

# Getting Started

Clone the repository:

git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io

Run locally with Python:

python -m http.server 8000

Or Node:

npx http-server

Live site:

https://habib13352.github.io/thriftedtease.github.io/

---

# Customization Guide

Edit index.html to update:

- Band name
- Streaming links
- Shopify store link
- Gallery images
- Contact information

---

# Optimizing Assets

Hero Video:

images/hero.mp4

Recommended:

1920x1080 resolution

<5MB file size

MP4 format

Gallery images:

1200x800 resolution

<300KB

---

# Extending Functionality

Analytics hooks exist via:

trackEvent()

These can connect to:

- Google Analytics
- Mixpanel

Contact forms can use:

- Formspree
- EmailJS

---

# Performance & SEO

Current optimizations:
=======
}
```
=======
}
```

These variables are defined in `css/styles.css`. Edit them to customize the theme.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
```

### Run locally

Open `index.html` directly in your browser, or start a local server.

**Python**

```bash
python -m http.server 8000
```

**Node**

```bash
npx http-server
```

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
>>>>>>> theirs

These variables are defined in `css/styles.css`. Edit them to customize the theme.

<<<<<<< ours
## Getting Started

### Clone the repository

```bash
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
```

### Run locally
=======
- Resolution: 1920×1080
- File size: < 5MB
- Format: MP4

### Gallery Images
>>>>>>> theirs

Open `index.html` directly in your browser, or start a local server.

<<<<<<< ours
**Python**

```bash
python -m http.server 8000
```

**Node**

```bash
npx http-server
```

## Customization Guide

Edit `index.html` to update:

- Band name
- Streaming platform links
- Shopify store link
- Gallery images
- Contact information

## Optimizing Assets

### Hero Video
=======
- Resolution: 1200×800
- File size: < 300KB

Compression tools:

- https://tinyjpg.com
- https://imageoptim.com
- `ffmpeg`

## Extending Functionality

Analytics hooks exist via `trackEvent()`.
>>>>>>> theirs

Location: `images/hero.mp4`
>>>>>>> theirs

<<<<<<< ours
- Semantic HTML
- Mobile-first CSS
- Minimal dependencies
- Fast loading assets

<<<<<<< ours
Future improvements:

- Lazy loading images
- WebP images
- Structured data
- Service worker

---

# Known Issues
=======
- Resolution: 1920×1080
- File size: < 5MB
- Format: MP4

### Gallery Images
>>>>>>> theirs

Hero video autoplay on iOS may not work.

<<<<<<< ours
Contact form backend not implemented yet.
=======
- Google Analytics
- Mixpanel
- Segment

For contact forms, consider:

- Formspree
- EmailJS

## Performance & SEO
>>>>>>> theirs

---

<<<<<<< ours
# Future Development

Potential improvements:

- Analytics integration
- Contact form
- Newsletter signup
- Embedded music player
- Tour dates integration

---

# Support & Maintenance

HTML structure maps to CSS and JavaScript hooks.

Main files:
=======
- Resolution: 1200×800
- File size: < 300KB

Compression tools:

- https://tinyjpg.com
- https://imageoptim.com
- `ffmpeg`

## Extending Functionality

Analytics hooks exist via `trackEvent()`.
>>>>>>> theirs

index.html
=======
- Semantic HTML5
- Mobile-first CSS
- Minimal dependencies
- Fast-loading assets

Future improvements:

- Lazy loading images
- WebP image support
- Schema.org structured data
- Service workers
- Open Graph metadata

## Known Issues

| Issue                        | Status          | Notes                            |
|-----------------------------|-----------------|----------------------------------|
| Hero video autoplay on iOS  | Known           | iOS blocks autoplay              |
| Contact form backend missing| Planned         | Use Formspree or EmailJS         |
| Light mode toggle           | Not implemented | Dark theme chosen intentionally  |

## Future Development
>>>>>>> theirs

<<<<<<< ours
css/styles.css

<<<<<<< ours
js/main.js

---

# License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026
=======
### Clone the repository

```bash
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
```

### Run locally
=======
- Google Analytics
- Mixpanel
- Segment

For contact forms, consider:

- Formspree
- EmailJS

## Performance & SEO
>>>>>>> theirs

Open `index.html` directly in your browser, or start a local server.

<<<<<<< ours
**Python**

```bash
python -m http.server 8000
```

**Node**

```bash
npx http-server
```

## Customization Guide

Edit `index.html` to update:

- Band name
- Streaming platform links
- Shopify store link
- Gallery images
- Contact information
=======
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

Sections in `index.html` map directly to CSS and JavaScript hooks.

### CSS Variables

Theme variables are located in `css/styles.css`.

### JavaScript

All interactivity is handled in `js/main.js`.

### Responsive Testing
>>>>>>> theirs

## Optimizing Assets

<<<<<<< ours
### Hero Video

Location: `images/hero.mp4`

Recommended:

- Resolution: 1920×1080
- File size: < 5MB
- Format: MP4
=======
- Semantic HTML5
- Mobile-first CSS
- Minimal dependencies
- Fast-loading assets

Future improvements:
=======
- 320px
- 768px
- 1200px

Use Chrome DevTools Lighthouse to monitor performance.

## License
>>>>>>> theirs

- Lazy loading images
- WebP image support
- Schema.org structured data
- Service workers
- Open Graph metadata

<<<<<<< ours
## Known Issues

| Issue                        | Status          | Notes                            |
|-----------------------------|-----------------|----------------------------------|
| Hero video autoplay on iOS  | Known           | iOS blocks autoplay              |
| Contact form backend missing| Planned         | Use Formspree or EmailJS         |
| Light mode toggle           | Not implemented | Dark theme chosen intentionally  |

## Future Development
>>>>>>> theirs

### Gallery Images

<<<<<<< ours
Recommended:

- Resolution: 1200×800
- File size: < 300KB

Compression tools:

- https://tinyjpg.com
- https://imageoptim.com
- `ffmpeg`

## Extending Functionality

Analytics hooks exist via `trackEvent()`.

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
- Fast-loading assets

Future improvements:

- Lazy loading images
- WebP image support
- Schema.org structured data
- Service workers
- Open Graph metadata

## Known Issues

| Issue                        | Status          | Notes                            |
|-----------------------------|-----------------|----------------------------------|
| Hero video autoplay on iOS  | Known           | iOS blocks autoplay              |
| Contact form backend missing| Planned         | Use Formspree or EmailJS         |
| Light mode toggle           | Not implemented | Dark theme chosen intentionally  |

## Future Development
=======
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

Sections in `index.html` map directly to CSS and JavaScript hooks.

### CSS Variables

Theme variables are located in `css/styles.css`.

### JavaScript

All interactivity is handled in `js/main.js`.

### Responsive Testing
>>>>>>> theirs

Potential improvements:

<<<<<<< ours
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

Sections in `index.html` map directly to CSS and JavaScript hooks.

### CSS Variables
=======
- 320px
- 768px
- 1200px

Use Chrome DevTools Lighthouse to monitor performance.

## License
>>>>>>> theirs

Theme variables are located in `css/styles.css`.

<<<<<<< ours
### JavaScript

All interactivity is handled in `js/main.js`.

### Responsive Testing

Test layouts at:

- 320px
- 768px
- 1200px

Use Chrome DevTools Lighthouse to monitor performance.

## License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026  
Version: 2.2
>>>>>>> theirs
=======
Last Updated: March 11, 2026  
Version: 2.2
>>>>>>> theirs
=======
Last Updated: March 11, 2026  
Version: 2.2
>>>>>>> theirs
