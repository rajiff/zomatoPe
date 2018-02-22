importScripts('workbox-sw.prod.v2.1.2.js');
const workboxSW = new WorkboxSW();
workboxSW.precache([]);

self.addEventListener('install', function (event) {
  console.log('%c ServiceWorker installation successful', 'color: #FF00ff');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  console.log('%c ServiceWorker activation successful', 'color: #CDDC39');
  event.waitUntil(self.clients.claim());
});

/*self.addEventListener('fetch', function(event) {
	console.log('ServiceWorker fetch event invoked');
  event.respondWith(fetch(event.request));
});*/

workboxSW.router.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute(/.*api\/v2.1\/search*/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'dycache',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute(/.*api\/v2.1\/restaurant*/,
  workboxSW.strategies.networkFirst({
    cacheName: 'dycache',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);
