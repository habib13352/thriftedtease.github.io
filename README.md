# Thrifted Tease – Official Band Website

<p align="center">
Official landing page for the Toronto-based progressive pop band <strong>Thrifted Tease</strong>.
</p>

<p align="center">
<a href="https://habib13352.github.io/thriftedtease.github.io/">Live Website</a> •
<a href="https://open.spotify.com/artist/2Bzx8VvEQmCcalgPMMIpay">Spotify</a> •
<a href="https://www.instagram.com/thriftedtease/">Instagram</a>
</p>

---

A clean, minimal band website built with **HTML5, CSS3, and vanilla JavaScript**.

The goal of this project is simple:

- Showcase the band
- Drive traffic to streaming platforms
- Promote merch
- Provide booking contact information

The site is fully responsive and optimized for fast load times.

This immediately makes the repo look 10x better.

2. Add a Screenshot Section

GitHub READMEs look much more legit with a visual preview.

Add a screenshot of the site and put it in /images.

Example:

## Website Preview

![Thrifted Tease Website](images/site-preview.jpg)

You can take the screenshot by:

Open the site
Full screen
Screenshot hero section
Save as:
images/site-preview.jpg

Then GitHub renders it automatically.

3. Add Quick Navigation (Table of Contents)

For longer READMEs, this helps users scan the document.

## Table of Contents

- [Project Overview](#project-overview)
- [Technical Features](#technical-features)
- [Project Structure](#project-structure)
- [Colour Scheme & Branding](#colour-scheme--branding)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Performance & SEO](#performance--seo)
- [Future Development](#future-development)
- [License](#license)

GitHub automatically links these to your headings.

Result

If you add those 3 things your README will look like a proper open-source repo instead of a school project.

Typical improvements:

Feature	Why it matters
Header section	Makes repo immediately understandable
Screenshot	Shows project instantly
Table of contents	Improves navigation

If you want, I can also show you one GitHub trick that makes band websites get way more stars and traffic (most people don't know this).

now the full read me in a way i can copy paste

Here is the complete cleaned and professional README.md ready to copy-paste directly into GitHub.

Everything is formatted properly for Markdown (headings, code blocks, table of contents, etc.).

# Thrifted Tease – Official Band Website

<p align="center">
Official landing page for the Toronto-based progressive pop band <strong>Thrifted Tease</strong>.
</p>

<p align="center">
<a href="https://habib13352.github.io/thriftedtease.github.io/">Live Website</a> •
<a href="https://open.spotify.com/artist/2Bzx8VvEQmCcalgPMMIpay">Spotify</a> •
<a href="https://www.instagram.com/thriftedtease/">Instagram</a>
</p>

---

A clean, minimal band website built with **HTML5, CSS3, and vanilla JavaScript**.

The goal of this project is simple:

- Showcase the band
- Drive traffic to streaming platforms
- Promote merch
- Provide booking contact information

The site is fully responsive and optimized for fast loading.

---

# Table of Contents

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

# Project Overview

The landing page has five core sections.

## Navigation

A sticky navigation bar with four links:

- Home
- Listen
- Gallery
- Contact

The navigation collapses into a **mobile hamburger menu**.

JavaScript handles:

- menu toggling
- closing the menu after navigation
- adding a subtle shadow when scrolling

---

## Hero

A full-screen hero section featuring:

- Background video (`images/hero.mp4`)
- Band name
- Tagline: **Toronto Based. Progressive Pop.**
- Subtitle

Three call-to-action buttons lead to:

- Streaming platforms
- Shopify merch store
- Contact section

---

## Listen

Promotes the band's music with direct links to:

- Spotify
- Apple Music
- YouTube
- SoundCloud

Each platform card includes an icon and logs an **analytics event** when clicked.

---

## Media

A gallery grid displaying photos of band members.

Hovering reveals captions and an expand icon.

Images are stored in the `images/` directory.


images/
├── kevin.JPG
├── bennett.JPG
├── hamza.JPG
└── spencer.JPG


---

## Contact

Displays:

- booking email
- general contact email
- social media links

Platforms include:

- Instagram
- Spotify
- YouTube
- TikTok
- Twitter

JavaScript logs clicks on these links for analytics.

---

A simple footer displays the copyright.


© 2026 Thrifted Tease


---

# Technical Features

- Mobile-first responsive design
- Smooth scrolling navigation
- Scroll-triggered animations using **Intersection Observer API**
- Analytics hooks for links and buttons
- Modern CSS with variables for easy theme changes
- Font Awesome icons via CDN
- Minimal dependencies

---

# Project Structure


thriftedtease.github.io/

├── index.html
│ Main landing page
│ Sections: hero, listen, gallery, contact, footer
│
├── css/
│ └── styles.css
│ Global styles (~760 lines)
│ Variables, layout, animations, responsive rules
│
├── js/
│ └── main.js
│ JavaScript (~196 lines)
│ Menu toggle
│ Smooth scrolling
│ Scroll animations
│ Analytics hooks
│
├── images/
│ ├── hero.mp4
│ ├── kevin.JPG
│ ├── bennett.JPG
│ ├── hamza.JPG
│ └── spencer.JPG
│
├── .gitignore
└── README.md


---

# Colour Scheme & Branding

The site uses a **dark theme with gold accents**.

```css
:root {
    --primary-color: #0a0e27;   /* dark navy background */
    --secondary-color: #d4a574; /* gold accent */
    --accent-color: #e8d4c0;    /* cream accent */
    --text-color: #e0e0e0;      /* light grey text */
    --highlight: #ff6b6b;       /* CTA highlight color */
}

These variables are defined in:

css/styles.css

Edit them to change the site's theme.

Getting Started
Clone the repository
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
Run locally

Open index.html directly in a browser.

Or start a local server.

Python
python -m http.server 8000
Node
npx http-server
View the live site

The site is deployed using GitHub Pages.

https://habib13352.github.io/thriftedtease.github.io/
Customization Guide
Update Band Information

Edit index.html.

Hero Section

Update:

band name

tagline

subtitle

CTA destinations

Shop Link

Currently points to:

https://thriftedtease.myshopify.com

Change the href if using a different store.

Streaming Links

Update the links for:

Spotify

Apple Music

YouTube

SoundCloud

Gallery Photos

Place new images inside:

images/

Then update the <img src=""> paths in the gallery.

Contact Details

Update:

email addresses

social media URLs

Optimizing Assets
Hero Video
images/hero.mp4

Recommended:

Resolution: 1920×1080

Size: <5MB

Format: MP4

Gallery Images

Recommended:

Resolution: 1200×800

Size: <300KB

Tools for compression:

https://tinyjpg.com

https://imageoptim.com

ffmpeg

Extending Functionality

The JavaScript includes a placeholder analytics function.

trackEvent()

This can be connected to:

Google Analytics

Mixpanel

Segment

The site currently does not include a contact form backend.

Possible solutions:

Formspree

EmailJS

Performance & SEO

Current optimizations:

semantic HTML5

mobile-first CSS

minimal dependencies

small JavaScript bundle

compressed images

Recommended improvements:

lazy-load images

WebP image support

schema.org structured data

service worker for offline caching

Open Graph metadata

Known Issues
Issue	Status	Notes
Hero video autoplay on iOS	Known	iOS blocks autoplay
Contact form backend missing	Planned	Use Formspree or EmailJS
Light mode toggle	Not implemented	Dark theme chosen intentionally
Future Development

Potential improvements:

Google Analytics integration

working contact form

newsletter signup

embedded music player

tour dates integration

schema markup

Open Graph metadata

PWA features

lazy loading and WebP images

Support & Maintenance

For contributors:

HTML Structure

Sections in index.html correspond to CSS and JavaScript hooks.

CSS Variables

Colors and spacing are centralized in:

css/styles.css
JavaScript

All interactivity is handled in:

js/main.js
Responsive Testing

Test layouts at:

320px

768px

1200px

Use Chrome DevTools Lighthouse for performance testing.

License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026
Version: 2.2 (Actual media and links added)


---

If you want, I can also show you **one small README trick used by popular GitHub repos that will mak
