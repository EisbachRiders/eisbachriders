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
    "url": "webpack-runtime-695948d143ee7d86fbbb.js"
  },
  {
    "url": "app-d13d14ff20bac24730da.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-14844a16072449368287.js"
  },
  {
    "url": "index.html",
    "revision": "8b109216c1f356c23a12f1255da63304"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "765db78507e01b8f039fdb02de9c7925"
  },
  {
    "url": "0.4570456331aa0e993079.css"
  },
  {
    "url": "component---src-pages-index-js.ea580feaca2d6815299b.css"
  },
  {
    "url": "component---src-pages-index-js-656a5bdfd629d19a3997.js"
  },
  {
    "url": "0-0aafc2721ed1e24d88ea.js"
  },
  {
    "url": "static/d/905/path---index-6a9-KmqK9FY9jgeL3LtSflTYOy6w6LI.json",
    "revision": "71f0ee3b0f547ed9f6166e4623a26b76"
  },
  {
    "url": "component---src-pages-404-js-06017458a4ab7a49e225.js"
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
