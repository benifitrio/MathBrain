importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
} else {
    console.log(`Workbox gagal dimuat`);
}

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/nav-tak.html', revision: '1' },
    { url: '/limit-tak-hingga.html', revision: '1' },
    { url: '/manifest.json', revision: '1' }, ,
    { url: '/css/styles.css', revision: '1' },
    { url: '/css/main.css', revision: '1' },
    { url: '/css/rumus.css', revision: '1' },
    { url: '/tailwind.css', revision: '1' },
    { url: '/scripts/darkmode.js', revision: '1' },
    { url: '/scripts/barisan-bilangan.js', revision: '1' },
    { url: '/scripts/main.js', revision: '1' },
    { url: '/scripts/script.js', revision: '1' },
    { url: '/scripts/main-tak.js', revision: '1' },
    { url: '/scripts/nav.js', revision: '1' },
    { url: '/scripts/nav-tak.js', revision: '1' },
    { url: '/scripts/barisan-bilangan.js', revision: '1' },
    { url: '/scripts/barisan-divergen.js', revision: '1' },
    { url: '/scripts/konvergen.js', revision: '1' },
    { url: '/scripts/limit-fungsi.js', revision: '1' },
    { url: '/scripts/limit.js', revision: '1' },
    { url: '/scripts/barisan-bilangan.js', revision: '1' },
    { url: '/images/icon.jpg', revision: '1' },
    { url: '/logo.png', revision: '1' },
    { url: '/images/diana.png', revision: '1' },
    { url: '/icon/android-icon-192x192.png', revision: '1' },
    { url: '/icon/favicon-96x96.png', revision: '1' },
    { url: '/images/bg.png', revision: '1' },
    { url: 'https://unpkg.com/typewriter-effect@latest/dist/core.js', revision: '1' },
    { url: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js', revision: '1' },
    { url: 'https://polyfill.io/v3/polyfill.min.js?features=es6', revision: '1' },
    { url: '/images/materi.png', revision: '1' },
    { url: '/images/profile.png', revision: '1' },
    { url: '/images/PUSTAKA.png', revision: '1' },
    { url: '/images/petunjuk1.png', revision: '1' },
    { url: '/images/petunjuk.png', revision: '1' },
    { url: '/images/bg.jpg', revision: '1' },
    { url: '/images/11.png', revision: '1' },
    { url: '/images/12.png', revision: '1' },
    { url: '/images/13.png', revision: '1' },
    { url: '/images/14.png', revision: '1' },
    { url: '/images/15.png', revision: '1' },
    { url: '/images/16.png', revision: '1' },
    { url: '/images/17.png', revision: '1' },
    { url: '/images/17.png', revision: '1' },
    { url: '/images/19.png', revision: '1' },
    { url: '/images/2022-12-07_082604.png', revision: '1' },
    { url: '/images/rumus1.png', revision: '1' },
    { url: '/images/rumus2.png', revision: '1' },
    { url: '/images/rumus3.png', revision: '1' },
    { url: '/images/rumus4.png', revision: '1' },
    { url: '/images/rumus5.png', revision: '1' },
    { url: '/images/rumus6.png', revision: '1' },
    { url: '/images/rumus7.png', revision: '1' },
    { url: '/images/rumus8.png', revision: '1' },
    { url: '/images/rumus9.png', revision: '1' },
    { url: '/images/rumus10.png', revision: '1' },
    { url: '/images/rumus11.png', revision: '1' },
    { url: '/images/rumus12.png', revision: '1' },
    { url: '/images/rumus13.png', revision: '1' },
    { url: '/images/rumus14.png', revision: '1' },
    { url: '/images/rumus15.png', revision: '1' },
    { url: '/images/rumus16.png', revision: '1' },
    { url: '/images/rumus17.png', revision: '1' },
    { url: '/images/rumus18.png', revision: '1' },
    { url: '/images/rumus19.png', revision: '1' },
    { url: '/images/rumus20.png', revision: '1' },
    { url: '/images/rumus21.png', revision: '1' },
    { url: '/images/rumus22.png', revision: '1' }


], {
    ignoreUrlParametersMatching: [/.*/]
});

// workbox.routing.registerRoute(
//     new RegExp('https://api.quran.sutanlab.id/surah/'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'alquran-apps',
//         plugins: [
//             new workbox.cacheableResponse.Plugin({
//                 statuses: [200],
//             }),
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365,
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('https://islamic-api-zhirrr.vercel.app/api/doaharian'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'doa',
//         plugins: [
//             new workbox.cacheableResponse.Plugin({
//                 statuses: [200],
//             }),
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365,
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'asmaul',
//         plugins: [
//             new workbox.cacheableResponse.Plugin({
//                 statuses: [200],
//             }),
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365,
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'font-awesome',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
                maxEntries: 30,
            }),
        ],
    })
);