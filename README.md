Thrifted Tease – Official Band Website

Thrifted Tease is a Toronto-based progressive-pop band. This repository hosts the official landing page built with HTML5, CSS3, and vanilla JavaScript.

The site is intentionally minimal: a bold hero section introduces the band, direct buttons drive visitors to stream music, shop merch, or get in touch, and a short gallery and contact section round out the page.

It is fully responsive and optimized for fast loading.

Project Overview

The landing page has five core sections:

Navigation

A sticky navigation bar with four links:

Home

Listen

Gallery

Contact

The navigation collapses into a mobile hamburger menu. JavaScript toggles the menu and closes it after a link is clicked. A subtle shadow appears when scrolling to improve contrast.

Hero

A full-screen hero section featuring:

Background video (images/hero.mp4)

Band name

Tagline: “Toronto Based. Progressive Pop.”

Subtitle

Three call-to-action buttons link to:

Streaming platforms

Shopify merch store

Contact section

Listen

Promotes the band’s music with cards linking directly to:

Spotify

Apple Music

YouTube

SoundCloud

Clicking a platform logs an analytics event (hooks exist but are not yet connected to an analytics service).

Media

A gallery grid displaying four photos of band members.

Hovering reveals captions and an expand icon.

Images are stored in:

images/
├── kevin.JPG
├── bennett.JPG
├── hamza.JPG
└── spencer.JPG
Contact

Displays booking and general email addresses plus social icons for:

Instagram

Spotify

YouTube

TikTok

Twitter

JavaScript attaches click-tracking to these social links.

A simple footer at the bottom displays the ©2026 copyright.

Technical Features

Mobile-first responsive design

Smooth scrolling for anchor links

Scroll-triggered animations using Intersection Observer API

Analytics hooks for buttons, streaming links, and socials

Modern CSS using variables for theme control

Font Awesome icons via CDN

Project Structure
thriftedtease.github.io/

├── index.html
│   Main landing page (198 lines)
│   Sections: hero, listen, gallery, contact, footer
│
├── css/
│   └── styles.css
│       Global styles (~760 lines)
│       Variables, layouts, responsive rules
│
├── js/
│   └── main.js
│       JavaScript (~196 lines)
│       Menu toggle, scroll effects, analytics hooks
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
Colour Scheme & Branding

The site uses a dark theme with gold accents defined using CSS variables.

:root {
    --primary-color: #0a0e27;   /* Dark navy background */
    --secondary-color: #d4a574; /* Gold accent */
    --accent-color: #e8d4c0;    /* Cream accent */
    --text-color: #e0e0e0;      /* Light grey text */
    --highlight: #ff6b6b;       /* CTA highlight color */
}

To change colors, edit the variables inside:

css/styles.css
Getting Started
Clone the repository
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
Run locally

Open index.html directly in a browser, or run a local server.

Python
python -m http.server 8000
Node
npx http-server
View live site

Hosted via GitHub Pages:

https://habib13352.github.io/thriftedtease.github.io/
Customization Guide
A. Update Band Information

Edit index.html.

Hero Section

Update:

Band name

Tagline

Subtitle

Button destinations

Shop Link

Currently points to:

https://thriftedtease.myshopify.com

Replace the href if using a different merch store.

Streaming Links

Update links to your artist profiles:

Spotify

Apple Music

YouTube

SoundCloud

Gallery Photos

Place images inside:

images/

Then update the <img src=""> paths in the gallery section.

Contact Details

Update:

Email addresses

Social media URLs

Optimizing Assets
Hero Video
images/hero.mp4

Recommended:

Resolution: 1920×1080

Size: <5 MB

Format: MP4

Gallery Images

Recommended:

Resolution: 1200×800

Size: <300 KB

Tools for compression:

https://tinyjpg.com

https://imageoptim.com

ffmpeg (video compression)

Extending Functionality

The JavaScript includes a placeholder analytics function:

trackEvent()

This can be connected to:

Google Analytics

Mixpanel

Segment

The site currently does not include a working contact form backend.

Recommended services:

Formspree

EmailJS

Performance & SEO

Current optimizations:

Semantic HTML5

Mobile-first CSS

Minimal dependencies

Fast loading assets

Clean DOM structure

Recommended improvements:

Lazy-loading images

WebP image support

Schema.org structured data

Service worker for offline caching

Open Graph metadata

Known Issues
Issue	Status	Notes
Hero video autoplay on iOS	Known	iOS blocks autoplay
Contact form backend missing	Planned	Use Formspree or EmailJS
Light mode toggle	Not implemented	Dark theme chosen intentionally
Future Development

Potential improvements:

Google Analytics integration

Working contact form

Newsletter signup

Embedded music player

Tour dates integration

Open Graph + schema markup

PWA support

Lazy loading + WebP images

Support & Maintenance

For contributors:

HTML Structure

Sections in index.html map directly to CSS styles and JavaScript hooks.

CSS Variables

Colors and spacing are centralized at the top of:

css/styles.css

JavaScript

All interaction logic lives in:

js/main.js

Responsive Testing

Test layouts at:

320px

768px

1200px

Use Chrome DevTools Lighthouse to monitor performance.

License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026
Version: 2.2 (Actual media and links added)
