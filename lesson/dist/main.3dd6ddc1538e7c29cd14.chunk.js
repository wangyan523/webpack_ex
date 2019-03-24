(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hello, wyyyyyy');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('service-worker registed');
    }).catch(error => {
      console.log('service-worker error');
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.3dd6ddc1538e7c29cd14.chunk.js.map