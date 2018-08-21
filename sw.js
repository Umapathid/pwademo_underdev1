self.addEventListener("install", function(event) {
    console.log('[service worker] installing service worker..', event);
});

self.addEventListener("activate", function(event) {
    console.log('[service worker] activating service worker..', event);
});