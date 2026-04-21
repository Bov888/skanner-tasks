self.addEventListener('install', (event) => {
  console.log('SW installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW activated');
});

self.addEventListener('fetch', (event) => {
  // Порожній обробник обов'язковий для PWA
});
