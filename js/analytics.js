
// Switch Waste Management Solutions - Advanced Analytics & Monitoring
// Version: 2.0.0 - Performance, User Experience & Business Intelligence

(function() {
    'use strict';

    // =====================================================
    // CORE WEB VITALS MONITORING
    // =====================================================

    class WebVitalsMonitor {
        constructor() {
            this.metrics = {};
            this.initialized = false;
            this.setupCoreWebVitals();
        }

        setupCoreWebVitals() {
            if (!('PerformanceObserver' in window)) {
                console.warn('Performance monitoring not supported');
                return;
            }

            // Largest Contentful Paint (LCP)
            this.observeLCP();
            
            // First Input Delay (FID)
            this.observeFID();
            
            // Cumulative Layout Shift (CLS)
            this.observeCLS();
            
            // Time to First Byte (TTFB)
            this.observeTTFB();
            
            // First Contentful Paint (FCP)
            this.observeFCP();
        }

        observeLCP() {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                
                this.metrics.lcp = lastEntry.startTime;
                this.trackMetric('LCP', lastEntry.startTime, 'Core Web Vitals');
                
                // LCP should be under 2.5s for good user experience
                if (lastEntry.startTime > 2500) {
                    console.warn('Poor LCP detected:', lastEntry.startTime);
                }
            });

            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        observeFID() {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    const fid = entry.processingStart - entry.startTime;
                    this.metrics.fid = fid;
                    this.trackMetric('FID', fid, 'Core Web Vitals');
                    
                    // FID should be under 100ms
                    if (fid > 100) {
                        console.warn('Poor FID detected:', fid);
                    }
                });
            });

            observer.observe({ entryTypes: ['first-input'] });
        }

        observeCLS() {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.metrics.cls = clsValue;
                        this.trackMetric('CLS', clsValue, 'Core Web Vitals');
                        
                        // CLS should be under 0.1
                        if (clsValue > 0.1) {
                            console.warn('Poor CLS detected:', clsValue);
                        }
                    }
                }
            });

            observer.observe({ entryTypes: ['layout-shift'] });
        }

        observeTTFB() {
            const observer = new PerformanceObserver((list) => {
                const entry = list.getEntries()[0];
                const ttfb = entry.responseStart - entry.requestStart;
                
                this.metrics.ttfb = ttfb;
                this.trackMetric('TTFB', ttfb, 'Performance');
            });

            observer.observe({ entryTypes: ['navigation'] });
        }

        observeFCP() {
            const observer = new PerformanceObserver((list) => {
                const entry = list.getEntries()[0];
                this.metrics.fcp = entry.startTime;
                this.trackMetric('FCP', entry.startTime, 'Core Web Vitals');
            });

            observer.observe({ entryTypes: ['paint'] });
        }

        trackMetric(name, value, category = 'Performance') {
            // Send to Google Analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', name.toLowerCase(), {
                    event_category: category,
                    value: Math.round(value),
                    custom_parameter_1: window.location.pathname
                });
            }

            // Send to custom analytics endpoint
            this.sendCustomAnalytics(name, value, category);
        }

        sendCustomAnalytics(metric, value, category) {
            // Custom analytics implementation
            if (navigator.sendBeacon) {
                const data = new FormData();
                data.append('metric', metric);
                data.append('value', value);
                data.append('category', category);
                data.append('page', window.location.pathname);
                data.append('timestamp', Date.now());
                
                navigator.sendBeacon('/analytics/track', data);
            }
        }

        getMetrics() {
            return this.metrics;
        }
    }

    // =====================================================
    // USER BEHAVIOR ANALYTICS
    // =====================================================

    class UserBehaviorAnalytics {
        constructor() {
            this.interactions = [];
            this.scrollDepth = 0;
            this.timeOnPage = Date.now();
            this.setupBehaviorTracking();
        }

        setupBehaviorTracking() {
            this.trackScrollDepth();
            this.trackClicks();
            this.trackFormInteractions();
            this.trackPageVisibility();
            this.trackDeviceInfo();
        }

        trackScrollDepth() {
            let maxScroll = 0;
            
            window.addEventListener('scroll', this.throttle(() => {
                const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                
                if (scrolled > maxScroll) {
                    maxScroll = scrolled;
                    this.scrollDepth = maxScroll;
                    
                    // Track milestone scrolls
                    const milestones = [25, 50, 75, 90];
                    milestones.forEach(milestone => {
                        if (scrolled >= milestone && !this[`scroll_${milestone}`]) {
                            this[`scroll_${milestone}`] = true;
                            this.trackEvent('scroll_depth', milestone, 'Engagement');
                        }
                    });
                }
            }, 250), { passive: true });
        }

        trackClicks() {
            document.addEventListener('click', (e) => {
                const target = e.target.closest('a, button, [role="button"]');
                if (target) {
                    const clickData = {
                        type: 'click',
                        element: target.tagName.toLowerCase(),
                        text: target.textContent?.trim().substring(0, 50) || 'No text',
                        href: target.href || '',
                        timestamp: Date.now(),
                        x: e.clientX,
                        y: e.clientY
                    };
                    
                    this.interactions.push(clickData);
                    this.trackEvent('element_click', clickData.element, 'Engagement');
                    
                    // Track CTA button clicks specifically
                    if (target.classList.contains('cta-button')) {
                        this.trackEvent('cta_click', target.textContent?.trim(), 'Conversion');
                    }
                }
            });
        }

        trackFormInteractions() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                let formStartTime = null;
                
                // Track form start
                form.addEventListener('focusin', () => {
                    if (!formStartTime) {
                        formStartTime = Date.now();
                        this.trackEvent('form_start', form.id || 'unnamed_form', 'Engagement');
                    }
                }, { once: true });

                // Track form submission
                form.addEventListener('submit', () => {
                    if (formStartTime) {
                        const completionTime = Date.now() - formStartTime;
                        this.trackEvent('form_submit', completionTime, 'Conversion');
                    }
                });

                // Track field interactions
                const fields = form.querySelectorAll('input, textarea, select');
                fields.forEach(field => {
                    field.addEventListener('change', () => {
                        this.trackEvent('form_field_change', field.name || field.id || 'unnamed', 'Engagement');
                    });
                });
            });
        }

        trackPageVisibility() {
            let pageVisible = true;
            let visibilityStart = Date.now();
            
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    if (pageVisible) {
                        const visibleTime = Date.now() - visibilityStart;
                        this.trackEvent('page_visibility_hidden', visibleTime, 'Engagement');
                        pageVisible = false;
                    }
                } else {
                    if (!pageVisible) {
                        visibilityStart = Date.now();
                        this.trackEvent('page_visibility_visible', 0, 'Engagement');
                        pageVisible = true;
                    }
                }
            });

            // Track when user leaves page
            window.addEventListener('beforeunload', () => {
                const totalTime = Date.now() - this.timeOnPage;
                this.trackEvent('time_on_page', totalTime, 'Engagement');
                this.sendAnalyticsBatch();
            });
        }

        trackDeviceInfo() {
            const deviceInfo = {
                screen: `${screen.width}x${screen.height}`,
                viewport: `${window.innerWidth}x${window.innerHeight}`,
                userAgent: navigator.userAgent,
                language: navigator.language,
                platform: navigator.platform,
                connection: navigator.connection?.effectiveType || 'unknown',
                memory: navigator.deviceMemory || 'unknown',
                cores: navigator.hardwareConcurrency || 'unknown'
            };

            this.trackEvent('device_info', JSON.stringify(deviceInfo), 'Technical');
        }

        trackEvent(action, label, category = 'General') {
            // Google Analytics 4
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: category,
                    event_label: label,
                    page_location: window.location.href,
                    page_title: document.title
                });
            }

            // Custom analytics
            this.sendCustomEvent(action, label, category);
        }

        sendCustomEvent(action, label, category) {
            if (navigator.sendBeacon) {
                const data = JSON.stringify({
                    event: action,
                    label: label,
                    category: category,
                    page: window.location.pathname,
                    timestamp: Date.now(),
                    session_id: this.getSessionId()
                });
                
                navigator.sendBeacon('/analytics/event', data);
            }
        }

        sendAnalyticsBatch() {
            if (this.interactions.length > 0) {
                const batch = {
                    interactions: this.interactions,
                    metrics: this.metrics,
                    page: window.location.pathname,
                    session_duration: Date.now() - this.timeOnPage,
                    scroll_depth: this.scrollDepth
                };
                
                if (navigator.sendBeacon) {
                    navigator.sendBeacon('/analytics/batch', JSON.stringify(batch));
                }
            }
        }

        getSessionId() {
            let sessionId = sessionStorage.getItem('switch_waste_session');
            if (!sessionId) {
                sessionId = 'swm_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                sessionStorage.setItem('switch_waste_session', sessionId);
            }
            return sessionId;
        }

        throttle(func, limit) {
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
    }

    // =====================================================
    // ERROR MONITORING
    // =====================================================

    class ErrorMonitor {
        constructor() {
            this.errors = [];
            this.setupErrorHandling();
        }

        setupErrorHandling() {
            // JavaScript errors
            window.addEventListener('error', (e) => {
                this.logError({
                    type: 'javascript',
                    message: e.message,
                    filename: e.filename,
                    line: e.lineno,
                    column: e.colno,
                    stack: e.error?.stack,
                    timestamp: Date.now()
                });
            });

            // Promise rejections
            window.addEventListener('unhandledrejection', (e) => {
                this.logError({
                    type: 'promise_rejection',
                    message: e.reason?.message || 'Promise rejected',
                    stack: e.reason?.stack,
                    timestamp: Date.now()
                });
            });

            // Resource loading errors
            document.addEventListener('error', (e) => {
                if (e.target !== window) {
                    this.logError({
                        type: 'resource',
                        message: `Failed to load ${e.target.tagName}: ${e.target.src || e.target.href}`,
                        element: e.target.tagName,
                        url: e.target.src || e.target.href,
                        timestamp: Date.now()
                    });
                }
            }, true);
        }

        logError(errorData) {
            this.errors.push(errorData);
            
            // Send to error tracking service
            if (navigator.sendBeacon) {
                navigator.sendBeacon('/analytics/error', JSON.stringify(errorData));
            }
            
            // Log to console in development
            if (window.SwitchWaste?.debug) {
                console.error('Error tracked:', errorData);
            }
        }

        getErrors() {
            return this.errors;
        }
    