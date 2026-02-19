// ========================================
// THRIFTED TEASE - Main JavaScript File
// Simplified band landing page
// ========================================
// 
// This file handles interactive features:
// - Mobile menu toggle
// - Smooth scroll navigation  
// - Scroll animations (fade-in effects)
// - Button hover effects
// - Analytics event tracking hooks
//
// All code is vanilla JavaScript (no jQuery)
// Total: ~150 lines of focused, modular code
//
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

if (hamburger) {
    hamburger.addEventListener('click', function() {
        // Toggle .active class on both button and menu
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Close menu when any nav link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

/**
 * ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
 * Smooth scroll when clicking navigation links (#home, #listen, etc.)
 * Overrides default instant jump behavior
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * ===== SCROLL ANIMATIONS (Fade-in on scroll) =====
 * Sections fade in as user scrolls to them
 * Uses Intersection Observer API for performance
 * Animate all section elements as they come into view
 */
const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -100px 0px' // Offset: trigger 100px before bottom
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in view - make it visible
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop watching this element
        }
    });
}, observerOptions);

// Apply fade-in animation to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0'; // Start hidden
    section.style.transform = 'translateY(20px)'; // Start below
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section); // Start watching
});

/**
 * ===== BUTTON HOVER ANIMATIONS =====
 * Lift buttons up on hover for tactile feedback
 * Applied to all buttons (.btn-primary, .btn-secondary, .btn-accent)
 */
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-accent').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)'; // Lift up
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)'; // Return to normal
    });
});

/**
 * ===== STREAMING PLATFORM LINKS (Analytics hook) =====
 * Track which streaming platform users click
 * TODO: Wire to analytics service (Google Analytics, Mixpanel, etc.)
 * Targets: .stream-link
 */
document.querySelectorAll('.stream-link').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!this.href || this.href === '#') {
            e.preventDefault(); // Prevent navigation
            const platform = this.classList[1]; // Get platform name (spotify, apple, youtube, soundcloud)
            console.log(`Opening ${platform}...`);
            // TODO: Send analytics event to tracking service
            // Example: trackEvent('streaming_platform_click', { platform: platform })
        }
    });
});

/**
 * ===== PAGE LOAD ANIMATIONS & INITIAL SETUP =====
 * Runs when page fully loads (all images, scripts, etc.)
 * Useful for analytics, feature detection, etc.
 */
window.addEventListener('load', function() {
    // Styled console message for debugging
    console.log('%cThrifted Tease - Official Band Website Loaded! 🎵', 'color: #d4a574; font-size: 16px; font-weight: bold;');
});

/**
 * ===== NAVBAR SHADOW EFFECT ON SCROLL =====
 * Adds shadow to navbar when user scrolls (shows it has depth)
 * Improves visual hierarchy as user navigates down
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        // User scrolled down - add stronger shadow
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        // User at top - use lighter shadow
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

/**
 * ===== ANALYTICS EVENT TRACKING (Integration point) =====
 * Hook function for sending events to analytics services
 * TODO: Integrate with Google Analytics, Segment, Mixpanel, etc.
 * Example services:
 * - Google Analytics: gtag('event', eventName, eventData)
 * - Segment: analytics.track(eventName, eventData)
 * - Mixpanel: mixpanel.track(eventName, eventData)
 */
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // TODO: Send to your analytics service:
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
    btn.addEventListener('click', function() {
        trackEvent('button_click', {
            text: this.textContent,
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
    link.addEventListener('click', function() {
        const platform = this.getAttribute('title');
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
 */'
