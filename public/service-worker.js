

const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  // Ajoutez ici les autres fichiers que vous voulez mettre en cache
];

// Installation du Service Worker
window.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache ouvert');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activation du Service Worker
window.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepter les requêtes et servir les fichiers du cache
window.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si une réponse est dans le cache, on la retourne, sinon on va chercher le fichier en ligne
      return cachedResponse || fetch(event.request);
    })
  );
});

export default ServiceWorker