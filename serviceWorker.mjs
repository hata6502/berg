const a=String(1676743988828),t=["./","./favicon.png","./index.mjs","./manifest.json"],e=globalThis;e.addEventListener("activate",(t=>{t.waitUntil((async()=>{const t=await caches.keys();await Promise.all(t.map((async t=>{t!==a&&await caches.delete(t)}))),await e.clients.claim()})())})),e.addEventListener("fetch",(a=>{a.respondWith((async()=>{const t=await caches.match(a.request);return t||await fetch(a.request)})())})),e.addEventListener("install",(i=>{i.waitUntil((async()=>{const i=await caches.open(a);await i.addAll(t),await e.skipWaiting()})())}));