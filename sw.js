/* Installable PWA; cache only the application assets inside this project scope. */
const PREFIX = 'hanja-tier-pwa:' + new URL(self.registration.scope).pathname + ':';
const CACHE = PREFIX + 'v3';
const ASSETS = [
  "./",
  "./index.html",
  "./offline.html",
  "./manifest.webmanifest",
  "./js/app.js",
  "./js/backend.js",
  "./js/board.js",
  "./js/econ-student.js",
  "./js/econ-teacher.js",
  "./js/econ.js",
  "./js/firebase-config.js",
  "./js/hanja-engine.js",
  "./js/hanja-learning.js",
  "./js/hanja.js",
  "./js/importer.js",
  "./js/media.js",
  "./js/prices.js",
  "./js/quest.js",
  "./js/teacher.js",
  "./js/tier.js",
  "./js/tracks.js",
  "./js/xlsx-lite.js",
  "./css/econ.css",
  "./css/style.css",
  "./css/tier.css",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];
const ALLOWED = new Set(ASSETS.map(path => new URL(path, self.registration.scope).pathname));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  // Keep an ongoing lesson on the current version. The new worker activates when old tabs close.
});
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url), scope = new URL(self.registration.scope);
  if (request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  if (request.mode !== 'navigate' && !ALLOWED.has(url.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(request, { cache: 'no-store' });
      if (response.ok && ALLOWED.has(url.pathname)) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      if (request.mode === 'navigate') return await cache.match('./offline.html');
      const hit = await cache.match(request, { ignoreSearch: true });
      if (hit) return hit;
      throw error;
    }
  })());
});
