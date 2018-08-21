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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./components/game.js\");\n/* harmony import */ var _bricks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bricks */ \"./components/bricks.js\");\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  let canvas = document.getElementById(\"myCanvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let bricks = new _bricks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  bricks.drawBricks();\n  console.log(\"bundle.js is working\");\n  console.log(bricks.drawBricks);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwLmpzP2JhMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBCcmlja3MgZnJvbSAnLi9icmlja3MnO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IGJyaWNrcyA9IG5ldyBCcmlja3MoY3R4KTtcbiAgYnJpY2tzLmRyYXdCcmlja3MoKTtcbiAgY29uc29sZS5sb2coXCJidW5kbGUuanMgaXMgd29ya2luZ1wiKTtcbiAgY29uc29sZS5sb2coYnJpY2tzLmRyYXdCcmlja3MpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/app.js\n");

/***/ }),

/***/ "./components/ball.js":
/*!****************************!*\
  !*** ./components/ball.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n//\n//   render () {\n//     const ballRadius = ballRadius;\n//     const x = x;\n//     const y = y;\n//     const canvas =document.getElementById(\"myCanvas\");\n//     const ctx = canvas.getCon(\"2d\");\n//     // const ball =\n//     ctx.beginPath();\n//     ctx.arc( this.x, this.y, this.ballRadius, 0, Math.PI*2);\n//     ctx.fillStyle = \"#cc3300\";\n//     ctx.fill();\n//     ctx.closePath();\n//\n//   }\n//\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JhbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhbGwuanM/MjE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcbi8vXG4vLyAgIHJlbmRlciAoKSB7XG4vLyAgICAgY29uc3QgYmFsbFJhZGl1cyA9IGJhbGxSYWRpdXM7XG4vLyAgICAgY29uc3QgeCA9IHg7XG4vLyAgICAgY29uc3QgeSA9IHk7XG4vLyAgICAgY29uc3QgY2FudmFzID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuLy8gICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb24oXCIyZFwiKTtcbi8vICAgICAvLyBjb25zdCBiYWxsID1cbi8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgICAgY3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMuYmFsbFJhZGl1cywgMCwgTWF0aC5QSSoyKTtcbi8vICAgICBjdHguZmlsbFN0eWxlID0gXCIjY2MzMzAwXCI7XG4vLyAgICAgY3R4LmZpbGwoKTtcbi8vICAgICBjdHguY2xvc2VQYXRoKCk7XG4vL1xuLy8gICB9XG4vL1xufVxuZXhwb3J0IGRlZmF1bHQgQmFsbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ball.js\n");

/***/ }),

/***/ "./components/bricks.js":
/*!******************************!*\
  !*** ./components/bricks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Brick {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.brickRowCount = 3;\n        this.brickColumnCount = 8;\n        this.brickWidth = 74.4;\n        this.brickHeight = 18;\n        this.brickPadding = 14.4;\n        this.brickOffsetTop = 58;\n        this.brickOffsetLeft= 38;\n\n          this.bricks=[];\n          this.brickX= null;\n          this.brickY= null;\n        }\n\n     drawBricks(){\n       let brick = new Image();\n       brick.src = 'images/green-game-brick.png';\n       this.ctx.drawImage(brick, 0, 0, this.brickWidth, this.brickHeight);\n       //\n       // for ( let c = 0; c < this.brickColumnCount; c++) {\n       //  this.bricks[c] = [];\n       //  for (let r = 0; r < this.brickRowCount; r++ ) {\n       //    this.brickX = this.brickOffsetLeft + (this.brickWidth + this.brickPadding)*c;\n       //    this.brickY = this.brickOffsetTop + (this.brickHeight + this.brickPadding)*r;\n       //    this.bricks[c][r] = {x: this.brickX, y: this.brickY, destroyed: false};\n       //    if ( this.bricks[c][r].destroyed == false)\n          // {\n          //   this.ctx.drawImage(brick,0, 0, this.brickWidth, this.brickHeight);\n          // }\n        }\n\n        // }\n      // }\n    }\n\n\n\n\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Brick);\n  // module.exports = Brick;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JyaWNrcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnJpY2tzLmpzPzQwZTQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQnJpY2sge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5icmlja1Jvd0NvdW50ID0gMztcbiAgICAgICAgdGhpcy5icmlja0NvbHVtbkNvdW50ID0gODtcbiAgICAgICAgdGhpcy5icmlja1dpZHRoID0gNzQuNDtcbiAgICAgICAgdGhpcy5icmlja0hlaWdodCA9IDE4O1xuICAgICAgICB0aGlzLmJyaWNrUGFkZGluZyA9IDE0LjQ7XG4gICAgICAgIHRoaXMuYnJpY2tPZmZzZXRUb3AgPSA1ODtcbiAgICAgICAgdGhpcy5icmlja09mZnNldExlZnQ9IDM4O1xuXG4gICAgICAgICAgdGhpcy5icmlja3M9W107XG4gICAgICAgICAgdGhpcy5icmlja1g9IG51bGw7XG4gICAgICAgICAgdGhpcy5icmlja1k9IG51bGw7XG4gICAgICAgIH1cblxuICAgICBkcmF3QnJpY2tzKCl7XG4gICAgICAgbGV0IGJyaWNrID0gbmV3IEltYWdlKCk7XG4gICAgICAgYnJpY2suc3JjID0gJ2ltYWdlcy9ncmVlbi1nYW1lLWJyaWNrLnBuZyc7XG4gICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJyaWNrLCAwLCAwLCB0aGlzLmJyaWNrV2lkdGgsIHRoaXMuYnJpY2tIZWlnaHQpO1xuICAgICAgIC8vXG4gICAgICAgLy8gZm9yICggbGV0IGMgPSAwOyBjIDwgdGhpcy5icmlja0NvbHVtbkNvdW50OyBjKyspIHtcbiAgICAgICAvLyAgdGhpcy5icmlja3NbY10gPSBbXTtcbiAgICAgICAvLyAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmJyaWNrUm93Q291bnQ7IHIrKyApIHtcbiAgICAgICAvLyAgICB0aGlzLmJyaWNrWCA9IHRoaXMuYnJpY2tPZmZzZXRMZWZ0ICsgKHRoaXMuYnJpY2tXaWR0aCArIHRoaXMuYnJpY2tQYWRkaW5nKSpjO1xuICAgICAgIC8vICAgIHRoaXMuYnJpY2tZID0gdGhpcy5icmlja09mZnNldFRvcCArICh0aGlzLmJyaWNrSGVpZ2h0ICsgdGhpcy5icmlja1BhZGRpbmcpKnI7XG4gICAgICAgLy8gICAgdGhpcy5icmlja3NbY11bcl0gPSB7eDogdGhpcy5icmlja1gsIHk6IHRoaXMuYnJpY2tZLCBkZXN0cm95ZWQ6IGZhbHNlfTtcbiAgICAgICAvLyAgICBpZiAoIHRoaXMuYnJpY2tzW2NdW3JdLmRlc3Ryb3llZCA9PSBmYWxzZSlcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnJpY2ssMCwgMCwgdGhpcy5icmlja1dpZHRoLCB0aGlzLmJyaWNrSGVpZ2h0KTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB9XG4gICAgICAvLyB9XG4gICAgfVxuXG5cblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgQnJpY2s7XG4gIC8vIG1vZHVsZS5leHBvcnRzID0gQnJpY2s7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/bricks.js\n");

/***/ }),

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bricks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bricks */ \"./components/bricks.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./components/ball.js\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle */ \"./components/paddle.js\");\n\n\n\n\nclass Game {\n  constructor(ctx){\n    this.brick = new _bricks__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n    this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    // this.animate();\n    // this.brick.drawBricks();\n  }\n  animate() {\n    // debugger\n    this.brick.drawBricks();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUuanM/MzVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJpY2sgZnJvbSAnLi9icmlja3MnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi9wYWRkbGUnO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmJyaWNrID0gbmV3IEJyaWNrKGN0eCk7XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoY3R4KTtcbiAgICB0aGlzLnBhZGRsZSA9IG5ldyBQYWRkbGUoY3R4KTtcbiAgICAvLyB0aGlzLmFuaW1hdGUoKTtcbiAgICAvLyB0aGlzLmJyaWNrLmRyYXdCcmlja3MoKTtcbiAgfVxuICBhbmltYXRlKCkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgdGhpcy5icmljay5kcmF3QnJpY2tzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game.js\n");

/***/ }),

/***/ "./components/paddle.js":
/*!******************************!*\
  !*** ./components/paddle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Paddle {\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZGRsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFkZGxlLmpzP2JlNGUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFkZGxlIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWRkbGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/paddle.js\n");

/***/ })

/******/ });