// Switch Waste Management Solutions - Service Worker
// Version: 1.0.0 - Performance & Caching Optimization

const CACHE_NAME = 'switch-waste-v2.0.0';
const CACHE_ASSETS = [
    '/',
    '/static/js/*.js',
    '/static/css/*.css',
    '/manifest.json',
    '/assets/logo/switch_Pro_logo.png',
    '/assets/backgrounds/index.herobanner.png',
    // External resources
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    // Icons and images
    '/favicon.ico',
    '/logo192.png'
];

const RUNTIME_CACHE = 'switch-waste-runtime';

// Install event - Cache core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                if ('production' !== process.env.NODE_ENV) console.log('Service Worker: Caching Files');
                return cache.addAll(CACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch(err => { if ('production' !== process.env.NODE_ENV) console.log('Service Worker: Error Caching Files', err); })
    );
});

// Activate event - Clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                        if ('production' !== process.env.NODE_ENV) console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - Serve cached content when offline
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip chrome-extension and other protocols
    if (!event.request.url.startsWith('http')) return;

    // Handle different types of requests with different strategies
    if (event.request.destination === 'image') {
        event.respondWith(cacheFirstWithFallback(event.request));
    } else if (event.request.url.includes('/api/') || event.request.url.includes('/.netlify/functions/')) {
        event.respondWith(networkFirstWithFallback(event.request));
    } else {
        event.respondWith(cacheFirstWithFallback(event.request));
    }
});

// Cache First Strategy (for static assets)
async function cacheFirstWithFallback(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('Fetch failed; returning offline page instead.', error);
        
        // Return offline fallback for HTML pages
        if (request.destination === 'document') {
            return caches.match('/index.html');
        }
        
        // Return a default response for other requests
        return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}

// Network First Strategy (for dynamic content)
async function networkFirstWithFallback(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        return new Response('Network error occurred', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}

// Background sync for form submissions
self.addEventListener('sync', event => {
    if (event.tag === 'contact-form-sync') {
        event.waitUntil(syncContactForm());
    }
});

async function syncContactForm() {
    try {
        const cache = await caches.open(RUNTIME_CACHE);
        const formData = await cache.match('/pending-form-data');
        
        if (formData) {
            const data = await formData.json();
            const response = await fetch('/.netlify/functions/contact-handler', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                await cache.delete('/pending-form-data');
                console.log('Background sync: Form submitted successfully');
            }
        }
    } catch (error) {
        console.log('Background sync failed:', error);
    }
}

// Push notifications (for future use)
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New update from Switch Waste Solutions',
        icon: '/Assets/logo.png',
        badge: '/Assets/logo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Details',
                icon: '/Assets/logo.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/Assets/logo.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Switch Waste Solutions', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            self.clients.openWindow('/')
        );
    }
});

// Performance monitoring
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('Service Worker: Switch Waste Solutions SW Loaded');
if ('production' !== process.env.NODE_ENV) console.log('Service Worker: Switch Waste Solutions SW Loaded');

// Message listener for precache manifest from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});