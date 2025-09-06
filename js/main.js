// Switch Waste Management Solutions - Optimized JavaScript
// Version: 2.1.0 - Performance, Core Web Vitals & Accessibility Optimized

// Accessibility and Performance monitoring initialization
(function() {
    'use strict';
    
    // Accessibility state management
    let isKeyboardUser = false;
    let announcements = [];
    
    // Critical performance metrics tracking
    const perfObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            switch(entry.entryType) {
                case 'largest-contentful-paint':
                    console.log('LCP:', Math.round(entry.startTime), 'ms');
                    break;
                case 'first-input':
                    console.log('FID:', Math.round(entry.processingStart - entry.startTime), 'ms');
                    break;
                case 'layout-shift':
                    if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                    }
                    break;
            }
        });
    });

    // Observe Core Web Vitals
    if ('PerformanceObserver' in window) {
        try {
            perfObserver.observe({entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']});
        } catch (e) {
            console.warn('Performance observation not supported:', e);
        }
    }

    // Optimized DOM ready with performance timing
    const startTime = performance.now();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        // DOM already loaded
        initializeApp();
    }

    function initializeApp() {
        const initTime = performance.now();
        console.log('DOM Ready Time:', Math.round(initTime - startTime), 'ms');
        
        // Initialize accessibility features first
        initAccessibilityFeatures();
        
        // Initialize components with performance monitoring
        requestIdleCallback(() => {
            initMobileMenu();
            initScrollAnimations();
            initFormHandling();
            initSmoothScrolling();
            setActiveNavigation();
            initPerformanceOptimizations();
        }, { timeout: 2000 });

        // Initialize critical components immediately
        initStatsAnimation();
        initIntersectionObserver();
    }

    // =====================================================
    // ACCESSIBILITY FEATURES - WCAG 2.1 AA COMPLIANCE
    // =====================================================

    function initAccessibilityFeatures() {
        setupKeyboardNavigation();
        setupAriaLiveRegions();
        setupSkipNavigation();
        setupFocusManagement();
        setupAccessibleNotifications();
        setupReducedMotion();
        monitorKeyboardUsage();
    }

    function setupKeyboardNavigation() {
        // Detect keyboard usage
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                isKeyboardUser = true;
                document.body.classList.add('keyboard-user');
            }
        });

        // Remove keyboard class on mouse use
        document.addEventListener('mousedown', () => {
            isKeyboardUser = false;
            document.body.classList.remove('keyboard-user');
        });

        // Enhanced keyboard navigation for mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const nav = document.querySelector('.nav ul');

        if (mobileMenuBtn && nav) {
            mobileMenuBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    mobileMenuBtn.click();
                }
            });

            // Trap focus in mobile menu when open
            nav.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.focus();
                    announceToScreenReader('Menu closed');
                }
            });
        }
    }

    function setupAriaLiveRegions() {
        // Create polite announcement region
        const politeRegion = document.createElement('div');
        politeRegion.setAttribute('aria-live', 'polite');
        politeRegion.setAttribute('aria-atomic', 'true');
        politeRegion.className = 'sr-only';
        politeRegion.id = 'polite-announcements';
        document.body.appendChild(politeRegion);

        // Create assertive announcement region
        const assertiveRegion = document.createElement('div');
        assertiveRegion.setAttribute('aria-live', 'assertive');
        assertiveRegion.setAttribute('aria-atomic', 'true');
        assertiveRegion.className = 'sr-only';
        assertiveRegion.id = 'assertive-announcements';
        document.body.appendChild(assertiveRegion);

        window.announceToScreenReader = announceToScreenReader;
        window.announceUrgent = announceUrgent;
    }

    function announceToScreenReader(message, urgent = false) {
        const regionId = urgent ? 'assertive-announcements' : 'polite-announcements';
        const region = document.getElementById(regionId);
        
        if (region) {
            region.textContent = message;
            
            // Clear message after announcement
            setTimeout(() => {
                region.textContent = '';
            }, 1000);
        }
        
        announcements.push({
            message,
            timestamp: Date.now(),
            urgent
        });
    }

    function announceUrgent(message) {
        announceToScreenReader(message, true);
    }

    function setupSkipNavigation() {
        // Add skip navigation link
        const skipNav = document.createElement('a');
        skipNav.href = '#main-content';
        skipNav.className = 'skip-nav';
        skipNav.textContent = 'Skip to main content';
        skipNav.setAttribute('aria-label', 'Skip navigation and go to main content');
        
        // Insert at beginning of body
        document.body.insertBefore(skipNav, document.body.firstChild);

        // Handle skip navigation
        skipNav.addEventListener('click', (e) => {
            e.preventDefault();
            const mainContent = document.getElementById('main-content') || document.querySelector('main') || document.querySelector('.hero');
            
            if (mainContent) {
                mainContent.scrollIntoView({ behavior: 'smooth' });
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
                announceToScreenReader('Skipped to main content');
                
                // Remove tabindex after focus
                setTimeout(() => {
                    mainContent.removeAttribute('tabindex');
                }, 1000);
            }
        });
    }

    function setupFocusManagement() {
        let lastFocusedElement = null;

        // Store last focused element before modal/menu opens
        document.addEventListener('focusin', (e) => {
            if (!e.target.closest('.modal, .nav')) {
                lastFocusedElement = e.target;
            }
        });

        // Enhanced focus management for forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            setupFormAccessibility(form);
        });
    }

    function setupFormAccessibility(form) {
        // Add ARIA labels and descriptions
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            const label = form.querySelector(`label[for="${input.id}"]`) ||
                         input.closest('.form-group')?.querySelector('label');
            
            if (label && !input.getAttribute('aria-labelledby')) {
                if (!label.id) {
                    label.id = `label-${Math.random().toString(36).substr(2, 9)}`;
                }
                input.setAttribute('aria-labelledby', label.id);
            }

            // Add required announcement
            if (input.hasAttribute('required')) {
                input.setAttribute('aria-required', 'true');
                const label = form.querySelector(`label[for="${input.id}"]`);
                if (label && !label.textContent.includes('*')) {
                    label.innerHTML += ' <span aria-label="required">*</span>';
                }
            }

            // Real-time validation feedback
            input.addEventListener('blur', () => {
                validateFieldAccessibly(input);
            });

            input.addEventListener('input', () => {
                clearFieldErrors(input);
            });
        });
    }

    function validateFieldAccessibly(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }

        // Phone validation
        if (field.type === 'tel' && field.value && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }

        updateFieldAccessibility(field, isValid, errorMessage);
    }

    function updateFieldAccessibility(field, isValid, errorMessage) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        // Get or create error message element
        let errorElement = formGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.id = `error-${field.id || Math.random().toString(36).substr(2, 9)}`;
            formGroup.appendChild(errorElement);
        }

        if (isValid) {
            formGroup.classList.remove('error');
            formGroup.classList.add('success');
            errorElement.textContent = '';
            errorElement.classList.remove('show');
            field.removeAttribute('aria-describedby');
            field.removeAttribute('aria-invalid');
        } else {
            formGroup.classList.remove('success');
            formGroup.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
            field.setAttribute('aria-describedby', errorElement.id);
            field.setAttribute('aria-invalid', 'true');
            
            // Announce error to screen reader
            announceToScreenReader(`Error: ${errorMessage}`);
        }
    }

    function clearFieldErrors(field) {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('error');
            field.removeAttribute('aria-invalid');
            
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        }
    }

    function setupAccessibleNotifications() {
        // Override the existing showNotification function for accessibility
        const originalShowNotification = window.showNotification;
        
        window.showNotification = function(message, type = 'info') {
            // Call original function
            if (originalShowNotification) {
                originalShowNotification(message, type);
            }
            
            // Announce to screen reader
            const urgentTypes = ['error', 'warning'];
            announceToScreenReader(message, urgentTypes.includes(type));
            
            // Focus management for notifications
            const notification = document.querySelector('.notification:last-child');
            if (notification) {
                notification.setAttribute('role', type === 'error' ? 'alert' : 'status');
                notification.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');
                
                // Auto-focus close button for keyboard users
                if (isKeyboardUser) {
                    const closeButton = notification.querySelector('.notification-close');
                    if (closeButton) {
                        setTimeout(() => closeButton.focus(), 100);
                    }
                }
            }
        };
    }

    function setupReducedMotion() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        function handleReducedMotion(mediaQuery) {
            if (mediaQuery.matches) {
                document.body.classList.add('reduced-motion');
                announceToScreenReader('Animations reduced for better accessibility');
            } else {
                document.body.classList.remove('reduced-motion');
            }
        }

        // Initial check
        handleReducedMotion(prefersReducedMotion);
        
        // Listen for changes
        prefersReducedMotion.addListener(handleReducedMotion);
    }

    function monitorKeyboardUsage() {
        let keyboardEvents = 0;
        let mouseEvents = 0;

        document.addEventListener('keydown', () => {
            keyboardEvents++;
        });

        document.addEventListener('mousedown', () => {
            mouseEvents++;
        });

        // Log accessibility usage patterns (for debugging)
        setInterval(() => {
            if (window.SwitchWaste?.debug) {
                console.log('Accessibility Stats:', {
                    keyboardEvents,
                    mouseEvents,
                    primaryInput: keyboardEvents > mouseEvents ? 'keyboard' : 'mouse',
                    announcements: announcements.length
                });
            }
        }, 30000); // Every 30 seconds
    }

})();

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav ul');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');

            // Toggle hamburger icon
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on nav links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header') && nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === href) {
            link.classList.add('active');
        }
    });
}

// Animate statistics numbers
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-target'));

                animateNumber(target, finalValue);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Optimized Intersection Observer for scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .service-preview-card, .service-section, .cta-content, .commitment-card, .area-card'
    );

    if (!animatedElements.length) return;

    const observerOptions = {
        threshold: [0.1, 0.25],
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Use requestAnimationFrame for smooth animations
                requestAnimationFrame(() => {
                    entry.target.classList.add('fade-in-up');
                    entry.target.style.willChange = 'auto'; // Release GPU resources
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Batch DOM operations
    animatedElements.forEach((element, index) => {
        // Stagger animation setup for better performance
        setTimeout(() => {
            element.style.willChange = 'transform, opacity';
            observer.observe(element);
        }, index * 10);
    });
}

// Enhanced Intersection Observer for general use
function initIntersectionObserver() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window && lazyImages.length) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Performance-optimized image loading
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    img.classList.add('img-lazy', 'loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Form handling
function initFormHandling() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Performance tracking
    const submitStartTime = performance.now();

    // Show loading state with animation
    submitButton.disabled = true;
    submitButton.innerHTML = '<div class="loading"></div> Sending...';
    submitButton.style.willChange = 'contents';

    // Get form data with validation
    const formData = new FormData(form);
    
    // Client-side validation for better UX
    if (!validateFormClientSide(form)) {
        resetSubmitButton(submitButton, originalButtonText);
        return;
    }

    try {
        // Enhanced fetch with timeout and retry logic
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

        const response = await fetch('php/contact-handler.php', {
            method: 'POST',
            body: formData,
            signal: controller.signal,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const submitTime = performance.now() - submitStartTime;
        
        console.log('Form submission time:', Math.round(submitTime), 'ms');

        if (result.success) {
            showNotification('Message sent successfully! We will contact you soon.', 'success');
            form.reset();
            
            // Track successful submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'engagement',
                    event_label: 'contact_form'
                });
            }
        } else {
            showNotification(result.message || 'Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Handle different error types
        if (error.name === 'AbortError') {
            showNotification('Request timed out. Please check your connection and try again.', 'error');
        } else if (!navigator.onLine) {
            showNotification('No internet connection. Please check your network and try again.', 'error');
            
            // Store form data for later submission if service worker is available
            if ('serviceWorker' in navigator) {
                storeFormForLaterSubmission(formData);
            }
        } else {
            showNotification('Failed to send message. Please try again or contact us directly.', 'error');
        }
    } finally {
        resetSubmitButton(submitButton, originalButtonText);
    }
}

function resetSubmitButton(button, originalText) {
    button.disabled = false;
    button.textContent = originalText;
    button.style.willChange = 'auto';
}

function validateFormClientSide(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

function storeFormForLaterSubmission(formData) {
    try {
        const data = Object.fromEntries(formData.entries());
        localStorage.setItem('pendingFormData', JSON.stringify({
            data: data,
            timestamp: Date.now()
        }));
        
        showNotification('Form data saved. Will be submitted when connection is restored.', 'info');
    } catch (e) {
        console.warn('Could not store form data:', e);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="closeNotification(this)">&times;</button>
        </div>
    `;

    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                max-width: 400px;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1001;
                animation: slideInRight 0.3s ease-out;
            }

            .notification-success {
                background: #d4edda;
                border: 1px solid #c3e6cb;
                color: #155724;
            }

            .notification-error {
                background: #f8d7da;
                border: 1px solid #f5c6cb;
                color: #721c24;
            }

            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .notification-message {
                flex: 1;
            }

            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                margin-left: 1rem;
                color: inherit;
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification.querySelector('.notification-close'));
        }
    }, 5000);
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (target) {
            e.preventDefault();
            const targetId = target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Phone number formatting with error handling
function formatPhoneNumber(input) {
    try {
        const value = input.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
            if (value.startsWith('27')) {
                formattedValue = '+' + value.substring(0, 2) + ' ' +
                               value.substring(2, 4) + ' ' +
                               value.substring(4, 7) + ' ' +
                               value.substring(7, 11);
            } else {
                formattedValue = value.substring(0, 3) + ' ' +
                               value.substring(3, 6) + ' ' +
                               value.substring(6, 10);
            }
        }

        input.value = formattedValue;
    } catch (error) {
        console.warn('Error formatting phone number:', error);
    }
}

// Safe localStorage operations
function safeLocalStorage() {
    try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

// Safe sessionStorage operations
function safeSessionStorage() {
    try {
        const test = '__sessionStorage_test__';
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});

// FAQ Toggle Functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('i');

    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = '0';
            item.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
        }
    });

    // Toggle current FAQ
    faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            field.style.borderColor = '#28a745';
        }
    });

    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.style.borderColor = '#dc3545';
            isValid = false;
        }
    }

    return isValid;
}

// Add form validation to all forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#dc3545';
                } else {
                    this.style.borderColor = '#28a745';
                }
            });

            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#28a745';
                }
            });
        });
    });
});

// Lazy loading for images (if any)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            try {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                const domTime = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;

                console.log('Performance Metrics:', {
                    'Total Load Time': Math.round(loadTime) + 'ms',
                    'DOM Content Loaded': Math.round(domTime) + 'ms',
                    'First Paint': Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0) + 'ms'
                });

                // Send to analytics if available
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_performance', {
                        load_time: Math.round(loadTime),
                        dom_time: Math.round(domTime)
                    });
                }
            } catch (error) {
                console.warn('Performance monitoring error:', error);
            }
        }, 0);
    });

    // Monitor user interactions
    let interactionCount = 0;
    document.addEventListener('click', () => {
        interactionCount++;
        if (interactionCount % 10 === 0) { // Log every 10 interactions
            console.log('User interaction count:', interactionCount);
        }
    });
}

// Performance optimization functions
function initPerformanceOptimizations() {
    // Resource hints for critical resources
    preloadCriticalResources();
    
    // Optimize images
    optimizeImageLoading();
    
    // Enable passive event listeners
    enablePassiveListeners();
    
    // Cleanup unused resources
    cleanupUnusedResources();
    
    // Monitor memory usage
    monitorMemoryUsage();
}

function preloadCriticalResources() {
    const criticalResources = [
        { href: 'assets/hero-banner.jpg', as: 'image' },
        { href: 'css/styles.css', as: 'style' }
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
}

function optimizeImageLoading() {
    // Add loading="lazy" to images that don't have it
    const images = document.querySelectorAll('img:not([loading])');
    
    images.forEach((img, index) => {
        // First few images should load eagerly
        if (index < 3) {
            img.loading = 'eager';
        } else {
            img.loading = 'lazy';
        }
        
        // Add decode hint for better performance
        if ('decode' in img) {
            img.decode().catch(() => {
                console.warn('Image decode failed:', img.src);
            });
        }
    });
}

function enablePassiveListeners() {
    // Override addEventListener for better scroll performance
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (['scroll', 'wheel', 'touchstart', 'touchmove'].includes(type)) {
            if (typeof options === 'boolean') {
                options = { passive: true, capture: options };
            } else if (typeof options === 'object' && options.passive === undefined) {
                options.passive = true;
            } else if (!options) {
                options = { passive: true };
            }
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
}

function cleanupUnusedResources() {
    // Clean up old localStorage entries
    try {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('switch_waste_') && key.includes('_old')) {
                localStorage.removeItem(key);
            }
        });
    } catch (e) {
        console.warn('localStorage cleanup failed:', e);
    }
}

function monitorMemoryUsage() {
    if ('memory' in performance) {
        const memory = performance.memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
            console.warn('High memory usage detected');
            // Trigger garbage collection if possible
            if ('gc' in window) {
                window.gc();
            }
        }
    }
}

// Enhanced lazy loading with Intersection Observer v2
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    if (!images.length) return;

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load image with error handling
                loadImageOptimized(img).then(() => {
                    img.classList.add('loaded');
                }).catch(err => {
                    console.warn('Image loading failed:', err);
                    img.classList.add('error');
                });
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    images.forEach(img => {
        img.classList.add('img-lazy');
        imageObserver.observe(img);
    });
}

function loadImageOptimized(img) {
    return new Promise((resolve, reject) => {
        const tempImg = new Image();
        
        tempImg.onload = () => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            resolve();
        };
        
        tempImg.onerror = reject;
        tempImg.src = img.dataset.src || img.src;
    });
}

// Performance monitoring with Web Vitals
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        // Use setTimeout to ensure all resources are loaded
        setTimeout(() => {
            try {
                const perfData = performance.getEntriesByType('navigation')[0];
                const paintEntries = performance.getEntriesByType('paint');
                
                const metrics = {
                    'DNS Lookup': Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
                    'TCP Connection': Math.round(perfData.connectEnd - perfData.connectStart),
                    'Server Response': Math.round(perfData.responseEnd - perfData.requestStart),
                    'DOM Content Loaded': Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
                    'Total Load Time': Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                };
                
                // Add paint metrics
                paintEntries.forEach(entry => {
                    metrics[entry.name] = Math.round(entry.startTime);
                });

                console.log('Performance Metrics:', metrics);

                // Send to analytics if available
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_performance', {
                        custom_map: { metric_1: 'load_time' },
                        metric_1: metrics['Total Load Time']
                    });
                }
                
                // Check for performance issues
                if (metrics['Total Load Time'] > 3000) {
                    console.warn('Slow page load detected:', metrics['Total Load Time'], 'ms');
                }
                
            } catch (error) {
                console.warn('Performance monitoring error:', error);
            }
        }, 100);
    });

    // Monitor user interactions for performance insights
    let interactionCount = 0;
    let interactionStartTime = performance.now();

    ['click', 'keydown', 'scroll'].forEach(eventType => {
        document.addEventListener(eventType, () => {
            interactionCount++;
            
            // Log interaction rate every 10 interactions
            if (interactionCount % 10 === 0) {
                const now = performance.now();
                const rate = interactionCount / ((now - interactionStartTime) / 1000);
                console.log('Interaction rate:', Math.round(rate * 100) / 100, 'per second');
            }
        }, { passive: true });
    });
}

// Initialize all optimizations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoading);
    document.addEventListener('DOMContentLoaded', initPerformanceMonitoring);
} else {
    initLazyLoading();
    initPerformanceMonitoring();
}

// Enhanced global API with performance methods
window.SwitchWaste = {
    // UI Functions
    showNotification,
    closeNotification,
    formatPhoneNumber,
    toggleFaq,
    validateForm,
    
    // Storage Functions
    safeLocalStorage,
    safeSessionStorage,
    
    // Performance Functions
    performance: {
        preloadResource: (url, type = 'script') => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = type;
            document.head.appendChild(link);
        },
        
        measureTask: (name, fn) => {
            const start = performance.now();
            const result = fn();
            const end = performance.now();
            console.log(`Task "${name}" took:`, Math.round(end - start), 'ms');
            return result;
        },
        
        getMetrics: () => {
            if (!('performance' in window)) return {};
            
            const navigation = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            
            return {
                navigation: navigation ? {
                    loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
                    domTime: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
                    responseTime: Math.round(navigation.responseEnd - navigation.requestStart)
                } : {},
                paint: paint.reduce((acc, entry) => {
                    acc[entry.name.replace('-', '_')] = Math.round(entry.startTime);
                    return acc;
                }, {})
            };
        }
    },
    
    // Debug mode flag
    debug: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // Version info
    version: '2.0.0'
};

// Console branding for development
if (window.SwitchWaste.debug) {
    console.log(
        '%cSwitch Waste Management Solutions',
        'color: #2c5530; font-size: 18px; font-weight: bold;'
    );
    console.log(
        '%cOptimized Performance Build v' + window.SwitchWaste.version,
        'color: #7fb069; font-size: 12px;'
    );
    console.log('Performance API available at: window.SwitchWaste.performance');
}