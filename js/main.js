// ========================================
// THRIFTED TEASE - Main JavaScript
// Professional Band Website
// ========================================

/**
 * Mobile Menu Toggle
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

/**
 * Smooth Scrolling for Navigation Links
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
 * Tab Switching for Photos/Videos
 */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

/**
 * Contact Form Handler
 */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        // Show success message (replace with actual backend integration)
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });
}

/**
 * Scroll Animations - Fade in elements on scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

/**
 * CTA Button Handlers
 */
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-accent').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/**
 * Streaming Platform Links Handler
 */
document.querySelectorAll('.streaming-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!this.href || this.href === '#') {
            e.preventDefault();
            const platform = this.classList[1];
            console.log(`Opening ${platform}...`);
            // Replace with actual streaming links:
            // Spotify: https://open.spotify.com/artist/ARTIST_ID
            // Apple Music: https://music.apple.com/artist/ARTIST_ID
            // YouTube Music: https://music.youtube.com/channel/CHANNEL_ID
            // SoundCloud: https://soundcloud.com/thriftedtease
        }
    });
});

/**
 * Gallery Image Lightbox Enhancement
 */
document.querySelectorAll('.gallery-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('href');
        console.log('Image clicked:', imgSrc);
        // TODO: Implement modal/lightbox functionality
    });
});

/**
 * Page Load Animations
 */
window.addEventListener('load', function() {
    console.log('%cThrifted Tease - Official Band Website Loaded! 🎵', 'color: #d4a574; font-size: 16px; font-weight: bold;');
    
    // Add subtle animation to hero scroll indicator
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

/**
 * Navbar Sticky Enhancement - Add shadow on scroll
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

/**
 * Analytics & Event Tracking (Optional - replace with your analytics service)
 */
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // TODO: Integrate with Google Analytics, Segment, Mixpanel, etc.
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('button_click', {
            text: this.textContent,
            href: this.href || 'no-link'
        });
    });
});

/**
 * TODO: Future Enhancements
 * - Newsletter signup form
 * - Music player widget
 * - Real-time tour dates from API
 * - Blog/News integration
 * - Fan engagement features
 * - Email campaigns
 * - Social media integration
 * - Performance optimization
 */'
