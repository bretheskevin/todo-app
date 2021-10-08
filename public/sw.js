const PREFIX = "V1"
const CACHED_FILES = [
    "../src/assets/bg-desktop-dark.jpg",
    "../src/assets/bg-desktop-light.jpg",
    "../src/assets/bg-mobile-dark.jpg",
    "../src/assets/bg-mobile-light.jpg",
    "../src/assets/icon-check.svg",
    "../src/assets/icon-cross.svg",
    "../src/assets/icon-moon.svg",
    "../src/assets/icon-sun.svg",
    "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap",
]

self.addEventListener("install", () => {
    self.skipWaiting();
    event.waitUntil((async () => {
        const cache = await caches.open(PREFIX);
        await Promise.all([...CACHED_FILES, "./index.html"].map((path) => {
            return cache.add(new Request(path));
        }))
    })());
})

self.addEventListener("activate", (event) => {
    clients.claim();
    event.waitUntil((async () => {
        const keys = await caches.keys;
        await Promise.all(
            keys.map((key) => {
                if (!key.includes(PREFIX)) {
                    return caches.delete(key);
                }
            })
        )
    })())
})

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        (async () => {
            try {
                const preloadResponse = await event.preloadResponse
                if (preloadResponse) {
                    return preloadResponse
                }

                return await fetch(event.target)
            } catch (e) {
                const cache = await caches.open(PREFIX);
                return await
            catch.
                match("./index.html")
            }
        })();
    } else if (CACHED_FILES.includes(event.request.url)) {
        event.respondWith(caches.match(event.request));
    }
})