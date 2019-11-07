/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.ts":
/*!*******************!*\
  !*** ./src/sw.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst CACHE_NAME = 'cache-v1-vubhub.be';\nconst urlsToCache = [\n    // '/',\n    // '/static/blog/main.css',\n    // '/static/blog/js/index.bundle.js',\n    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',\n    'https://code.jquery.com/jquery-3.2.1.slim.min.js',\n    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',\n    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',\n];\nself.addEventListener('install', function (event) {\n    // @ts-ignore\n    event.waitUntil(caches.open(CACHE_NAME)\n        .then(function (cache) {\n        console.log('Opened cache');\n        return cache.addAll(urlsToCache);\n    }));\n});\nself.addEventListener('fetch', function (event) {\n    // @ts-ignore\n    event.respondWith(\n    // @ts-ignore\n    caches.match(event.request)\n        .then(function (response) {\n        // Cache hit - return response\n        if (response) {\n            return response;\n        }\n        // @ts-ignore\n        return fetch(event.request);\n    }));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3cudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3cudHM/NzQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQUNIRV9OQU1FID0gJ2NhY2hlLXYxLXZ1Ymh1Yi5iZSc7XG5jb25zdCB1cmxzVG9DYWNoZSA9IFtcbiAgICAvLyAnLycsXG4gICAgLy8gJy9zdGF0aWMvYmxvZy9tYWluLmNzcycsXG4gICAgLy8gJy9zdGF0aWMvYmxvZy9qcy9pbmRleC5idW5kbGUuanMnLFxuICAgICdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnLFxuICAgICdodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4yLjEuc2xpbS5taW4uanMnLFxuICAgICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xMi45L3VtZC9wb3BwZXIubWluLmpzJyxcbiAgICAnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvanMvYm9vdHN0cmFwLm1pbi5qcycsXG5dO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZXZlbnQud2FpdFVudGlsKFxuICAgICAgICBjYWNoZXMub3BlbihDQUNIRV9OQU1FKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09wZW5lZCBjYWNoZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwodXJsc1RvQ2FjaGUpO1xuICAgICAgICAgICAgfSlcbiAgICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBoaXQgLSByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sw.ts\n");

/***/ })

/******/ });