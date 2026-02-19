// ========================================
// THRIFTED TEASE - Main JavaScript
// ========================================

/**
 * Smooth scrolling for navigation links
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
 * CTA Button - Stream Now
 */
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Coming soon! Streaming links will be added here.');
    // TODO: Add actual streaming links (Spotify, Apple Music, etc.)
});

/**
 * Gallery Image Click Handler
 */
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function() {
        console.log('Image clicked:', this.alt);
        // TODO: Add modal or lightbox functionality for gallery
    });
});

/**
 * Page Load Animation
 */
window.addEventListener('load', function() {
    console.log('Thrifted Tease Landing Page Loaded!');
    
    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease forwards`;
        section.style.animationDelay = `${index * 0.1}s`;
    });
});

/**
 * TODO: Add more features
 * - Newsletter signup form
 * - Music player for streaming
 * - Tour dates/events calendar
 * - Band member profiles
 * - Photo galleries with lightbox
 * - Contact form with validation
 */

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
