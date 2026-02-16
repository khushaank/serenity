const CACHE_NAME = "serenity-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./video.mp4",
  "./manifest.json",
  "./favicon.svg",
  "./humans.txt",
  "./llms.txt",
  "./404.html",
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
