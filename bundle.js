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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import React from 'react';\n// import ReactDOM from 'react-dom';\n// import Game from './game';\nconst Game = __webpack_require__(/*! ./game */ \"./components/game.js\");\n// const Bricks = require('./bricks');\n// import Bricks from './bricks';\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  let canvas = document.getElementById(\"myCanvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let canvasW = canvas.width;\n  let canvasH = canvas.height;\n  let game = new Game(ctx, canvasW, canvasH );\n  // let game = new Bricks(ctx);\n  // bricks.drawBricks();\n  // game.animate();\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwLmpzP2JhMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcbi8vIGNvbnN0IEJyaWNrcyA9IHJlcXVpcmUoJy4vYnJpY2tzJyk7XG4vLyBpbXBvcnQgQnJpY2tzIGZyb20gJy4vYnJpY2tzJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGxldCBjYW52YXNXID0gY2FudmFzLndpZHRoO1xuICBsZXQgY2FudmFzSCA9IGNhbnZhcy5oZWlnaHQ7XG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBjYW52YXNXLCBjYW52YXNIICk7XG4gIC8vIGxldCBnYW1lID0gbmV3IEJyaWNrcyhjdHgpO1xuICAvLyBicmlja3MuZHJhd0JyaWNrcygpO1xuICAvLyBnYW1lLmFuaW1hdGUoKTtcblxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/app.js\n");

/***/ }),

/***/ "./components/ball.js":
/*!****************************!*\
  !*** ./components/ball.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Ball {\n  constructor(ctx, canvasW, canvasH) {\n    this.dx = 2;\n    this.dy = -2;\n    this.canvasW = canvasW;\n    this.x = canvasW/2;\n    this.y = canvasH - 35;\n    this.ctx = ctx;\n    this.ballRadius = 12;\n    this.ballWidth = 24;\n    this.ballHeight = 24;\n    this.image = new Image();\n    this.image.src = './images/break-out-ball.png';\n  }\n\n  drawBall() {\n    console.log(this.canvasW);\n    console.log('x',this.x);\n    this.image.onload = () => this.ctx.drawImage( this.image, this.x-this.ballRadius+3, this.y, this.ballWidth, this.ballHeight);\n  }\n\n}\nmodule.exports = Ball;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JhbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhbGwuanM/MjE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXLCBjYW52YXNIKSB7XG4gICAgdGhpcy5keCA9IDI7XG4gICAgdGhpcy5keSA9IC0yO1xuICAgIHRoaXMuY2FudmFzVyA9IGNhbnZhc1c7XG4gICAgdGhpcy54ID0gY2FudmFzVy8yO1xuICAgIHRoaXMueSA9IGNhbnZhc0ggLSAzNTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhbGxSYWRpdXMgPSAxMjtcbiAgICB0aGlzLmJhbGxXaWR0aCA9IDI0O1xuICAgIHRoaXMuYmFsbEhlaWdodCA9IDI0O1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9icmVhay1vdXQtYmFsbC5wbmcnO1xuICB9XG5cbiAgZHJhd0JhbGwoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jYW52YXNXKTtcbiAgICBjb25zb2xlLmxvZygneCcsdGhpcy54KTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuY3R4LmRyYXdJbWFnZSggdGhpcy5pbWFnZSwgdGhpcy54LXRoaXMuYmFsbFJhZGl1cyszLCB0aGlzLnksIHRoaXMuYmFsbFdpZHRoLCB0aGlzLmJhbGxIZWlnaHQpO1xuICB9XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gQmFsbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ball.js\n");

/***/ }),

/***/ "./components/brick.js":
/*!*****************************!*\
  !*** ./components/brick.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Brick {\n    constructor(ctx, brickWidth, brickHeight, x, y) {\n        this.ctx = ctx;\n        this.brickWidth = brickWidth;\n        this.brickHeight = brickHeight;\n        this.brickX= x;\n        this.brickY= y;\n        this.destroyed = false;\n        this.image = new Image();\n        this.image.src = 'images/green-game-brick.png';\n      }\n\n     drawBrick(){\n       if ( this.destroyed === false) {\n        this.image.onload = () => this.ctx.drawImage(this.image, this.brickX, this.brickY, this.brickWidth, this.brickHeight);\n       }\n      }\n  }\n\n  module.exports = Brick;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JyaWNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9icmljay5qcz82NWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJyaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGJyaWNrV2lkdGgsIGJyaWNrSGVpZ2h0LCB4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmJyaWNrV2lkdGggPSBicmlja1dpZHRoO1xuICAgICAgICB0aGlzLmJyaWNrSGVpZ2h0ID0gYnJpY2tIZWlnaHQ7XG4gICAgICAgIHRoaXMuYnJpY2tYPSB4O1xuICAgICAgICB0aGlzLmJyaWNrWT0geTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICdpbWFnZXMvZ3JlZW4tZ2FtZS1icmljay5wbmcnO1xuICAgICAgfVxuXG4gICAgIGRyYXdCcmljaygpe1xuICAgICAgIGlmICggdGhpcy5kZXN0cm95ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuYnJpY2tYLCB0aGlzLmJyaWNrWSwgdGhpcy5icmlja1dpZHRoLCB0aGlzLmJyaWNrSGVpZ2h0KTtcbiAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IEJyaWNrO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/brick.js\n");

/***/ }),

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Brick = __webpack_require__(/*! ./brick */ \"./components/brick.js\");\n// import Brick from './bricks';\nconst Ball = __webpack_require__(/*! ./ball */ \"./components/ball.js\");\n// import Ball from './ball';\nconst Paddle = __webpack_require__(/*! ./paddle */ \"./components/paddle.js\");\n// import Paddle from './paddle';\n\nclass Game {\n  constructor(ctx, canvasW, canvasH ){\n    this.ctx = ctx;\n    this.canvasW = canvasW;\n    this.canvasH = canvasH;\n    // this.ball = new Ball(ctx);\n    this.bricks = [];\n    this.brickRowCount = 3;\n    this.brickColumnCount = 8;\n    this.brickPadding = 14.4;\n    this.brickWidth = 74.4;\n    this.brickHeight = 18;\n    this.brickOffsetTop = 58;\n    this.brickOffsetLeft= 38;\n    this.paddle = new Paddle(ctx, canvasW, canvasH);\n    this.ball = new Ball(ctx, canvasW, canvasH);\n    this.drawboard();\n    // requestAnimationFrame(this.animate);\n  }\n\n  drawboard() {\n    for( let c = 0; c < 3; c++ ) {\n      for ( let r = 0; r < 8; r ++) {\n        let x = this.brickOffsetLeft + (r * this.brickWidth) + (r * this.brickPadding);\n        let y =this.brickOffsetTop + (c * this.brickHeight) + (c* this.brickPadding);\n        let brick = new Brick(this.ctx, this.brickWidth, this.brickHeight, x, y);\n        this.bricks.push(brick);\n      }\n      this.bricks.forEach( brick => brick.drawBrick());\n    }\n    this.paddle.drawPaddle();\n    this.ball.drawBall();\n  }\n\n  moveBall() {\n    console.log('moving?');\n    this.ball.x += this.ball.dx;\n    this.ball.y += this.ball.dy;\n  }\n  animate() {\n    this.moveBall();\n    this.drawboard();\n    // clear canvas\n    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);\n    setInterval(this.animate.bind(this), 10);\n    // requestAnimationFrame(this.animate);\n    // moveBall();\n\n    // drawBall()\n    // drawBricks() ### draw all the bircks in the bricks array\n    // detectCollisions(); ### if ball collides with brick, remove brick from array\n    // requestAnimationFrame(this.animate);\n  }\n}\n\nmodule.exports = Game;\n// export default Game;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUuanM/MzVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCcmljayA9IHJlcXVpcmUoJy4vYnJpY2snKTtcbi8vIGltcG9ydCBCcmljayBmcm9tICcuL2JyaWNrcyc7XG5jb25zdCBCYWxsID0gcmVxdWlyZSgnLi9iYWxsJyk7XG4vLyBpbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuY29uc3QgUGFkZGxlID0gcmVxdWlyZSgnLi9wYWRkbGUnKTtcbi8vIGltcG9ydCBQYWRkbGUgZnJvbSAnLi9wYWRkbGUnO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXLCBjYW52YXNIICl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNXID0gY2FudmFzVztcbiAgICB0aGlzLmNhbnZhc0ggPSBjYW52YXNIO1xuICAgIC8vIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGN0eCk7XG4gICAgdGhpcy5icmlja3MgPSBbXTtcbiAgICB0aGlzLmJyaWNrUm93Q291bnQgPSAzO1xuICAgIHRoaXMuYnJpY2tDb2x1bW5Db3VudCA9IDg7XG4gICAgdGhpcy5icmlja1BhZGRpbmcgPSAxNC40O1xuICAgIHRoaXMuYnJpY2tXaWR0aCA9IDc0LjQ7XG4gICAgdGhpcy5icmlja0hlaWdodCA9IDE4O1xuICAgIHRoaXMuYnJpY2tPZmZzZXRUb3AgPSA1ODtcbiAgICB0aGlzLmJyaWNrT2Zmc2V0TGVmdD0gMzg7XG4gICAgdGhpcy5wYWRkbGUgPSBuZXcgUGFkZGxlKGN0eCwgY2FudmFzVywgY2FudmFzSCk7XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoY3R4LCBjYW52YXNXLCBjYW52YXNIKTtcbiAgICB0aGlzLmRyYXdib2FyZCgpO1xuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG5cbiAgZHJhd2JvYXJkKCkge1xuICAgIGZvciggbGV0IGMgPSAwOyBjIDwgMzsgYysrICkge1xuICAgICAgZm9yICggbGV0IHIgPSAwOyByIDwgODsgciArKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuYnJpY2tPZmZzZXRMZWZ0ICsgKHIgKiB0aGlzLmJyaWNrV2lkdGgpICsgKHIgKiB0aGlzLmJyaWNrUGFkZGluZyk7XG4gICAgICAgIGxldCB5ID10aGlzLmJyaWNrT2Zmc2V0VG9wICsgKGMgKiB0aGlzLmJyaWNrSGVpZ2h0KSArIChjKiB0aGlzLmJyaWNrUGFkZGluZyk7XG4gICAgICAgIGxldCBicmljayA9IG5ldyBCcmljayh0aGlzLmN0eCwgdGhpcy5icmlja1dpZHRoLCB0aGlzLmJyaWNrSGVpZ2h0LCB4LCB5KTtcbiAgICAgICAgdGhpcy5icmlja3MucHVzaChicmljayk7XG4gICAgICB9XG4gICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKCBicmljayA9PiBicmljay5kcmF3QnJpY2soKSk7XG4gICAgfVxuICAgIHRoaXMucGFkZGxlLmRyYXdQYWRkbGUoKTtcbiAgICB0aGlzLmJhbGwuZHJhd0JhbGwoKTtcbiAgfVxuXG4gIG1vdmVCYWxsKCkge1xuICAgIGNvbnNvbGUubG9nKCdtb3Zpbmc/Jyk7XG4gICAgdGhpcy5iYWxsLnggKz0gdGhpcy5iYWxsLmR4O1xuICAgIHRoaXMuYmFsbC55ICs9IHRoaXMuYmFsbC5keTtcbiAgfVxuICBhbmltYXRlKCkge1xuICAgIHRoaXMubW92ZUJhbGwoKTtcbiAgICB0aGlzLmRyYXdib2FyZCgpO1xuICAgIC8vIGNsZWFyIGNhbnZhc1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1csIHRoaXMuY2FudmFzSCk7XG4gICAgc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlLmJpbmQodGhpcyksIDEwKTtcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAvLyBtb3ZlQmFsbCgpO1xuXG4gICAgLy8gZHJhd0JhbGwoKVxuICAgIC8vIGRyYXdCcmlja3MoKSAjIyMgZHJhdyBhbGwgdGhlIGJpcmNrcyBpbiB0aGUgYnJpY2tzIGFycmF5XG4gICAgLy8gZGV0ZWN0Q29sbGlzaW9ucygpOyAjIyMgaWYgYmFsbCBjb2xsaWRlcyB3aXRoIGJyaWNrLCByZW1vdmUgYnJpY2sgZnJvbSBhcnJheVxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbi8vIGV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game.js\n");

/***/ }),

/***/ "./components/paddle.js":
/*!******************************!*\
  !*** ./components/paddle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Paddle {\n  constructor(ctx, canvasW, canvasH) {\n    this.ctx = ctx;\n    this.canvasH = canvasH;\n    this.canvasW = canvasW;\n    this.paddleHeight = 12;\n    this.paddleWidth = 91;\n    this.paddleX = ( canvasW - this.paddleWidth)/2;\n  }\n\n  drawPaddle() {\n    // this.ctx.fillStyle='yellow';\n    // this.ctx.fillRect(10,10,250,100);\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'yellow';\n    console.log(this.canvasW);\n    console.log('paddlex', this.paddleX);\n    this.ctx.fillRect(this.paddleX, this.canvasH - this.paddleHeight, this.paddleWidth, this.paddleHeight);\n    this.ctx.closePath();\n  }\n}\n\nmodule.exports = Paddle;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZGRsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFkZGxlLmpzP2JlNGUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFkZGxlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXLCBjYW52YXNIKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNIID0gY2FudmFzSDtcbiAgICB0aGlzLmNhbnZhc1cgPSBjYW52YXNXO1xuICAgIHRoaXMucGFkZGxlSGVpZ2h0ID0gMTI7XG4gICAgdGhpcy5wYWRkbGVXaWR0aCA9IDkxO1xuICAgIHRoaXMucGFkZGxlWCA9ICggY2FudmFzVyAtIHRoaXMucGFkZGxlV2lkdGgpLzI7XG4gIH1cblxuICBkcmF3UGFkZGxlKCkge1xuICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZT0neWVsbG93JztcbiAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCgxMCwxMCwyNTAsMTAwKTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhbnZhc1cpO1xuICAgIGNvbnNvbGUubG9nKCdwYWRkbGV4JywgdGhpcy5wYWRkbGVYKTtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBhZGRsZVgsIHRoaXMuY2FudmFzSCAtIHRoaXMucGFkZGxlSGVpZ2h0LCB0aGlzLnBhZGRsZVdpZHRoLCB0aGlzLnBhZGRsZUhlaWdodCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYWRkbGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/paddle.js\n");

/***/ })

/******/ });