/* ==========================================================================
   Osolutions Academy — service worker
   Stale-while-revalidate for the shell, cache-first for images and fonts.
   ========================================================================== */
const VERSION = 'oso-academy-v1';
const SHELL = VERSION + '-shell';
const MEDIA = VERSION + '-media';

const PRECACHE = [
  './',
  './index.html',
  './courses.html',
  './course.html',
  './dashboard.html',
  './learn.html',
  './404.html',
  './assets/css/main.css',
  './assets/css/pages.css',
  './assets/css/motion.css',
  './assets/css/home.css',
  './assets/js/i18n.js',
  './assets/js/data.js',
  './assets/js/motion.js',
  './assets/js/seo.js',
  './assets/js/cro.js',
  './assets/js/app.js',
  './assets/img/logo.svg',
  './assets/img/favicon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL)
      .then(c => c.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.indexOf(VERSION) !== 0).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin && url.origin.indexOf('fonts.g') === -1) return;

  const isMedia = /\.(webp|png|jpe?g|svg|woff2?)$/i.test(url.pathname) || url.origin.indexOf('fonts.g') > -1;

  if (isMedia) {
    e.respondWith(
      caches.open(MEDIA).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        }).catch(() => hit))
      )
    );
    return;
  }

  /* documents, css and js: serve cache, refresh in the background */
  e.respondWith(
    caches.open(SHELL).then(cache =>
      cache.match(req).then(hit => {
        const net = fetch(req).then(res => {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        }).catch(() => hit || caches.match('./404.html'));
        return hit || net;
      })
    )
  );
});
