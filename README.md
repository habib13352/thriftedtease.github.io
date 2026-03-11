Thrifted Tease – Official Band Website

Thrifted Tease is a Toronto‑based progressive‑pop band. This repository hosts their official landing page built with HTML5, CSS3 and vanilla JavaScript. The site is intentionally minimal: a bold hero section introduces the band, direct buttons drive visitors to stream music, shop merch or get in touch, and a short gallery and contact section round out the page. It is fully responsive and optimised for quick load times.

Project Overview

The landing page has five core sections:

Navigation – a sticky nav bar with four links (Home, Listen, Gallery and Contact) collapses into a mobile hamburger menu. JavaScript toggles the menu and closes it after a link is clicked. A subtle shadow appears on scroll to improve contrast.

Hero – a full‑screen hero featuring a background video (images/hero.mp4), the band name, the tagline “Toronto Based. Progressive Pop.”, and a subtitle. Three call‑to‑action buttons lead to the streaming section, the Shopify store and the contact section.

Listen – a section promoting the band’s music. Cards link directly to Spotify, Apple Music, YouTube and SoundCloud with icons. Clicking a platform logs an event for analytics (hooks are provided but not yet connected to a service).

Media – a gallery grid of four real photos of the band members. Hovering reveals captions and an expand icon. Images live in the images/ directory and are named kevin.JPG, bennett.JPG, hamza.JPG and spencer.JPG.

Contact – displays booking and general email links and social icons for Instagram, Spotify, YouTube, TikTok and Twitter. JavaScript attaches click‑tracking to these social links.

A simple footer at the bottom displays the ©2026 copyright.

Technical Features

Mobile‑first responsive design (desktop, tablet and mobile)

Smooth scrolling for anchor links

Scroll‑triggered fade‑in animations using the Intersection Observer API

Analytics hooks for streaming links, buttons and social icons

Modern CSS using variables for colours and transitions

Font Awesome icons via CDN

Project Structure
thriftedtease.github.io/
├── index.html              # Main landing page (198 lines) – hero, listen, gallery, contact, footer
├── css/
│   └── styles.css          # Global styles (~760 lines) with variables, layouts and media queries
├── js/
│   └── main.js             # JavaScript (~196 lines) for interactivity (menu, scroll, animations, tracking)
├── images/                 # Assets
│   ├── hero.mp4            # Hero background video (autoplay, muted, loop)
│   ├── kevin.JPG           # Drummer Kevin
│   ├── bennett.JPG         # Piano player Bennett
│   ├── hamza.JPG           # Guitarist/vocalist Hamza
│   └── spencer.JPG         # Bassist Spencer
├── .gitignore              # Ignore rules
└── README.md               # This documentation
Colour Scheme & Branding

The site uses a dark theme with gold and cream accents defined as CSS variables:

:root {
    --primary-color: #0a0e27;      /* Dark navy background */
    --secondary-color: #d4a574;    /* Gold accent */
    --accent-color: #e8d4c0;       /* Cream/light accent */
    --text-color: #e0e0e0;         /* Light grey text */
    --highlight: #ff6b6b;          /* Red/pink for urgent CTAs */
    /* ...additional variables... */
}

To adjust the look and feel, modify these variables in css/styles.css.

Getting Started

Clone the repository:

git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io

Run locally – open index.html in your browser or use a simple HTTP server:

# Python 3
python -m http.server 8000
# or Node.js
npx http-server

View live – the site is deployed via GitHub Pages at:

https://habib13352.github.io/thriftedtease.github.io/

Customization Guide
A. Update Band Information

The site already contains Thrifted Tease’s real links and images. To customise for another band, edit index.html:

Hero Section – lines 60–78 define the hero content: update the band name, tagline, subtitle and CTA labels or destinations.

Shop Link – the second CTA currently points to the Thrifted Tease Shopify store https://thriftedtease.myshopify.com . Change the href attribute if you have a different merch store.

Streaming Links – lines 90–108 list real platform URLs. Replace the href values with your own artist pages.

Gallery Photos – place your own JPG/PNG files in the images/ folder and update the <img src> paths and captions in the gallery section.

Contact Details – lines 166–185 show the email addresses and social media links. Update email addresses and social URLs as needed.

B. Optimise Assets

Hero Video: Use an MP4 file (1920×1080, <5 MB) and place it at images/hero.mp4.

Gallery Images: Resize photos to ~1200×800px and compress them (<300 KB) for optimal loading.

Tools for optimisation include TinyJPG
, ImageOptim
 and ffmpeg for video compression.

C. Extend Functionality

The JavaScript includes placeholders for analytics. To integrate Google Analytics, Mixpanel or another service, implement the trackEvent function in js/main.js. A contact form structure is not yet present; adding a backend (e.g., Formspree or EmailJS) is recommended.

Performance & SEO

Semantic HTML5 markup with appropriate meta tags

Mobile‑first CSS and responsive breakpoints

Minimal external dependencies (only Font Awesome via CDN)

Fast load times thanks to compressed images and small JavaScript bundle

Recommended enhancements include lazy loading images, supporting WebP formats, adding structured data (schema.org) and integrating a service worker for offline caching.

Known Issues
Issue	Status	Notes
Autoplay video on iOS may not work	Known	iOS blocks autoplay; provide a static poster as fallback
Contact form requires a backend	Planned	Add Formspree, EmailJS or your own server
No light/dark theme toggle	Design decision	A dark theme better suits the band’s aesthetic
Future Development

Integrate analytics (Google Analytics or Mixpanel)

Add a working contact form

Introduce a newsletter signup or fan‑club feature

Embed a music player widget or show tour dates dynamically

Add schema.org markup and Open Graph tags for richer previews

Optimise further with lazy loading, WebP images and PWA features

Support & Maintenance

For contributors:

HTML Structure – sections in index.html correspond directly to CSS styles and JavaScript hooks.

CSS Variables – colours and spacing are centralised at the top of styles.css.

JavaScript – event listeners and helper functions live in js/main.js.

Responsive Testing – check at widths of 320 px (mobile), 768 px (tablet) and 1200 px (desktop) to ensure layout integrity.

Performance Tools – use Chrome DevTools (Lighthouse) to monitor performance and accessibility.

License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026
Version: 2.2 (Actual media and links added)
