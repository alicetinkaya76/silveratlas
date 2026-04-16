const CACHE_STATIC = 'jewelpedi-static-v30';
const CACHE_DYNAMIC = 'jewelpedi-dynamic-v30';
const CACHE_API = 'jewelpedi-api-v30';

const PRECACHE = ['/', '/index.html'];
const API_DOMAINS = ['api.gold-api.com', 'open.er-api.com'];
const DYNAMIC_MAX = 60;

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_STATIC).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  const keep = [CACHE_STATIC, CACHE_DYNAMIC, CACHE_API];
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !keep.includes(k)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function networkWithTimeout(request, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), timeout);
    fetch(request).then(res => { clearTimeout(timer); resolve(res); })
      .catch(err => { clearTimeout(timer); reject(err); });
  });
}

async function trimCache(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  if (keys.length > max) await Promise.all(keys.slice(0, keys.length - max).map(k => cache.delete(k)));
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // API: network-first with 3s timeout
  if (API_DOMAINS.some(d => url.hostname.includes(d))) {
    e.respondWith(
      networkWithTimeout(e.request, 3000)
        .then(res => { const c = res.clone(); caches.open(CACHE_API).then(ca => ca.put(e.request, c)); return res; })
        .catch(() => caches.match(e.request).then(r => r || new Response('{"error":"offline"}', { headers: { 'Content-Type': 'application/json' } })))
    );
    return;
  }

  // Static assets: stale-while-revalidate
  if (url.pathname.includes('/assets/') || url.pathname.endsWith('.css') || url.pathname.endsWith('.js')
      || url.hostname.includes('fonts.googleapis') || url.hostname.includes('fonts.gstatic')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        const net = fetch(e.request).then(res => {
          if (res.ok) { const c = res.clone(); caches.open(CACHE_STATIC).then(ca => ca.put(e.request, c)); }
          return res;
        }).catch(() => cached);
        return cached || net;
      })
    );
    return;
  }

  // Images: cache-first
  if (url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico)$/)) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const c = res.clone(); caches.open(CACHE_DYNAMIC).then(ca => { ca.put(e.request, c); trimCache(CACHE_DYNAMIC, DYNAMIC_MAX); });
        return res;
      }))
    );
    return;
  }

  // HTML: network-first
  e.respondWith(
    fetch(e.request).then(res => { const c = res.clone(); caches.open(CACHE_DYNAMIC).then(ca => ca.put(e.request, c)); return res; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('/')))
  );
});
