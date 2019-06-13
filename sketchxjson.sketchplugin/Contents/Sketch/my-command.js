var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/*! exports provided: drawRect, drawText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRect", function() { return drawRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawText", function() { return drawText; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);
// import sketch from 'sketch/dom'


function drawRect(parentArtboard) {
  return new sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    parent: parentArtboard,
    frame: new sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 375, 80),
    style: {
      // borders: [{
      //   color: '#E93D3D',
      //   position: Style.BorderPosition.Inside,
      // }],
      fills: [{
        color: '#BABABA',
        fillType: sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Style"].FillType.Color
      }],
      shadows: [{
        color: '#9C9C9C',
        blur: 3
      }]
    }
  });
}
function drawText(parentArtboard) {
  return new sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Text"]({
    name: "TextLayer",
    parent: parentArtboard,
    text: "some text",
    alignment: sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Text"].Alignment.center
  });
}

/***/ }),

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods */ "./src/methods.js");


 // documentation: https://developer.sketchapp.com/reference/api/

var document = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
var page = document.selectedPage;
var selection = document.selectedLayers;
var Group = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.Group;
var Shape = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.Shape;
var Rectangle = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle;
var Style = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.Style; // example uses of Group, Shape, Rectangle
// var group = new Group({
//   parent: page,
//   frame: new Rectangle(0, 0, 100, 100),
//   name: 'Test',
//   selected: true,
// })

var art = new sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.Artboard({
  name: 'Plugin Artboard',
  flowStartPoint: true,
  parent: page,
  frame: new Rectangle(0, 0, 395, 100)
}); // var rect = new Shape({
//   parent: art,
//   frame: new Rectangle(10, 10, 375, 80),
//   style: {
//     // borders: [{
//     //   color: '#E93D3D',
//     //   position: Style.BorderPosition.Inside,
//     // }],
//     fills: [
//       {
//         color: '#BABABA',
//         fillType: Style.FillType.Color,
//       },
//     ],
//     shadows: [
//       {
//         color: '#9C9C9C',
//         blur: 3,
//       },
//     ]
//   }
// })
// "render" method

/* harmony default export */ __webpack_exports__["default"] = (function () {
  sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.message("It's alive 🙌");
  Object(_methods__WEBPACK_IMPORTED_MODULE_2__["drawRect"])(art);
  Object(_methods__WEBPACK_IMPORTED_MODULE_2__["drawText"])(art); // console.log(art.toJSON()) // works
});

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map