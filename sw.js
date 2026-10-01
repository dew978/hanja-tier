/* Installable PWA; cache only the application assets inside this project scope. */
const PREFIX = 'hanja-tier-pwa:' + new URL(self.registration.scope).pathname + ':';
const CACHE = PREFIX + 'v12';
const ASSETS = [
  "./",
  "./index.html",
  "./offline.html",
  "./manifest.webmanifest",
  "./css/hanja.css?v=home-1",
  "./css/ink-theme.css?v=ink-1",
  "./assets/ink-landscape-v1.png",
  "./js/firebase-config.js",
  "./js/hanja.js",
  "./js/hanja-engine.js?v=batch-1",
  "./js/backend.js",
  "./js/hanja-app.js?v=home-1",
  "./js/hanja-learning.js?v=home-1",
  "./js/hanja-admin.js?v=copy-1",
  "./js/hanja-strokes.js?v=batch-1",
  "./js/stroke-practice.js?v=copy-1",
  "./fonts/Gungsuh-Regular.woff2",
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
