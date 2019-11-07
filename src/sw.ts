const CACHE_NAME = 'cache-v1-vubhub.be';
const urlsToCache = [
    // '/',
    // '/static/blog/main.css',
    // '/static/blog/js/index.bundle.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
];

self.addEventListener('install', function (event) {
    // @ts-ignore
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    // @ts-ignore
    event.respondWith(
        // @ts-ignore
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // @ts-ignore
                return fetch(event.request);
            }
            )
    );
});
