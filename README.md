import pypandoc, os

readme_content = """
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

---

# Project Overview

The landing page has five core sections.

## Navigation

A sticky navigation bar with four links:

- Home
- Listen
- Gallery
- Contact

The navigation collapses into a mobile hamburger menu.

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

Each platform card includes an icon and logs an analytics event when clicked.

---

## Media

A gallery grid displaying photos of band members.

Images stored in:

images/
- kevin.JPG
- bennett.JPG
- hamza.JPG
- spencer.JPG

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

---

# Technical Features

- Mobile-first responsive design
- Smooth scrolling navigation
- Scroll-triggered animations
- Analytics hooks for links and buttons
- CSS variables for easy theme changes
- Font Awesome icons via CDN

---

# Project Structure

thriftedtease.github.io/

index.html – Main landing page

css/styles.css – Global styling

js/main.js – Interactivity and tracking

images/ – Media assets

README.md – Documentation

---

# Colour Scheme & Branding

CSS variables control the theme.

Example:

:root {
--primary-color: #0a0e27;
--secondary-color: #d4a574;
--accent-color: #e8d4c0;
--text-color: #e0e0e0;
--highlight: #ff6b6b;
}

Edit values inside:

css/styles.css

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

- Semantic HTML
- Mobile-first CSS
- Minimal dependencies
- Fast loading assets

Future improvements:

- Lazy loading images
- WebP images
- Structured data
- Service worker

---

# Known Issues

Hero video autoplay on iOS may not work.

Contact form backend not implemented yet.

---

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

index.html

css/styles.css

js/main.js

---

# License

© 2026 Thrifted Tease. All rights reserved.

Last Updated: March 11, 2026