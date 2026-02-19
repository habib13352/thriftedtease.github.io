# Thrifted Tease - Professional Band Landing Page

**The Official Website for Thrifted Tease** - A clean, focused landing page designed to showcase the band's music, engage fans, and drive visitors to key platforms (streaming, merch, social).

## 🎵 Project Overview

This is a streamlined, fully responsive band landing page built with modern web standards. Focus: **Less clutter, more impact.**

**Primary Objectives:**
1. **Hero Section First** - Immediate visual impact with clear CTAs
2. **Streaming Links** - Direct paths to all music platforms
3. **Visual Gallery** - Photos for social media and fan engagement
4. **Quick Contact** - Email and social links for bookings/inquiries

## 🌟 Current Features (Implemented)

### Navigation & UX
- ✅ Sticky navigation with 4 core menu items
- ✅ Responsive hamburger menu for mobile devices
- ✅ Smooth scroll navigation with anchor links
- ✅ Professional hover animations throughout
- ✅ Mobile-first responsive design

### Hero Section (Primary Focus)
- ✅ Full-screen hero with video background support
- ✅ Three key call-to-action buttons:
  - Stream Now → Streaming platforms section
  - 🛍️ Shop → Shopify store
  - 📧 Contact → Contact section
- ✅ Gradient overlay for text readability
- ✅ Professional typography and animations

### Content Sections
- ✅ **Listen** - Streaming platform cards (Spotify, Apple Music, YouTube, SoundCloud)
- ✅ **Media** - Photo gallery with hover expand effects
- ✅ **Contact** - Email info + social media links
- ✅ **Footer** - Clean, minimal footer

### Technical Features
- ✅ Mobile-first responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Form handling structure (ready for backend)
- ✅ Scroll-triggered animations
- ✅ Event tracking hooks for analytics
- ✅ SEO metadata (meta tags, keywords)
- ✅ Font Awesome icons integration
- ✅ Professional dark theme with gold/cream accents

## 📁 Project Structure

```
thriftedtease.github.io/
├── index.html              # Main landing page (177 lines)
│                            # - Clean, focused sections
│                            # - 5 core sections only
│                            # - Minimal comments for clarity
├── css/
│   └── styles.css          # Professional stylesheet (~430 lines)
│                            # - Responsive grid layouts
│                            # - CSS variables for theming
│                            # - Mobile-first design
│                            # - Smooth animations
├── js/
│   └── main.js             # JavaScript functionality (~150 lines)
│                            # - Mobile menu toggle
│                            # - Smooth scrolling
│                            # - Form handling
│                            # - Analytics hooks
├── images/                 # Band photos & media
│   ├── photo1-placeholder.jpg
│   ├── photo2-placeholder.jpg
│   ├── photo3-placeholder.jpg
│   ├── photo4-placeholder.jpg
│   └── hero-bg.mp4         # Hero section video
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🎨 Color Scheme & Branding

The site uses a **professional dark theme** with **gold/cream accents**:

```css
Primary Color:    #0a0e27 (Deep Navy)
Secondary Color:  #d4a574 (Gold)
Accent Color:     #e8d4c0 (Cream)
Text Color:       #e0e0e0 (Light Gray)
Highlight:        #ff6b6b (Red/Pink accent)
```

### Customizing Colors
Edit CSS variables in `css/styles.css` (lines 14-21):

```css
:root {
    --primary-color: #0a0e27;      /* Dark background */
    --secondary-color: #d4a574;    /* Gold accents */
    --accent-color: #e8d4c0;       /* Cream text accents */
    --text-color: #e0e0e0;         /* Main text */
    --highlight: #ff6b6b;          /* Call-to-action buttons */
}
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/habib13352/thriftedtease.github.io.git
cd thriftedtease.github.io
```

### 2. Local Development
Simply open `index.html` in your browser, or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

### 3. View Live
- GitHub Pages: `https://habib13352.github.io/thriftedtease.github.io/`

## 📝 Customization Guide

### A. Update Band Information

**File: `index.html`**

1. **Hero Section** (lines 43-65)
   - Band name, tagline, subtitle
   - Three CTAs: Stream, Shop, Contact

2. **Contact Information** (lines 125-150)
   - Email addresses
   - Social media URLs

### B. Add Content

**1. Hero Video**
- Add MP4 video to `images/hero-bg.mp4`
- Video will autoplay on hero section
- Recommended: 1920x1080px, <5MB

**2. Gallery Photos**
- Add JPG/PNG files to `images/` folder for gallery
- 4 photos recommended for gallery grid
- Recommended: 1200x800px, <300KB each

**3. Streaming Links** (lines 67-88)
Update `href` in `.stream-link` elements:
```html
<!-- Spotify -->
<a href="https://open.spotify.com/artist/YOUR_ARTIST_ID" ...>

<!-- Apple Music -->
<a href="https://music.apple.com/artist/YOUR_ID" ...>

<!-- YouTube Music -->
<a href="https://music.youtube.com/channel/YOUR_CHANNEL_ID" ...>

<!-- SoundCloud -->
<a href="https://soundcloud.com/your-username" ...>
```

**4. Shop Link** (line 58)
- Update Shopify URL:
```html
<a href="https://your-store.myshopify.com" target="_blank" ...>
```

**5. Social Media Links** (lines 145-150)
Update all social platform URLs (Instagram, Spotify, YouTube, TikTok, Twitter)

### C. Optimize Images

**Recommended Specifications:**

| Image | Dimensions | File Size | Format |
|-------|-----------|----------|--------|
| Gallery Photos | 1200x800px | <300KB | JPG |
| Hero Video | 1920x1080px | <5MB | MP4 |

**Tools for optimization:**
- **TinyJPG**: https://tinyjpg.com
- **ImageOptim**: https://imageoptim.com
- **FFmpeg** for video compression

## 🔗 Integration Points (TODO)

### Critical (High Priority)
- [ ] Update all **Streaming Links** (Spotify, Apple Music, YouTube, SoundCloud)
- [ ] Point **Shop Button** to your Shopify store
- [ ] Add real **Social Media URLs**
- [ ] Replace **placeholder images** with band photos

### Important (Medium Priority)
- [ ] **Google Analytics** integration
- [ ] **Contact Form Backend** (Formspree, EmailJS, etc.)
- [ ] **Email Service** for contact form submissions
- [ ] Social media account setup

### Nice-to-Have (Low Priority)
- [ ] Newsletter signup
- [ ] Blog/news section
- [ ] Band member profiles
- [ ] Advanced analytics tracking

## 📊 Performance & SEO

### Currently Optimized For:
- ✅ Meta descriptions and keywords
- ✅ Mobile responsiveness (Mobile-First Design)
- ✅ Fast page load (minimal CSS/JS)
- ✅ Semantic HTML5
- ✅ Font Awesome CDN for icons
- ✅ Clean, focused content hierarchy

### Recommended Future Improvements:
- [ ] Lazy load images
- [ ] WebP image format support
- [ ] Service worker for offline support
- [ ] Structured data (schema.org markup)
- [ ] Open Graph tags for social sharing

## 🐛 Known Issues & Limitations

| Issue | Status | Notes |
|-------|--------|-------|
| Hero video doesn't autoplay on iOS | Known | iOS blocks autoplay; fallback to static image recommended |
| Contact form needs backend | Pending | Currently ready for backend integration (Formspree, EmailJS, etc.) |
| No dark/light theme toggle | Design Decision | Dark theme chosen for band aesthetic |

## 📋 TODO List for Future Development

### Content Updates
- [ ] Replace placeholder images with real band photos (`images/` folder)
- [ ] Add hero video or use band footage
- [ ] Update all streaming platform links
- [ ] Set up Shopify store and update shop URL
- [ ] Create/finalize social media accounts

### Development Tasks
- [ ] Implement contact form backend (Formspree, EmailJS, or custom server)
- [ ] Add Google Analytics tracking
- [ ] Add schema.org structured data
- [ ] Set up sitemap.xml for SEO
- [ ] Configure robots.txt

### Advanced Features
- [ ] Newsletter signup form
- [ ] Music player widget (Spotify embed)
- [ ] Event calendar integration
- [ ] Fan engagement features

### Marketing & Analytics
- [ ] Set up Google Analytics
- [ ] Configure Facebook Pixel
- [ ] Add UTM parameters for social links
- [ ] Monitor conversion funnels

## 🛠️ Development Notes

### Browser Support
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Technologies Used
- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Grid, Flexbox, CSS Variables, Animations, Gradients
- **JavaScript**: Vanilla JS (no frameworks), ~150 lines
- **Icons**: Font Awesome 6.4.0 (CDN)
- **Hosting**: GitHub Pages (free static hosting)

### Code Style Guidelines
- Use kebab-case for CSS classes
- Use camelCase for JavaScript variables
- Use semantic HTML elements
- Keep code comments clear and concise
- Keep JS file minimal (prefer HTML/CSS for styling)

### Common Edits

**Change button colors:**
```css
.btn-primary {
    background-color: var(--secondary-color);
    color: var(--primary-color);
}
```

**Adjust spacing:**
```css
section {
    padding: 5rem 0; /* top/bottom padding */
}
```

**Update fonts:**
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 📱 Responsive Breakpoints

```css
Desktop:  1200px+ (full width layout)
Tablet:   768px - 1199px (adjusted layouts)
Mobile:   < 768px (1-column stack, hamburger menu)
```

## 🎯 Next Steps

1. **Replace placeholder images** with real band photos
2. **Update all external links** (Spotify, Merch, Social Media)
3. **Connect contact form** to email service
4. **Set up analytics** tracking
5. **Test on mobile** devices
6. **Deploy and monitor** performance

## 📞 Support & Maintenance

For future developers:

1. **HTML Structure**: Main sections in `index.html` map to CSS sections
2. **CSS Variables**: All colors defined at top of `styles.css`
3. **JavaScript**: Event handlers in `main.js` for interactivity
4. **Responsive Testing**: Check at 320px, 768px, 1024px widths
5. **Validation**: HTML at https://validator.w3.org/
6. **Performance**: Check Lighthouse score in Chrome DevTools

## 📄 License

&copy; 2026 Thrifted Tease. All rights reserved.

---

**Last Updated:** February 19, 2026
**Version:** 2.1 (Streamlined Design)
**Design Philosophy:** Less clutter, more focus on hero section and core CTAs
