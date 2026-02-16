const CACHE_NAME = "serenity-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./video.mp4", // Assuming video is local. If it's large, we might want to be careful, but user asked for SW.
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});
