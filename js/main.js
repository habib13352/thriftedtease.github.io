// ========================================
// THRIFTED TEASE - Main JavaScript File
// Simplified band landing page
// ========================================
//
// This file handles interactive features:
// - Mobile menu toggle
// - Smooth scroll navigation
// - Scroll animations (fade-in effects)
// - Desktop-only hero video enhancement
// - Analytics event tracking hooks
//
// All code is vanilla JavaScript (no jQuery)
// ========================================

/**
 * ===== MOBILE MENU TOGGLE =====
 * Handles hamburger menu for mobile devices.
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const hero = document.querySelector('.hero');
const heroVideo = document.getElementById('heroVideo');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

/**
 * ===== CLOSE MOBILE MENU WHEN LINK IS CLICKED =====
 * Prevents menu staying open after navigation on mobile.
 */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

/**
 * ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
 * Smooth scroll when clicking navigation links (#home, #listen, etc.).
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
 * Uses Intersection Observer API for performance.
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animatedSections = document.querySelectorAll('section:not(.hero):not(.media-hero):not(.media-archive):not(.merch-hero):not(.shows-hero)');

function revealSection(section) {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
}

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
window.addEventListener('load', function () {
    console.log(
        '%cThrifted Tease - Official Band Website Loaded!',
        'color: #d4a574; font-size: 16px; font-weight: bold;'
    );

    initializeDesktopHeroVideo();
});

/**
 * ===== NAVBAR SHADOW EFFECT ON SCROLL =====
 * Adds shadow to navbar when user scrolls.
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
 * ===== DESKTOP HERO VIDEO =====
 * Loads the video only after first paint on desktop-capable devices.
 */
function initializeDesktopHeroVideo() {
    if (!hero || !heroVideo) return;
    if (!shouldLoadDesktopHeroVideo()) {
        console.log('[hero-video] Skipped desktop hero video enhancement.');
        return;
    }

    const setupVideo = () => {
        const videoSource = heroVideo.dataset.src;
        if (!videoSource || heroVideo.dataset.loaded === 'true') return;

        console.log(`[hero-video] Loading deferred video: ${videoSource}`);
        heroVideo.dataset.loaded = 'true';
        heroVideo.src = videoSource;

        const onCanPlay = () => {
            console.log('[hero-video] Video ready and visible.');
            hero.classList.add('hero--video-ready');
            hero.classList.remove('hero--video-failed');
        };

        const onError = () => {
            console.log('[hero-video] Video failed to load or autoplay. Keeping static hero.');
            hero.classList.remove('hero--video-ready');
            hero.classList.add('hero--video-failed');
        };

        heroVideo.addEventListener('canplay', onCanPlay, { once: true });
        heroVideo.addEventListener('error', onError, { once: true });

        heroVideo.load();
        heroVideo.play().catch(() => {
            onError();
        });
    };

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(setupVideo, { timeout: 2000 });
        return;
    }

    window.setTimeout(setupVideo, 250);
}

function shouldLoadDesktopHeroVideo() {
    if (!heroVideo || !heroVideo.dataset.src) {
        console.log('[hero-video] Missing video element or source path.');
        return false;
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        console.log('[hero-video] Skipping because viewport is mobile/tablet width.');
        return false;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        console.log('[hero-video] Skipping because prefers-reduced-motion is enabled.');
        return false;
    }

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
        if (connection.saveData) {
            console.log('[hero-video] Skipping because save-data is enabled.');
            return false;
        }

        const constrainedTypes = ['slow-2g', '2g', '3g'];
        if (connection.effectiveType && constrainedTypes.includes(connection.effectiveType)) {
            console.log(`[hero-video] Skipping because network is constrained: ${connection.effectiveType}.`);
            return false;
        }
    }

    console.log('[hero-video] Desktop enhancement allowed.');
    return true;
}

/**
 * ===== ANALYTICS EVENT TRACKING (Integration point) =====
 * Hook function for sending events to analytics services.
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
 * Logs when users click buttons.
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
 * Track when users click to follow on social media.
 */
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function () {
        const platform = this.getAttribute('title') || 'unknown';
        trackEvent('social_link_click', { platform: platform });
    });
});
