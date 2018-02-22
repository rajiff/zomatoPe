//Pre caching by worbox generated service worker
module.exports = {
  "globDirectory": "./build/",
  "globPatterns": [
    "**/*.html",
    "**/*.js",
    "**/*.css"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "clientsClaim": true,
  "skipWaiting": true
};