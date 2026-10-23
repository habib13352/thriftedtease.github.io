// ========================================
// THRIFTED TEASE - Main JavaScript File
// Shared by the home, media, shows, and merch pages.
// ========================================
//
// This file handles interactive features:
// - Mobile menu toggle
// - Smooth scroll navigation
// - Scroll animations (fade-in effects)
// - Analytics event tracking hooks
//
// All code is vanilla JavaScript (no jQuery or build step).
// Each page loads this script near the end of <body>, after its HTML exists.
// Features select elements by CSS selector or ID, then register callbacks for
// future events. Pages share this file but do not all contain the same elements,
// so null checks and empty querySelectorAll results keep features optional.
//
// READING GUIDE: menu -> anchors -> section reveals -> streaming click hooks ->
// page load/nav shadow -> console analytics hooks.
// The homepage doorway animation is isolated in door-hero.js.
// Appearance is in css/styles.css; link destinations and content are in HTML.
// trackEvent currently logs to the console; no analytics service is connected.
// ========================================

/**
 * ===== MOBILE MENU TOGGLE =====
 * Handles hamburger menu for mobile devices.
 */
// getElementById finds one exact HTML id; querySelector finds the first CSS
// selector match. Missing elements return null. const prevents reassignment of
// these references, but their DOM elements can still change (classes/styles).
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// && requires both elements before attaching a listener. classList.toggle adds
// or removes a class; CSS uses that state to expand the menu and rotate the bars.
// A normal function callback gets `this` from the clicked button; an arrow
// function would instead keep `this` from its surrounding scope.
if (hamburger && navMenu) {
    hamburger.setAttribute('aria-label', 'Toggle navigation');
    hamburger.setAttribute('aria-controls', 'navMenu');
    hamburger.setAttribute('aria-expanded', String(navMenu.classList.contains('active')));
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        this.setAttribute('aria-expanded', String(navMenu.classList.contains('active')));
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    });
}

/**
 * ===== CLOSE MOBILE MENU WHEN LINK IS CLICKED =====
 * Prevents menu staying open after navigation on mobile.
 */
// querySelectorAll returns a collection, and forEach attaches one handler per
// match. An empty collection is safe on pages without this markup. Closing the
// menu does not cancel navigation: the anchor still follows its normal href.
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

/**
 * ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
 * Smooth scroll when clicking navigation links (#home, #listen, etc.).
 */
// [href^="#"] selects same-page anchors only, not links like index.html#listen.
// getAttribute reads the written fragment rather than the resolved full URL.
// Resolve by ID so a bare # or punctuation cannot throw a selector error.
// Only preventDefault after finding the target so missing targets are not
// deliberately suppressed. scrollIntoView works with CSS scroll-margin-top.
document.querySelectorAll('a[href^="#"]:not(.door-skip)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        const target = document.getElementById(targetSelector.slice(1));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
            block: 'start'
        });
    });
});

/**
 * ===== SCROLL ANIMATIONS (Fade-in on scroll) =====
 * Uses Intersection Observer API for performance.
 */
// IntersectionObserver asks the browser to report visibility changes instead
// of checking every scroll event. threshold 0.1 requests a 10% visibility
// crossing; the negative bottom rootMargin shrinks the detection region by
// 100px, so sections generally reveal slightly after entering the viewport.
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// :not(...) excludes heroes and the media archive so their initial content
// stays visible. Add another exclusion here if a new section must not fade in.
const animatedSections = document.querySelectorAll('section:not(.stream-intro):not(#album-players):not(.youtube-section):not(.door-story):not(.door-album):not(.hero):not(.media-hero):not(.media-archive):not(.merch-hero):not(.shows-hero)');

// This helper receives a DOM element. Assigning .style writes inline CSS,
// which takes precedence over ordinary stylesheet rules for those properties.
function revealSection(section) {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
}

// Feature detection avoids calling an API on browsers that do not support it.
// unobserve stops watching a revealed section; each section animates once.
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSection(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Fail-safe: after 1200ms, reveal everything still hidden, even offscreen.
    // This intentionally limits the time content can remain invisible; the
    // observer is not the only path that reveals sections.
    window.setTimeout(() => {
        animatedSections.forEach(section => {
            if (section.style.opacity === '0') {
                revealSection(section);
                observer.unobserve(section);
            }
        });
    }, 1200);
} else {
    animatedSections.forEach(revealSection);
}

/**
 * ===== STREAMING PLATFORM LINKS (Analytics hook) =====
 * Track which streaming platform users click.
 */
// Spread (...) converts classList into an array so find can pick the first
// recognized platform class. includes checks membership. The fallback label
// keeps logging useful for an unrecognized platform. This does not launch a
// player: real destinations come from the anchors' href attributes.
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
 * Runs when page fully loads.
 */
// load runs after the document and its dependent resources finish loading.
// %c applies the next console argument as CSS to this development message.
window.addEventListener('load', function () {
    console.log(
        '%cThrifted Tease - Official Band Website Loaded!',
        'color: #d4a574; font-size: 16px; font-weight: bold;'
    );

});

/**
 * ===== NAVBAR SHADOW EFFECT ON SCROLL =====
 * Adds shadow to navbar when user scrolls.
 */
// scrollY is the document's vertical scroll offset in CSS pixels. This listener
// changes only the nav shadow at the threshold; its inline value overrides the
// shadow in CSS. The missing-nav guard also permits pages without navigation.
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
 * Hook function for sending events to analytics services.
 */
// Integration point: eventName is a stable label; eventData is an object of
// associated values. Today this ONLY logs to DevTools, with no network request.
// Connect a provider here later instead of duplicating it in click listeners.
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);

    // Example future integration:
    // if (window.gtag) {
    //     gtag('event', eventName, eventData);
    // }
}

/**
 * ===== TRACK ALL BUTTON CLICKS (For analytics) =====
 * Logs when users click buttons.
 */
// Button-style anchors keep their normal behavior. trim removes surrounding
// whitespace from labels; this.href is the browser-resolved URL when present.
// These hooks cover only elements present when this script first runs.
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
 * Track when users click to follow on social media.
 */
// Social labels come from each anchor's title attribute; maintain those titles
// alongside hrefs in HTML. Missing labels log 'unknown' instead of throwing.
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function () {
        const platform = this.getAttribute('title') || 'unknown';
        trackEvent('social_link_click', { platform: platform });
    });
});
