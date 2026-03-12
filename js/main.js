// ========================================
// THRIFTED TEASE - Main JavaScript File
// Simplified band landing page
// ========================================
//
// This file handles interactive features:
// - Mobile menu toggle
// - Smooth scroll navigation
// - Scroll animations (fade-in effects)
// - Analytics event tracking hooks
//
// All code is vanilla JavaScript (no jQuery)
// ========================================

/**
 * ===== MOBILE MENU TOGGLE =====
 * Handles hamburger menu for mobile devices
 * - Click hamburger to open/close menu
 * - Click menu link to close menu
 * - Targets: #hamburger button, #navMenu list
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

/**
 * ===== CLOSE MOBILE MENU WHEN LINK IS CLICKED =====
 * Prevents menu staying open after navigation on mobile
 */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

/**
 * ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
 * Smooth scroll when clicking navigation links (#home, #listen, etc.)
 * Overrides default instant jump behavior
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        const target = document.querySelector(targetSelector);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/**
 * ===== SCROLL ANIMATIONS (Fade-in on scroll) =====
 * Sections fade in as user scrolls to them
 * Uses Intersection Observer API for performance
 * Hero section is excluded so it shows immediately on page load
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in animation to content sections, but leave hero sections visible on load.
document.querySelectorAll('section:not(.hero):not(.media-hero):not(.merch-hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

/**
 * ===== STREAMING PLATFORM LINKS (Analytics hook) =====
 * Track which streaming platform users click
 * TODO: Wire to analytics service (Google Analytics, Mixpanel, etc.)
 * Targets: .stream-link
 */
document.querySelectorAll('.stream-link').forEach(card => {
    card.addEventListener('click', function (e) {
        const platformClasses = ['spotify', 'apple', 'youtube', 'soundcloud'];
        const platform = [...this.classList].find(cls => platformClasses.includes(cls));

        if (!this.href || this.getAttribute('href') === '#') {
            e.preventDefault();
            console.log(`Opening ${platform || 'streaming platform'}...`);
        }

        trackEvent('streaming_platform_click', {
            platform: platform || 'unknown',
            href: this.href || 'no-link'
        });
    });
});

/**
 * ===== PAGE LOAD ANIMATIONS & INITIAL SETUP =====
 * Runs when page fully loads (all images, scripts, etc.)
 * Useful for analytics, feature detection, etc.
 */
window.addEventListener('load', function () {
    console.log(
        '%cThrifted Tease - Official Band Website Loaded! 🎵',
        'color: #d4a574; font-size: 16px; font-weight: bold;'
    );
});

/**
 * ===== NAVBAR SHADOW EFFECT ON SCROLL =====
 * Adds shadow to navbar when user scrolls
 * Improves visual hierarchy as user navigates down
 */
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

/**
 * ===== ANALYTICS EVENT TRACKING (Integration point) =====
 * Hook function for sending events to analytics services
 * TODO: Integrate with Google Analytics, Segment, Mixpanel, etc.
 */
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);

    // Example future integration:
    // if (window.gtag) {
    //     gtag('event', eventName, eventData);
    // }
}

/**
 * ===== TRACK ALL BUTTON CLICKS (For analytics) =====
 * Logs when users click buttons - helpful for conversion tracking
 * Targets: All .btn elements
 */
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        trackEvent('button_click', {
            text: this.textContent.trim(),
            href: this.href || 'no-link',
            class: this.className
        });
    });
});

/**
 * ===== SOCIAL MEDIA TRACKING =====
 * Track when users click to follow on social media
 */
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function () {
        const platform = this.getAttribute('title') || 'unknown';
        trackEvent('social_link_click', { platform: platform });
    });
});

/**
 * ===== FUTURE ENHANCEMENTS (TODO) =====
 * These features are noted for future development:
 * - Newsletter signup form with email validation
 * - Music player widget (Spotify embed or custom)
 * - Real-time tour dates from API/CMS
 * - Blog/News integration
 * - Fan engagement features (voting, polls)
 * - Email campaign integration
 * - Advanced social media integration
 * - Performance optimizations (lazy loading, code splitting)
 * - Progressive Web App (PWA) features
 * - Advanced analytics and heat mapping
 */
