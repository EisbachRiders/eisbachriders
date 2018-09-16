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
    "url": "webpack-runtime-21368f052f144a454c4c.js"
  },
  {
    "url": "app-1bbb64f9fe9001da6811.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7d05841fbe53a2d93ef9.js"
  },
  {
    "url": "index.html",
    "revision": "716538c74602cb0f93653c15c13199fd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b1ecbb27b04fb16e65705d444f40674b"
  },
  {
    "url": "0.4c1b04408ab10676032f.css"
  },
  {
    "url": "component---src-pages-index-js.c5ea91c72c282a4b28a4.css"
  },
  {
    "url": "component---src-pages-index-js-1dcd88ec39ff2bf5ba65.js"
  },
  {
    "url": "0-9b6c9fd9e5d4a3d319b9.js"
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
