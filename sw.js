// CivicSense service worker: app shell + AI models cached for offline use
const VER = 'civicsense-v8';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
// Libraries, AI model weights, OCR language data: cache after first download
const LIBS = /cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|storage\.googleapis\.com|tfhub\.dev|kaggle\.com|tessdata|projectnaptha/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VER).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Map tiles: always live (too many to cache)
  if (/tile\.openstreetmap\.org/.test(url.host)) return;
  // Own pages: network first so updates show, cache as fallback offline
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VER).then(c => c.put(req, cp)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Libraries + models: cache first (big files, rarely change)
  if (LIBS.test(url.href)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(VER).then(c => c.put(req, cp)); }
      return r;
    })));
  }
});
