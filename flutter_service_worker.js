'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0ddef2ecac68cfe76d6ea4b9d85d7bca",
"assets/AssetManifest.bin.json": "7d9a66dbe56af333bf9dd3d0cac8124e",
"assets/AssetManifest.json": "6357a907e844051304b6cdfba5ce8119",
"assets/assets/classic_awesome.svg": "6ef07562f29101a70bf3fc100660bfe2",
"assets/assets/classic_bad.svg": "780bcf1cf594a6b492967d91307ed064",
"assets/assets/classic_good.svg": "f2ac6543155e1370d7abea00d8b63ff2",
"assets/assets/classic_terrible.svg": "47b9d9eaa785b73e674f97061bdbfa16",
"assets/assets/classic_very_good.svg": "6c6ffb3a6a4c1dcd5adb56be222b7474",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9d06f404c2b04b761af82713ce9136f3",
"assets/NOTICES": "299003c843a3824bd097655031de3c7c",
"assets/packages/flutter_emoji_feedback/assets/animated_awesome.json": "a7eadc7114c98bff1077be4aae2ca3d0",
"assets/packages/flutter_emoji_feedback/assets/animated_bad.json": "f7561206572c2f47737110989e36fb22",
"assets/packages/flutter_emoji_feedback/assets/animated_good.json": "f40287ab1e826d0483486df89524acdd",
"assets/packages/flutter_emoji_feedback/assets/animated_neutral.json": "96d62d11a7c9b511dca96ed57fcb458e",
"assets/packages/flutter_emoji_feedback/assets/animated_terrible.json": "615d85c200ae1bba83535e66f42dc8a7",
"assets/packages/flutter_emoji_feedback/assets/animated_very_good.json": "f40287ab1e826d0483486df89524acdd",
"assets/packages/flutter_emoji_feedback/assets/classic_awesome.svg": "6ef07562f29101a70bf3fc100660bfe2",
"assets/packages/flutter_emoji_feedback/assets/classic_bad.svg": "780bcf1cf594a6b492967d91307ed064",
"assets/packages/flutter_emoji_feedback/assets/classic_good.svg": "f2ac6543155e1370d7abea00d8b63ff2",
"assets/packages/flutter_emoji_feedback/assets/classic_terrible.svg": "47b9d9eaa785b73e674f97061bdbfa16",
"assets/packages/flutter_emoji_feedback/assets/classic_very_good.svg": "6c6ffb3a6a4c1dcd5adb56be222b7474",
"assets/packages/flutter_emoji_feedback/assets/flat_awesome.svg": "87b615239f89e9ac6a7f524bb7049a0c",
"assets/packages/flutter_emoji_feedback/assets/flat_bad.svg": "3dbdced0f53be2c8595d63a469a7fe04",
"assets/packages/flutter_emoji_feedback/assets/flat_good.svg": "af2e7cbeb973e46aff6b6f7b3616f942",
"assets/packages/flutter_emoji_feedback/assets/flat_terrible.svg": "c0d7a6b77e083c8636c17950349ce401",
"assets/packages/flutter_emoji_feedback/assets/flat_very_good.svg": "d67ffdb07208539701ef35b272c9b9ab",
"assets/packages/flutter_emoji_feedback/assets/hd_awesome.svg": "c8187fcd29f7dc9fc13e9f3be469a5e9",
"assets/packages/flutter_emoji_feedback/assets/hd_bad.svg": "293ea8eee3358a1911aad97a397b8565",
"assets/packages/flutter_emoji_feedback/assets/hd_good.svg": "31ba501e13250396d7704ca551203bef",
"assets/packages/flutter_emoji_feedback/assets/hd_terrible.svg": "1a0819da178e3c410a7b364d6f816e81",
"assets/packages/flutter_emoji_feedback/assets/hd_very_good.svg": "e4834557f40e22d92ae80caabace6045",
"assets/packages/flutter_emoji_feedback/assets/noto_awesome.svg": "9b500f1ba16bda2d9df886749844cde5",
"assets/packages/flutter_emoji_feedback/assets/noto_bad.svg": "771657f5cd964d22133579268ef3f70f",
"assets/packages/flutter_emoji_feedback/assets/noto_good.svg": "7be3860cb6aa97b26c482322a9daa64d",
"assets/packages/flutter_emoji_feedback/assets/noto_neutral.svg": "49d884458a037ed4d9e94fa8ecd6a9e8",
"assets/packages/flutter_emoji_feedback/assets/noto_terrible.svg": "36a8fb802d9bc0daf5076eb82f140204",
"assets/packages/flutter_emoji_feedback/assets/noto_very_good.svg": "7be3860cb6aa97b26c482322a9daa64d",
"assets/packages/flutter_emoji_feedback/assets/three_d_awesome.svg": "3a0b77d364b79cf0fe5ef5ca85586fed",
"assets/packages/flutter_emoji_feedback/assets/three_d_bad.svg": "8186407716be2096c16077d00d9abce0",
"assets/packages/flutter_emoji_feedback/assets/three_d_good.svg": "9aaf87f5f209510833c59629e7fd05bc",
"assets/packages/flutter_emoji_feedback/assets/three_d_terrible.svg": "a7ed9fbba9b0df8d27851e312bd90f77",
"assets/packages/flutter_emoji_feedback/assets/three_d_very_good.svg": "bca787a0f30160f5342b3b214b7504cc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ad801d99d35058928f029a5e4ecbbab0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce553c0d566dc173f1b0549fca8bd70c",
"/": "ce553c0d566dc173f1b0549fca8bd70c",
"main.dart.js": "00d82f10fe2d2118273b3723c72bcb83",
"manifest.json": "0268de310a49372b8ec4957f682a2b49",
"version.json": "b4505f6240b3070f8fb5073d2408551c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
