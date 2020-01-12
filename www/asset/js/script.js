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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/element-closest/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/element-closest/index.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction polyfill(window) {\n  var ElementPrototype = window.Element.prototype;\n\n  if (typeof ElementPrototype.matches !== 'function') {\n    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {\n      var element = this;\n      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);\n      var index = 0;\n\n      while (elements[index] && elements[index] !== element) {\n        ++index;\n      }\n\n      return Boolean(elements[index]);\n    };\n  }\n\n  if (typeof ElementPrototype.closest !== 'function') {\n    ElementPrototype.closest = function closest(selector) {\n      var element = this;\n\n      while (element && element.nodeType === 1) {\n        if (element.matches(selector)) {\n          return element;\n        }\n\n        element = element.parentNode;\n      }\n\n      return null;\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (polyfill);\n//# sourceMappingURL=index.mjs.map\n\n\n//# sourceURL=webpack:///./node_modules/element-closest/index.mjs?");

/***/ }),

/***/ "./src/js/_module/Inview.js":
/*!**********************************!*\
  !*** ./src/js/_module/Inview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  /**\n   * Constructor\n   */\n  constructor() {\n    // Variables\n    this.$Target = document.querySelectorAll('.-inview');\n    this.$Target_array = Array.prototype.slice.call(this.$Target, 0);\n    this.Option = {\n      root: null,\n      rootMargin: '0px 0px',\n      threshold: 0\n    }; // Functions\n\n    const doWhenIntersect = entries => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.add('-inviewActive');\n          this.Observer.unobserve(entry.target);\n        }\n      });\n    }; // Triggers\n\n\n    this.Observer = new IntersectionObserver(doWhenIntersect, this.Option);\n    this.$Target_array.forEach(item => {\n      this.Observer.observe(item);\n    });\n  }\n\n});\n\n//# sourceURL=webpack:///./src/js/_module/Inview.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var element_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-closest */ \"./node_modules/element-closest/index.mjs\");\n/* harmony import */ var _module_Inview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_module/Inview */ \"./src/js/_module/Inview.js\");\n\n/**\n * CSS\n */\n\n\n/**\n * Polyfill\n */\n\n\nObject(element_closest__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window);\n/**\n * Script\n */\n\n\nnew _module_Inview__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });