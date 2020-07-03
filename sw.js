importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

const precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "68e3dfe87a632e02ad1666a46a1011c5"
  },
  {
    "url": "assets/no-data.png",
    "revision": "72a4dddcdff5cddb69512c332ee076af"
  },
  {
    "url": "index.html",
    "revision": "e6e5efc4bca715b0db57e08f97f7e9fb"
  },
  {
    "url": "logo192.png",
    "revision": "a4740bd6e3ebebae74478faee17ebcf7"
  },
  {
    "url": "logo512.png",
    "revision": "7ffd2e73a9fda2a959f7f95cd478d9a4"
  },
  {
    "url": "manifest.json",
    "revision": "25d072de763b6dfdabf298e22649a748"
  },
  {
    "url": "precache-manifest.249cfb03e3d05f216bb10e764d5d6f9d.js",
    "revision": "249cfb03e3d05f216bb10e764d5d6f9d"
  },
  {
    "url": "robots.txt",
    "revision": "fa1ded1ed7c11438a9b0385b1e112850"
  },
  {
    "url": "service-worker.js",
    "revision": "e5577a36258ea32e35239c545bea1261"
  },
  {
    "url": "static/css/main.5f361e03.chunk.css",
    "revision": "1472653e7cd5f55fc8eabda93770382e"
  },
  {
    "url": "static/js/2.169d8a68.chunk.js",
    "revision": "1301f11f469972d74cf0909d2681cbb7"
  },
  {
    "url": "static/js/2.169d8a68.chunk.js.LICENSE.txt",
    "revision": "2142ab953a70f3d6b728c052b5d2e704"
  },
  {
    "url": "static/js/3.a56a8a47.chunk.js",
    "revision": "75e731b8be1c5fa35e741118a67dfd8d"
  },
  {
    "url": "static/js/3.a56a8a47.chunk.js.LICENSE.txt",
    "revision": "287e48aeac3564a8b2b5685a67fb9216"
  },
  {
    "url": "static/js/main.ff5f416c.chunk.js",
    "revision": "f9592157072ff2f473b42bbf74a1d8c2"
  },
  {
    "url": "static/js/runtime-main.487d9012.js",
    "revision": "5e69664b39e77415f79683aa9ebb3216"
  },
  {
    "url": "workbox-v4.3.1/workbox-background-sync.dev.js",
    "revision": "5446355eef3aa184b5b6eebfcd81f8d9"
  },
  {
    "url": "workbox-v4.3.1/workbox-background-sync.prod.js",
    "revision": "1ffcc362312a9e8ef4e28280ace2a1bd"
  },
  {
    "url": "workbox-v4.3.1/workbox-broadcast-update.dev.js",
    "revision": "0508d13784c9b0549663f40e3fe55d37"
  },
  {
    "url": "workbox-v4.3.1/workbox-broadcast-update.prod.js",
    "revision": "ee27c0fdc836f6a2dc656b25a680f9e4"
  },
  {
    "url": "workbox-v4.3.1/workbox-cacheable-response.dev.js",
    "revision": "ecba3679d285394f1c9e219681662721"
  },
  {
    "url": "workbox-v4.3.1/workbox-cacheable-response.prod.js",
    "revision": "a38e8afa80070ec9dff5dc2fb116f1c2"
  },
  {
    "url": "workbox-v4.3.1/workbox-core.dev.js",
    "revision": "2912182ccc99b017a8c36802cf9d983f"
  },
  {
    "url": "workbox-v4.3.1/workbox-core.prod.js",
    "revision": "5d14d8267f65030735589e4b664ee3bf"
  },
  {
    "url": "workbox-v4.3.1/workbox-expiration.dev.js",
    "revision": "43c236fe62480f042c35e8b898ca3367"
  },
  {
    "url": "workbox-v4.3.1/workbox-expiration.prod.js",
    "revision": "a767f3bbd2773a0bea34ff841b51ab64"
  },
  {
    "url": "workbox-v4.3.1/workbox-navigation-preload.dev.js",
    "revision": "a8f30e409f7037906053acec7d709beb"
  },
  {
    "url": "workbox-v4.3.1/workbox-navigation-preload.prod.js",
    "revision": "e2b19a3eda50f48ce7fc48640a523353"
  },
  {
    "url": "workbox-v4.3.1/workbox-offline-ga.dev.js",
    "revision": "3fba0947d12d42834b81499fafc76e82"
  },
  {
    "url": "workbox-v4.3.1/workbox-offline-ga.prod.js",
    "revision": "6af4fb51a5249c4e0ed7bc61ed59836d"
  },
  {
    "url": "workbox-v4.3.1/workbox-precaching.dev.js",
    "revision": "8fbbefcd70c998a3cd35f02e6a8ac4e7"
  },
  {
    "url": "workbox-v4.3.1/workbox-precaching.prod.js",
    "revision": "e8f5c57430ec7c448d30015ff4bd5896"
  },
  {
    "url": "workbox-v4.3.1/workbox-range-requests.dev.js",
    "revision": "0f15c57cf5c75cc72b6f23ad28a941d1"
  },
  {
    "url": "workbox-v4.3.1/workbox-range-requests.prod.js",
    "revision": "97c430406d13f4b91c805594ef351261"
  },
  {
    "url": "workbox-v4.3.1/workbox-routing.dev.js",
    "revision": "471b8e0f45e6e5e679d04f60c6466e7f"
  },
  {
    "url": "workbox-v4.3.1/workbox-routing.prod.js",
    "revision": "d3fa76a1c38649d596b1d2ffaf398128"
  },
  {
    "url": "workbox-v4.3.1/workbox-strategies.dev.js",
    "revision": "d1c19737e82e2f6bd567aaf384683174"
  },
  {
    "url": "workbox-v4.3.1/workbox-strategies.prod.js",
    "revision": "6033181992f0bc562ab1ef5f9ba34697"
  },
  {
    "url": "workbox-v4.3.1/workbox-streams.dev.js",
    "revision": "eed9eb6f7b0672c45db5408d05efe9b9"
  },
  {
    "url": "workbox-v4.3.1/workbox-streams.prod.js",
    "revision": "4407a13523f1fa1064f616e9047b6148"
  },
  {
    "url": "workbox-v4.3.1/workbox-sw.js",
    "revision": "6e1e47d706556eac8524f396e785d4bb"
  },
  {
    "url": "workbox-v4.3.1/workbox-window.dev.umd.js",
    "revision": "c17834573a1b48bb8cf33b12128bdae9"
  },
  {
    "url": "workbox-v4.3.1/workbox-window.prod.umd.js",
    "revision": "c65238721ed1187cf832e51a9e34724a"
  }
];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(
    /.*.(?:js|css|ttf|otf|mp3)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pomodoro-assets'
    }),
    'GET');

workbox.routing.registerRoute(
    /.*.(?:png|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pomodoro-images'
    }),
    'GET');

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);