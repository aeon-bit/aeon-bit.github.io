'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "81128c5f3814fcaee732f0802c2a1ccc",
"assets/AssetManifest.bin.json": "152d6be953e3310ed368a47123871358",
"assets/AssetManifest.json": "51e5d16556bc50d469de740310c005fe",
"assets/assets/images/about_me_square.jpg": "80062b7aeea8f3babceb8b2590a758ca",
"assets/assets/images/amikom.png": "f17081e72644564afaa678381c7bf221",
"assets/assets/images/projects/juragankucek.png": "78f9da1ff5730f3467a1a2d95ede534f",
"assets/assets/images/rams_tech.jpeg": "29372e86ffac9dd44d555de52ba092e4",
"assets/assets/images/ruang_it.jpg": "9ca0cc3af7772261478ceff7de55b889",
"assets/assets/images/stmik.png": "91bd91ae312d00387d7dbf4f412a7147",
"assets/assets/images/vc.png": "af02e14cf0c3d894ca6692f07b3f7ebd",
"assets/assets/images/yulo.jpg": "ccec6a58f5fe892fc10d6bec9ee78877",
"assets/assets/lottie/exp.json": "633fe0ebb0720ba755a22e9aac672658",
"assets/assets/lottie/exp_original.json": "f50de63dae898604fba67aac56bc392f",
"assets/assets/lottie/learn_anim_fixed.json": "6bf2be59cb79c54f9a37495aceb01d1c",
"assets/assets/lottie/lottie_splash_loading.json": "731e1f93c663e7738c4e57c1d8010a76",
"assets/assets/lottie/r_banner.json": "9af3e6d49fafd8a7e96468f9f24f037f",
"assets/assets/lottie/waving_hand.json": "d3eb4b610b7d45dc958141aa965f6de5",
"assets/assets/svg/ab_purple.svg": "32246157e507c98baa0c452043765f53",
"assets/assets/svg/ab_text.svg": "468dc4343959e0c42bda075ce1f56f7e",
"assets/assets/svg/ig.svg": "1f0f62e5137fb3e369402289d6ddfba2",
"assets/assets/svg/linkedin_rounded.svg": "040da594303b66c7519e8ff0547fa4a2",
"assets/assets/svg/projects/alki-merchant-2.svg": "819c8bb978b5acf342d32acf41cc3ca4",
"assets/assets/svg/projects/depok-bersih.svg": "28c0f03fbe20731ce67baea077e0789e",
"assets/assets/svg/projects/jk.svg": "a5ce7eeeb1f0fc6dbc70e3a674432b48",
"assets/assets/svg/projects/yulo-merchant.svg": "0cf0f7c8cf4157e1bf221bf3cfdd188e",
"assets/assets/svg/projects/yulo.svg": "8503e7bdbb87c9cf7dff558ee5f3687a",
"assets/assets/svg/skills/android.svg": "ee5387bb0980a2579a925de6c83c17cf",
"assets/assets/svg/skills/css.svg": "989a735cec29082b067dc389ea2da68a",
"assets/assets/svg/skills/dart.svg": "f049109d6f3c8d9e762f66b8141f2f55",
"assets/assets/svg/skills/figma.svg": "8e60c911c41bc8c6166ddb414532893d",
"assets/assets/svg/skills/flutter.svg": "2ca9c9fd012f8116fdea433775efda6d",
"assets/assets/svg/skills/git.svg": "e6b832b0c31b469c8fcdfd4f2c4f1d3b",
"assets/assets/svg/skills/html.svg": "68aab8d074270f9ee0a7e385519d98fa",
"assets/assets/svg/skills/javascript.svg": "46524a43caf30828c17e38ec573dc5a3",
"assets/assets/svg/skills/mysql.svg": "2cf2fd30658ed833e714cf1fd682d120",
"assets/assets/svg/skills/playstore.svg": "95b2817ab5151ff52e9ec5145ad62ca5",
"assets/assets/svg/skills/react.svg": "7be113a51aa59fbe2be7ac966109e3de",
"assets/assets/svg/skills/tailwind.svg": "b6952af50c6e4db78abefc8d9a529a8b",
"assets/assets/svg/web_logo.svg": "413fac219e10121c96a27e3e4cbca856",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f5dde08edba1a0c99e4e1b734386be6d",
"assets/NOTICES": "635f556cf78c6f0ca41aefccbedbf268",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bcd45ee2bbc482f84668499a83b48a58",
"/": "bcd45ee2bbc482f84668499a83b48a58",
"main.dart.js": "96b14bb1417f0f753e7fab6ad3195d48",
"manifest.json": "8780e59b100fadfd1ebd1ddac0eb1784",
"version.json": "4d6ae595bb4b7bb0449f1b1f94aae288"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
