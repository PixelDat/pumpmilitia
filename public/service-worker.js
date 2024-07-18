// public/service-worker.js
self.__WB_MANIFEST;

workbox.core.setCacheNameDetails({ prefix: 'my-game' });

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
    new RegExp('.*\\.js'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\\.css'),
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
    new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            }),
        ],
    })
);

// Cache static text files (e.g., JSON, HTML)
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:html|json|txt)'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-texts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            }),
        ],
    })
);
