const CACHE_NAME = 'scanner-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Дозволяємо браузеру просто завантажувати файли
    event.respondWith(fetch(event.request));
});
