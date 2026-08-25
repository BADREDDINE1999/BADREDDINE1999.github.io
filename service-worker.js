/* Retires the service worker left behind by the previous React build.
   Returning visitors still have it registered; without this they would keep
   being served the old cached portfolio. It clears every cache, unregisters
   itself, then reloads open tabs onto the new site. */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    const keys = await caches.keys();
    await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(function (c) { c.navigate(c.url); });
  })());
});
