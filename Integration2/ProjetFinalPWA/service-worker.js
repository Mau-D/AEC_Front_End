//Ce fichier a été pris par d'autres sources, donc pour l'utiliser modifier le code et changer les commentaires

//Update cache names any time any of the cached files change.
//Changer la version après chaque modification*******************
const CACHE_NAME = 'static-cache-v8';
//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
];
self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
// Precache static resources here.
    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});


self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
//Remove previous cached data from disk.
    //Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache',
                        key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});


self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
//Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
// Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('/AEC_Front_End/Integration2/ProjetFinalPWA/offline.html' );
                    });
            })
    );
});