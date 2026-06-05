/**
 * Personal Academic Website — JavaScript
 *
 * Progressive enhancement only: every page is fully usable with JavaScript
 * disabled. This file adds the mobile menu, a small "copy to clipboard"
 * convenience, a profile-image fallback, and print expansion.
 */

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initClipboardCopy();
    initProfileImageFallback();
    initPrintExpand();
});

/* ===============================
   Mobile navigation
   =============================== */

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!navToggle || !navMenu) return;

    function closeMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
    }

    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('nav-open', isOpen);
    });

    // Close the menu after following a link.
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Close when clicking outside the menu.
    document.addEventListener('click', function (event) {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            !navToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // Close on Escape and return focus to the toggle.
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
            navToggle.focus();
        }
    });
}

/* ===============================
   Double-click to copy contact text
   =============================== */

function initClipboardCopy() {
    document.querySelectorAll('.contact-link').forEach(function (link) {
        link.addEventListener('dblclick', function (event) {
            event.preventDefault();
            const text = link.textContent.trim();
            if (navigator.clipboard && text) {
                navigator.clipboard.writeText(text).then(function () {
                    showToast('Copied: ' + text);
                });
            }
        });
    });
}

/* ===============================
   Profile image fallback
   =============================== */

// If a real <img id="profile-img"> is added later and fails to load,
// swap in a simple initials placeholder instead of a broken image.
function initProfileImageFallback() {
    const img = document.getElementById('profile-img');
    if (!img) return;
    img.addEventListener('error', function () {
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-image-placeholder';
        placeholder.setAttribute('aria-hidden', 'true');
        placeholder.textContent = 'EY';
        img.replaceWith(placeholder);
    });
}

/* ===============================
   Print expansion
   =============================== */

function initPrintExpand() {
    window.addEventListener('beforeprint', function () {
        document.querySelectorAll('.paper-abstract').forEach(function (el) {
            el.style.display = 'block';
        });
    });
}

/* ===============================
   Lightweight toast (text only, no innerHTML)
   =============================== */

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () {
        toast.remove();
    }, 2500);
}
