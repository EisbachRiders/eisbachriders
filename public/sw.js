/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-ddff0873e4eef19dd367.js"
  },
  {
    "url": "app-aa0dc96be45e26d637ac.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7d05841fbe53a2d93ef9.js"
  },
  {
    "url": "index.html",
    "revision": "1429fbcf7d53b1a1298cfc8a82887989"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6faefac2b602ab90ef2be54570ff157f"
  },
  {
    "url": "0.ea57f1bf8dce239c287f.css"
  },
  {
    "url": "component---src-pages-index-js.ea580feaca2d6815299b.css"
  },
  {
    "url": "component---src-pages-index-js-9a46a1d50596e59bf357.js"
  },
  {
    "url": "0-7e96800af759e9a3af51.js"
  },
  {
    "url": "static/d/297/path---index-6a9-RbxGsKGGqTyMCT26JHVUMpHgk.json",
    "revision": "5312fda6018b10dcd377e972fdd41689"
  },
  {
    "url": "component---src-pages-404-js-db23f514767294e056f5.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1a94775cc363fe7a53cb79661fd9e5aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
