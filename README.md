# Thrifted Tease - Professional Band Landing Page

**The Official Website for Thrifted Tease** - A professional, modern landing page designed to showcase the band's music, build fan engagement, and convert visitors into customers and booking opportunities.

## 🎵 Project Overview

This is a fully responsive, production-ready band website built with modern web standards. The site serves three primary audiences:

1. **Fans & Listeners** - Discover music, photos, videos, and merchandise
2. **Venues & Promoters** - Professional bookings and tour information
3. **Social Media & Streaming** - Multiple platforms for content distribution

## 🌟 Current Features (Implemented)

### Navigation & UX
- ✅ Sticky navigation with backdrop blur effect
- ✅ Responsive hamburger menu for mobile devices
- ✅ Smooth scroll navigation with anchor links
- ✅ Prominent merch link in main navigation
- ✅ Professional hover animations throughout

### Hero Section
- ✅ Full-screen hero with video background support
- ✅ Multiple call-to-action buttons (Stream, Media, Merch)
- ✅ Animated scroll indicator
- ✅ Gradient overlay for text readability
- ✅ Responsive typography

### Content Sections
- ✅ **About** - Band overview with highlights (icons, descriptions)
- ✅ **Listen Now** - Streaming platform cards (Spotify, Apple Music, YouTube, SoundCloud)
- ✅ **Latest Releases** - Album/EP grid with listen links
- ✅ **Photos & Videos** - Tabbed media gallery with hover effects
- ✅ **Tour Dates** - Upcoming shows with ticket purchase links
- ✅ **Merch** - Product grid with Shopify store integration
- ✅ **Booking** - Professional section for venues/promoters
- ✅ **Contact** - Contact form + social media links

### Technical Features
- ✅ Mobile-first responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Tab switching for photos/videos
- ✅ Form handling with validation ready
- ✅ Scroll-triggered animations
- ✅ Event tracking hooks for analytics
- ✅ SEO metadata (meta tags, keywords)
- ✅ Font Awesome icons integration
- ✅ Professional dark theme with gold/cream accents

## 📁 Project Structure

```
thriftedtease.github.io/
├── index.html              # Main landing page (390 lines)
├── css/
│   └── styles.css          # Professional stylesheet (1259 lines)
│                            # - Responsive grid layouts
│                            # - CSS variables for theming
│                            # - Mobile-first design
│                            # - Animations & transitions
├── js/
│   └── main.js             # JavaScript functionality (203 lines)
│                            # - Mobile menu toggle
│                            # - Smooth scrolling
│                            # - Tab switching
│                            # - Form handling
│                            # - Analytics hooks
├── images/                 # Band photos & media
│   ├── photo1-placeholder.jpg
│   ├── photo2-placeholder.jpg
│   ├── photo3-placeholder.jpg
│   ├── photo4-placeholder.jpg
│   ├── album1-placeholder.jpg
│   ├── album2-placeholder.jpg
│   ├── album3-placeholder.jpg
│   ├── merch-tshirt.jpg
│   ├── merch-hoodie.jpg
│   ├── merch-vinyl.jpg
│   ├── merch-cap.jpg
│   └── hero-bg.mp4        # Hero section video
├── assets/                 # Additional resources (fonts, icons, etc.)
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
Edit CSS variables in `css/styles.css` (lines 10-24):

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

1. **Hero Section** (lines 57-70)
   - Update band name, tagline, subtitle
   - Replace button text and links if needed

2. **About Section** (lines 72-95)
   - Update band description
   - Customize highlight cards (icons, titles, descriptions)

3. **Contact Information** (lines 283-310)
   - Update email addresses
   - Add social media URLs

### B. Add Content

**1. Photos**
- Add JPG/PNG files to `images/` folder
- Update `src` paths in HTML (sections: Media, Gallery, Merch preview)

**2. Video Background**
- Add MP4 video to `images/hero-bg.mp4`
- Video will autoplay on hero section

**3. Streaming Links** (lines 121-139)
- Update `href` in `.streaming-card` elements:
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

**4. Merch Store** (line 240)
- Update Shopify URL:
  ```html
  <a href="https://your-store.myshopify.com" target="_blank" ...>
  ```

**5. Tour Dates** (lines 197-228)
- Add venue names, dates, cities
- Update ticket links to ticketing service (Eventbrite, Ticketmaster, etc.)

**6. Social Media Links** (Footer, lines 313-324)
- Update all social platform URLs

### C. Optimize Images

**Recommended Specifications:**

| Image | Dimensions | File Size | Format |
|-------|-----------|----------|--------|
| Gallery Photos | 1200x800px | <300KB | JPG |
| Album Covers | 500x500px | <200KB | JPG |
| Merch Photos | 600x600px | <250KB | JPG |
| Hero Video | 1920x1080px | <5MB | MP4 |

**Tools for optimization:**
- **TinyJPG**: https://tinyjpg.com
- **ImageOptim**: https://imageoptim.com
- **FFmpeg** for video compression

## 🔗 Integration Points (TODO)

These are external services that need to be connected:

### Critical (High Priority)
- [ ] **Spotify Artist Profile** - Link to artist page
- [ ] **Apple Music Artist ID** - Link to Apple Music
- [ ] **YouTube Channel** - Link to music videos
- [ ] **Shopify Store** - Merch platform setup
- [ ] **Contact Email** - Email service for form submissions

### Important (Medium Priority)
- [ ] **Analytics** - Google Analytics or Segment integration
- [ ] **Social Media** - Instagram, TikTok, Twitter accounts
- [ ] **Ticketing** - Eventbrite or Ticketmaster for tour dates
- [ ] **Newsletter** - Mailchimp or ConvertKit signup

### Nice-to-Have (Low Priority)
- [ ] **Blog/News** - Content management system
- [ ] **Band Bio** - Detailed member profiles
- [ ] **Video Hosting** - YouTube embeds
- [ ] **Mailing List** - Newsletter automation

## 📊 Performance & SEO

### Currently Optimized For:
- ✅ Meta descriptions and keywords
- ✅ Mobile responsiveness (Mobile-First Design)
- ✅ Fast navigation with smooth scrolling
- ✅ Semantic HTML5
- ✅ Font Awesome CDN for icons
- ✅ Lazy loading ready for images
- ✅ Event tracking hooks for analytics

### Recommended Future Improvements:
- [ ] Lazy load images with native browser support
- [ ] WebP image format support
- [ ] Critical CSS inlining
- [ ] Service worker for offline support
- [ ] Structured data (schema.org markup)
- [ ] Open Graph tags for social sharing

## 🐛 Known Issues & Limitations

| Issue | Status | Notes |
|-------|--------|-------|
| Hero video doesn't autoplay on iOS | Known | iOS blocks autoplay; fallback to static image recommended |
| Contact form needs backend | Pending | Currently shows alert; wire to email service (Formspree, EmailJS, etc.) |
| Gallery lightbox not implemented | Pending | Currently opens in new tab; modal plugin recommended |
| Tour dates are static | Pending | Can integrate with Google Calendar or Ticketmaster API |
| No dark/light theme toggle | Design Decision | Dark theme chosen for band aesthetic |

## 📋 TODO List for Future Development

### Content Updates
- [ ] Add real band photos (replace placeholders in `images/`)
- [ ] Prepare hero video or use band footage
- [ ] Write band bio and about section content
- [ ] Finalize tour dates and venue information
- [ ] Upload merch product images
- [ ] Set up social media accounts

### Development Tasks
- [ ] Implement contact form backend (Formspree, EmailJS, or custom server)
- [ ] Add image lazy loading
- [ ] Add gallery lightbox modal plugin
- [ ] Implement Google Analytics tracking
- [ ] Add schema.org structured data
- [ ] Create 404 error page
- [ ] Add sitemap.xml for SEO
- [ ] Configure robots.txt

### Advanced Features
- [ ] Newsletter signup form with email validation
- [ ] Music player widget (Spotify embed or custom)
- [ ] Blog section for news/updates
- [ ] Band member profiles page
- [ ] Video gallery with YouTube embeds
- [ ] Event calendar integration
- [ ] Merchandise inventory sync
- [ ] Real-time tour date API integration
- [ ] Fan engagement features (voting, polls, etc.)

### Marketing & Analytics
- [ ] Set up Google Analytics
- [ ] Configure Facebook Pixel
- [ ] Add UTM parameters for social links
- [ ] Create email signup capture
- [ ] Set up retargeting campaigns
- [ ] Monitor conversion funnels

### Operations
- [ ] Set up GitHub Actions for deployment
- [ ] Implement CI/CD pipeline
- [ ] Set up monitoring/alerts
- [ ] Create deployment documentation
- [ ] Plan hosting strategy (scale beyond GitHub Pages if needed)

## 🛠️ Development Notes

### Browser Support
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Technologies Used
- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Grid, Flexbox, CSS Variables, Animations, Gradients
- **JavaScript**: Vanilla JS (no frameworks), ~200 lines
- **Icons**: Font Awesome 6.4.0 (CDN)
- **Hosting**: GitHub Pages (free static hosting)

### Code Style Guidelines
- Use kebab-case for CSS classes
- Use camelCase for JavaScript variables
- Use semantic HTML elements
- Add comments for complex sections
- Keep JS file under 250 lines (prefer HTML/CSS for styling)

### Common Edits

**Change button colors:**
```css
.btn-primary {
    background: linear-gradient(135deg, var(--secondary-color) 0%, #c49563 100%);
}
```

**Adjust spacing:**
```css
section {
    padding: 5rem 2rem; /* top/bottom, left/right */
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
Tablet:   768px - 1199px (2-column layouts)
Mobile:   < 768px (1-column stack, hamburger menu)
```

## 🎯 Next Steps

1. **Replace placeholder images** with real band photos
2. **Update all external links** (Spotify, Merch, Social Media, Ticketing)
3. **Connect contact form** to email service
4. **Set up analytics** tracking
5. **Customize content** (band bio, tour dates, etc.)
6. **Test on mobile** devices
7. **Deploy to GitHub Pages** and monitor performance

## 📞 Support & Maintenance

For future developers or when updating this site:

1. **Check `main.js`** for analytics hooks and event tracking
2. **Reference CSS variables** in `styles.css` for consistent theming
3. **Test responsive design** at 320px, 768px, 1024px widths
4. **Validate HTML** at https://validator.w3.org/
5. **Check Lighthouse score** in Chrome DevTools
6. **Monitor broken links** regularly

## 📄 License

&copy; 2026 Thrifted Tease. All rights reserved.

---

**Last Updated:** February 19, 2026
**Version:** 2.0 (Professional Redesign)
**Maintained by:** [Your Name/Team]
