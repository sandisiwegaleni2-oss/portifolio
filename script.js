/* ============================================
   script.js — Sandisiwe Galeni Portfolio
   ============================================ */

(function() {
    'use strict';

    // ========== SMOOTH SCROLLING FOR NAV LINKS ==========
    document.querySelectorAll('.nav-links a, .hero-details a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ========== DYNAMIC FOOTER YEAR ==========
    const footerParagraph = document.querySelector('.footer p');
    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        footerParagraph.innerHTML = footerParagraph.innerHTML.replace('2025', currentYear);
    }

    // ========== PROFILE IMAGE HANDLING ==========
    // If you add an image, this ensures it displays correctly.
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // If image fails to load, fall back to initials
            const parent = this.parentElement;
            if (parent) {
                parent.innerHTML = '<span class="avatar-initials">SG</span>';
                console.warn('Profile image not found — using initials.');
            }
        });
    }

    // ========== CONSOLE GREETING ==========
    console.log('%c👋 Sandisiwe Galeni — Portfolio loaded', 'color: #8f2b76; font-size: 16px; font-weight: bold;');

})();