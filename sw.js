self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Порожній обробник, щоб Chrome вважав PWA валідним
});
