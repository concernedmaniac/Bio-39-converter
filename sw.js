const CACHE_NAME = 'bip39-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// 설치 시 파일을 캐시에 저장
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 오프라인일 때 캐시된 파일 반환
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
