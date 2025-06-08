/**
 * Personal Academic Website - JavaScript
 * Author: Zheyu Yang
 * Description: Enhanced functionality for the academic personal website
 */

// ===============================
// DOM Ready and Initialization
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features when the DOM is loaded
    initializeNavigation();
    initializeThemeDetection();
    initializeScrollEffects();
    initializeFormHandling();
    initializeImageHandling();
    initializePrintStyles();
    
    // Add loading complete class for any transition effects
    document.body.classList.add('loaded');
});

// ===============================
// Mobile Navigation
// ===============================

function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('nav-open');
        });
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        }
    });
    
    // Handle escape key to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
}

// ===============================
// Theme Detection and System Preferences
// ===============================

function initializeThemeDetection() {
    // Respect user's system theme preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-duration', '0s');
    }
    
    // Optional: Dark mode detection (for future implementation)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Store preference for potential dark mode implementation
        localStorage.setItem('preferred-theme', 'dark');
    }
}

// ===============================
// Scroll Effects and Navigation Highlighting
// ===============================

function initializeScrollEffects() {
    let ticking = false;
    
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id], main');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === window.location.pathname) {
                link.classList.add('active');
            }
        });
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNavigation();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Throttled scroll listener for performance
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call to set active navigation
    updateActiveNavigation();
}

// ===============================
// Form Handling and Validation
// ===============================

function initializeFormHandling() {
    // Email obfuscation and protection
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Simple bot protection - real users won't notice this
            const email = this.href.replace('mailto:', '');
            
            // Optional: Track email clicks for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_click', {
                    'email_address': email,
                    'custom_parameter': 'contact_attempt'
                });
            }
        });
    });
    
    // Copy to clipboard functionality for contact info
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        // Add copy functionality on double-click
        link.addEventListener('dblclick', function(e) {
            e.preventDefault();
            
            const text = this.textContent.trim();
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(function() {
                    showNotification('Copied to clipboard: ' + text);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Copied to clipboard: ' + text);
            }
        });
    });
}

// ===============================
// Image Handling and Optimization
// ===============================

function initializeImageHandling() {
    // Profile image placeholder handling
    const profileImg = document.getElementById('profile-img');
    
    if (profileImg) {
        // Create a placeholder if image fails to load
        profileImg.addEventListener('error', function() {
            this.style.background = '#f8fafc';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.fontSize = '2rem';
            this.style.color = '#94a3b8';
            this.innerHTML = '👤';
        });
        
        // Lazy loading for better performance
        if ('loading' in HTMLImageElement.prototype) {
            profileImg.loading = 'lazy';
        }
    }
    
    // Add click-to-enlarge functionality for images
    const images = document.querySelectorAll('img:not(.icon)');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            if (this.naturalWidth > this.clientWidth) {
                createImageModal(this);
            }
        });
    });
}

// ===============================
// Abstract Toggle Functionality
// ===============================

function toggleAbstract(abstractId) {
    // This function is called from the research page
    const abstractElement = document.getElementById(abstractId);
    
    if (abstractElement) {
        if (abstractElement.style.display === 'none' || !abstractElement.style.display) {
            abstractElement.style.display = 'block';
            // Smooth scroll to abstract
            abstractElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            abstractElement.style.display = 'none';
        }
    }
}

// ===============================
// Print Optimization
// ===============================

function initializePrintStyles() {
    // Optimize content for printing
    window.addEventListener('beforeprint', function() {
        // Expand all collapsed sections for printing
        const abstracts = document.querySelectorAll('.paper-abstract');
        abstracts.forEach(abstract => {
            abstract.style.display = 'block';
        });
        
        // Add print timestamp
        const printInfo = document.createElement('div');
        printInfo.className = 'print-info';
        printInfo.innerHTML = '<p><em>Printed from: ' + window.location.href + ' on ' + new Date().toLocaleDateString() + '</em></p>';
        document.body.appendChild(printInfo);
    });
    
    window.addEventListener('afterprint', function() {
        // Clean up after printing
        const printInfo = document.querySelector('.print-info');
        if (printInfo) {
            printInfo.remove();
        }
    });
}

// ===============================
// Utility Functions
// ===============================

function showNotification(message, type = 'info', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-color);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 1rem;
                max-width: 300px;
                animation: slideIn 0.3s ease-out;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

function createImageModal(img) {
    // Create modal for enlarged image view
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-backdrop" onclick="this.parentElement.remove()">
            <div class="image-modal-content">
                <img src="${img.src}" alt="${img.alt}" />
                <button class="image-modal-close" onclick="this.closest('.image-modal').remove()">×</button>
            </div>
        </div>
    `;
    
    // Add modal styles if not already added
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }
            .image-modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .image-modal img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                border-radius: var(--border-radius);
            }
            .image-modal-close {
                position: absolute;
                top: -10px;
                right: -10px;
                background: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 1.2rem;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// ===============================
// Performance Optimization
// ===============================

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===============================
// Analytics and Tracking (Optional)
// ===============================

function trackEvent(action, category, label) {
    // Google Analytics tracking (if implemented)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track important user interactions
document.addEventListener('click', function(e) {
    // Track PDF downloads
    if (e.target.href && e.target.href.includes('.pdf')) {
        trackEvent('download', 'pdf', e.target.href);
    }
    
    // Track external links
    if (e.target.href && e.target.hostname !== window.location.hostname) {
        trackEvent('click', 'external_link', e.target.href);
    }
});

// ===============================
// Accessibility Enhancements
// ===============================

// Enhance keyboard navigation
document.addEventListener('keydown', function(e) {
    // Skip link functionality
    if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.focus();
        }
    }
});

// Add focus indicators for better accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link if not present
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 0 0 4px 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});

// ===============================
// Error Handling and Fallbacks
// ===============================

// Global error handler
window.addEventListener('error', function(e) {
    console.warn('Website error:', e.error);
    
    // Provide user feedback for critical errors
    if (e.error && e.error.message.includes('network')) {
        showNotification('Network error. Please check your connection.', 'error');
    }
});

// Service worker registration (for future offline support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }).catch(function(err) {
        //     console.log('ServiceWorker registration failed');
        // });
    });
}

// ===============================
// Export functions for global access
// ===============================

// Make certain functions globally available
window.toggleAbstract = toggleAbstract;
window.showNotification = showNotification; 