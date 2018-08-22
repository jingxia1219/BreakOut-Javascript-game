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

eval("// import React from 'react';\n// import ReactDOM from 'react-dom';\n// import Game from './game';\nconst Game = __webpack_require__(/*! ./game */ \"./components/game.js\");\n// const Bricks = require('./bricks');\n// import Bricks from './bricks';\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  let canvas = document.getElementById(\"myCanvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let canvasW = canvas.width;\n  let canvasH = canvas.height;\n  let game = new Game(canvas, ctx, canvasW, canvasH );\n  // console.log('before animate called');\n  game.animate();\n  // console.log('after animate called');\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwLmpzP2JhMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcbi8vIGNvbnN0IEJyaWNrcyA9IHJlcXVpcmUoJy4vYnJpY2tzJyk7XG4vLyBpbXBvcnQgQnJpY2tzIGZyb20gJy4vYnJpY2tzJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGxldCBjYW52YXNXID0gY2FudmFzLndpZHRoO1xuICBsZXQgY2FudmFzSCA9IGNhbnZhcy5oZWlnaHQ7XG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgsIGNhbnZhc1csIGNhbnZhc0ggKTtcbiAgLy8gY29uc29sZS5sb2coJ2JlZm9yZSBhbmltYXRlIGNhbGxlZCcpO1xuICBnYW1lLmFuaW1hdGUoKTtcbiAgLy8gY29uc29sZS5sb2coJ2FmdGVyIGFuaW1hdGUgY2FsbGVkJyk7XG5cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/app.js\n");

/***/ }),

/***/ "./components/ball.js":
/*!****************************!*\
  !*** ./components/ball.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Ball {\n  constructor(ctx, canvasW, canvasH, x, y) {\n    this.dx = 4;\n    this.dy = -4;\n    this.canvasW = canvasW;\n    this.x = x;\n    this.y = y;\n    this.ctx = ctx;\n    this.ballRadius = 12;\n    this.ballWidth = 24;\n    this.ballHeight = 24;\n    this.image = new Image();\n    this.image.src = './images/break-out-ball.png';\n  }\n\n  createBall() {\n  // this.image.src = './images/break-out-ball.png';\n    this.ctx.drawImage( this.image, this.x, this.y, this.ballWidth, this.ballHeight);\n    // this.ctx.drawImage( this.image, this.x-this.ballRadius+3, this.y, this.ballWidth, this.ballHeight);\n  }\n\n}\nmodule.exports = Ball;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JhbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhbGwuanM/MjE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXLCBjYW52YXNILCB4LCB5KSB7XG4gICAgdGhpcy5keCA9IDQ7XG4gICAgdGhpcy5keSA9IC00O1xuICAgIHRoaXMuY2FudmFzVyA9IGNhbnZhc1c7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFsbFJhZGl1cyA9IDEyO1xuICAgIHRoaXMuYmFsbFdpZHRoID0gMjQ7XG4gICAgdGhpcy5iYWxsSGVpZ2h0ID0gMjQ7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2JyZWFrLW91dC1iYWxsLnBuZyc7XG4gIH1cblxuICBjcmVhdGVCYWxsKCkge1xuICAvLyB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9icmVhay1vdXQtYmFsbC5wbmcnO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSggdGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMuYmFsbFdpZHRoLCB0aGlzLmJhbGxIZWlnaHQpO1xuICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSggdGhpcy5pbWFnZSwgdGhpcy54LXRoaXMuYmFsbFJhZGl1cyszLCB0aGlzLnksIHRoaXMuYmFsbFdpZHRoLCB0aGlzLmJhbGxIZWlnaHQpO1xuICB9XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gQmFsbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ball.js\n");

/***/ }),

/***/ "./components/brick.js":
/*!*****************************!*\
  !*** ./components/brick.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Brick {\n    constructor(ctx, brickWidth, brickHeight, x, y) {\n        this.ctx = ctx; \n        this.brickWidth = brickWidth;\n        this.brickHeight = brickHeight;\n        this.brickX= x;\n        this.brickY= y;\n        this.destroyed = false;\n        this.image = new Image();\n        this.image.src = 'images/green-game-brick.png';\n      }\n\n     drawBrick(){\n       if ( this.destroyed === false) {\n        // this.image.onload = () => this.ctx.drawImage(this.image, this.brickX, this.brickY, this.brickWidth, this.brickHeight);\n         this.ctx.drawImage(this.image, this.brickX, this.brickY, this.brickWidth, this.brickHeight);\n       }\n      }\n  }\n\n  module.exports = Brick;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JyaWNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9icmljay5qcz82NWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJyaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGJyaWNrV2lkdGgsIGJyaWNrSGVpZ2h0LCB4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcbiAgICAgICAgdGhpcy5icmlja1dpZHRoID0gYnJpY2tXaWR0aDtcbiAgICAgICAgdGhpcy5icmlja0hlaWdodCA9IGJyaWNrSGVpZ2h0O1xuICAgICAgICB0aGlzLmJyaWNrWD0geDtcbiAgICAgICAgdGhpcy5icmlja1k9IHk7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnaW1hZ2VzL2dyZWVuLWdhbWUtYnJpY2sucG5nJztcbiAgICAgIH1cblxuICAgICBkcmF3QnJpY2soKXtcbiAgICAgICBpZiAoIHRoaXMuZGVzdHJveWVkID09PSBmYWxzZSkge1xuICAgICAgICAvLyB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmJyaWNrWCwgdGhpcy5icmlja1ksIHRoaXMuYnJpY2tXaWR0aCwgdGhpcy5icmlja0hlaWdodCk7XG4gICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5icmlja1gsIHRoaXMuYnJpY2tZLCB0aGlzLmJyaWNrV2lkdGgsIHRoaXMuYnJpY2tIZWlnaHQpO1xuICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gQnJpY2s7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/brick.js\n");

/***/ }),

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Brick = __webpack_require__(/*! ./brick */ \"./components/brick.js\");\nconst Ball = __webpack_require__(/*! ./ball */ \"./components/ball.js\");\nconst Paddle = __webpack_require__(/*! ./paddle */ \"./components/paddle.js\");\n\nclass Game {\n  constructor(canvas, ctx, canvasW, canvasH ){\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.canvasW = canvasW;\n    this.canvasH = canvasH;\n    this.bricks = [];\n    this.brickRowCount = 3;\n    this.brickColumnCount = 8;\n    this.brickPadding = 14.4;\n    this.brickWidth = 74.4;\n    this.brickHeight = 18;\n    this.brickOffsetTop = 58;\n    this.brickOffsetLeft= 38;\n\n    this.paddle = new Paddle(ctx, canvasW, canvasH);\n    this.x = canvasW/2;\n    this.y = canvasH - 37;\n    this.ball = new Ball(ctx, canvasW, canvasH, this.x, this.y);\n    this.rightPressed = false;\n    this.leftPressed = false;\n\n    this.createBricks();\n    this.paddleListeners();\n    this.ball.createBall();\n  }\n\n  mouseMoveHandler(e) {\n    let relativeX = e.clientX - this.canvas.offsetLeft;\n    if ( relativeX > this.paddle.paddleWidth/2+ 3 && relativeX < this.paddle.canvasW - this.paddle.paddleWidth/2 - 3 ) {\n      this.paddle.paddleX = relativeX - this.paddle.paddleWidth/2;\n    }\n  }\n  keyDownHandler(e) {\n    if (e.keyCode == 39) {\n      this.rightPressed = true;\n    } else if (e.keyCode == 37 ) {\n      this.leftPressed = true;\n    }\n  }\n  keyUpHandler(e) {\n    if (e.keyCode == 39 ) {\n      this.rightPressed = false;\n    } else if (e.keyCode == 37 )  {\n      this.leftPressed = false;\n    }\n  }\n  paddleListeners() {\n    document.addEventListener(\"keydown\", this.keyDownHandler.bind(this), false);\n    document.addEventListener(\"keyup\", this.keyUpHandler.bind(this), false);\n    document.addEventListener(\"mousemove\", this.mouseMoveHandler.bind(this), false);\n\n}\n\n  movePaddle(){\n    // if (this.paddle.paddleX > this.paddle.paddleWidth/2 && this.paddle.paddleX < this.canvasW - this.paddle.paddleWidth/2 ) {\n      if ( this.rightPressed && this.paddle.paddleX + this.paddle.paddleWidth <= this.canvasW - 7) {\n      this.paddle.paddleX+= 7;\n    } else if ( this.leftPressed && this.paddle.paddleX > 7) {\n      this.paddle.paddleX-= 7;\n      }\n    }\n  // }\n\n  createBricks() {\n    for( let c = 0; c < 3; c++ ) {\n      for ( let r = 0; r < 8; r ++) {\n        let x = this.brickOffsetLeft + (r * this.brickWidth) + (r * this.brickPadding);\n        let y =this.brickOffsetTop + (c * this.brickHeight) + (c* this.brickPadding);\n        let brick = new Brick(this.ctx, this.brickWidth, this.brickHeight, x, y);\n        this.bricks.push(brick);\n      }\n    }\n\n  }\n\n  drawBricks(){\n      this.bricks.forEach( brick => brick.drawBrick());\n  }\n  // moveBall() {\n  //   if ( this.ball.x > 0 && this.ball.x < this.canvasW && this.ball.y < this.canvasH)\n  //   this.ball.x += 2;\n  //   this.ball.y += -2;\n  // }\n  drawBall(){\n    this.ctx.drawImage( this.ball.image, this.ball.x-this.ball.ballRadius, this.ball.y+5, this.ball.ballWidth, this.ball.ballHeight);\n    if ( this.ball.x > 0 && this.ball.x < this.canvasW && this.ball.y < this.canvasH)\n    this.ball.x += this.ball.dx;\n    this.ball.y += this.ball.dy;\n  }\n  collisionDetection() {\n    if (this.ball.x - this.ball.ballRadius <= 0 || this.ball.x + this.ball.ballWidth >= this.canvasW) {\n      this.ball.dx = -this.ball.dx;\n    }\n    if ( this.ball.y <= 0 ) {\n      this.ball.dy = -this.ball.dy;\n    }\n    this.bricks.forEach( brick => {\n      if (this.ball.y + this.ball.ballHeight >= brick.brickY && this.ball.y <= brick.brickY + brick.brickHeight\n        && this.ball.x + this.ball.ballWidth >= brick.brickX && this.ball.x <= brick.brickX + brick.brickWidth && brick.destroyed === false) {\n        brick.destroyed = true;\n        // this.bricks.\n        this.ball.dy = -this.ball.dy;\n        console.log(this.ball.dy);\n        // this.animate();\n      }\n    }\n  );\n    if (this.ball.y + this.ball.ballHeight >= this.canvasH - this.paddle.paddleHeight && this.ball.x > this.paddle.paddleX && this.ball.x < this.paddle.paddleX+ this.paddle.paddleWidth) {\n      this.ball.dy = -this.ball.dy;\n      this.ball.dy+=0.15;\n      if ( this.ball.dx > 0) {\n        this.ball.dx+=0.15;\n      } else {\n        this.ball.dx -=0.15;\n      }\n    }\n  }\n  animate() {\n    // console.log('log?',this.bricks);\n    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);\n    this.drawBricks();\n    this.drawBall();\n    this.paddle.drawPaddle();\n    this.movePaddle();\n    // this.ball.createBall();\n    // this.moveBall();\n    this.collisionDetection();\n    requestAnimationFrame(this.animate.bind(this));\n    // setTimeout(this.animate.bind(this), 100);\n  }\n}\n\nmodule.exports = Game;\n// export default Game;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUuanM/MzVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCcmljayA9IHJlcXVpcmUoJy4vYnJpY2snKTtcbmNvbnN0IEJhbGwgPSByZXF1aXJlKCcuL2JhbGwnKTtcbmNvbnN0IFBhZGRsZSA9IHJlcXVpcmUoJy4vcGFkZGxlJyk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgY2FudmFzVywgY2FudmFzSCApe1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzVyA9IGNhbnZhc1c7XG4gICAgdGhpcy5jYW52YXNIID0gY2FudmFzSDtcbiAgICB0aGlzLmJyaWNrcyA9IFtdO1xuICAgIHRoaXMuYnJpY2tSb3dDb3VudCA9IDM7XG4gICAgdGhpcy5icmlja0NvbHVtbkNvdW50ID0gODtcbiAgICB0aGlzLmJyaWNrUGFkZGluZyA9IDE0LjQ7XG4gICAgdGhpcy5icmlja1dpZHRoID0gNzQuNDtcbiAgICB0aGlzLmJyaWNrSGVpZ2h0ID0gMTg7XG4gICAgdGhpcy5icmlja09mZnNldFRvcCA9IDU4O1xuICAgIHRoaXMuYnJpY2tPZmZzZXRMZWZ0PSAzODtcblxuICAgIHRoaXMucGFkZGxlID0gbmV3IFBhZGRsZShjdHgsIGNhbnZhc1csIGNhbnZhc0gpO1xuICAgIHRoaXMueCA9IGNhbnZhc1cvMjtcbiAgICB0aGlzLnkgPSBjYW52YXNIIC0gMzc7XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoY3R4LCBjYW52YXNXLCBjYW52YXNILCB0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNyZWF0ZUJyaWNrcygpO1xuICAgIHRoaXMucGFkZGxlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5iYWxsLmNyZWF0ZUJhbGwoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGxldCByZWxhdGl2ZVggPSBlLmNsaWVudFggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgIGlmICggcmVsYXRpdmVYID4gdGhpcy5wYWRkbGUucGFkZGxlV2lkdGgvMisgMyAmJiByZWxhdGl2ZVggPCB0aGlzLnBhZGRsZS5jYW52YXNXIC0gdGhpcy5wYWRkbGUucGFkZGxlV2lkdGgvMiAtIDMgKSB7XG4gICAgICB0aGlzLnBhZGRsZS5wYWRkbGVYID0gcmVsYXRpdmVYIC0gdGhpcy5wYWRkbGUucGFkZGxlV2lkdGgvMjtcbiAgICB9XG4gIH1cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNyApIHtcbiAgICAgIHRoaXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkgKSB7XG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM3ICkgIHtcbiAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcGFkZGxlTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG59XG5cbiAgbW92ZVBhZGRsZSgpe1xuICAgIC8vIGlmICh0aGlzLnBhZGRsZS5wYWRkbGVYID4gdGhpcy5wYWRkbGUucGFkZGxlV2lkdGgvMiAmJiB0aGlzLnBhZGRsZS5wYWRkbGVYIDwgdGhpcy5jYW52YXNXIC0gdGhpcy5wYWRkbGUucGFkZGxlV2lkdGgvMiApIHtcbiAgICAgIGlmICggdGhpcy5yaWdodFByZXNzZWQgJiYgdGhpcy5wYWRkbGUucGFkZGxlWCArIHRoaXMucGFkZGxlLnBhZGRsZVdpZHRoIDw9IHRoaXMuY2FudmFzVyAtIDcpIHtcbiAgICAgIHRoaXMucGFkZGxlLnBhZGRsZVgrPSA3O1xuICAgIH0gZWxzZSBpZiAoIHRoaXMubGVmdFByZXNzZWQgJiYgdGhpcy5wYWRkbGUucGFkZGxlWCA+IDcpIHtcbiAgICAgIHRoaXMucGFkZGxlLnBhZGRsZVgtPSA3O1xuICAgICAgfVxuICAgIH1cbiAgLy8gfVxuXG4gIGNyZWF0ZUJyaWNrcygpIHtcbiAgICBmb3IoIGxldCBjID0gMDsgYyA8IDM7IGMrKyApIHtcbiAgICAgIGZvciAoIGxldCByID0gMDsgciA8IDg7IHIgKyspIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJyaWNrT2Zmc2V0TGVmdCArIChyICogdGhpcy5icmlja1dpZHRoKSArIChyICogdGhpcy5icmlja1BhZGRpbmcpO1xuICAgICAgICBsZXQgeSA9dGhpcy5icmlja09mZnNldFRvcCArIChjICogdGhpcy5icmlja0hlaWdodCkgKyAoYyogdGhpcy5icmlja1BhZGRpbmcpO1xuICAgICAgICBsZXQgYnJpY2sgPSBuZXcgQnJpY2sodGhpcy5jdHgsIHRoaXMuYnJpY2tXaWR0aCwgdGhpcy5icmlja0hlaWdodCwgeCwgeSk7XG4gICAgICAgIHRoaXMuYnJpY2tzLnB1c2goYnJpY2spO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZHJhd0JyaWNrcygpe1xuICAgICAgdGhpcy5icmlja3MuZm9yRWFjaCggYnJpY2sgPT4gYnJpY2suZHJhd0JyaWNrKCkpO1xuICB9XG4gIC8vIG1vdmVCYWxsKCkge1xuICAvLyAgIGlmICggdGhpcy5iYWxsLnggPiAwICYmIHRoaXMuYmFsbC54IDwgdGhpcy5jYW52YXNXICYmIHRoaXMuYmFsbC55IDwgdGhpcy5jYW52YXNIKVxuICAvLyAgIHRoaXMuYmFsbC54ICs9IDI7XG4gIC8vICAgdGhpcy5iYWxsLnkgKz0gLTI7XG4gIC8vIH1cbiAgZHJhd0JhbGwoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoIHRoaXMuYmFsbC5pbWFnZSwgdGhpcy5iYWxsLngtdGhpcy5iYWxsLmJhbGxSYWRpdXMsIHRoaXMuYmFsbC55KzUsIHRoaXMuYmFsbC5iYWxsV2lkdGgsIHRoaXMuYmFsbC5iYWxsSGVpZ2h0KTtcbiAgICBpZiAoIHRoaXMuYmFsbC54ID4gMCAmJiB0aGlzLmJhbGwueCA8IHRoaXMuY2FudmFzVyAmJiB0aGlzLmJhbGwueSA8IHRoaXMuY2FudmFzSClcbiAgICB0aGlzLmJhbGwueCArPSB0aGlzLmJhbGwuZHg7XG4gICAgdGhpcy5iYWxsLnkgKz0gdGhpcy5iYWxsLmR5O1xuICB9XG4gIGNvbGxpc2lvbkRldGVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5iYWxsLnggLSB0aGlzLmJhbGwuYmFsbFJhZGl1cyA8PSAwIHx8IHRoaXMuYmFsbC54ICsgdGhpcy5iYWxsLmJhbGxXaWR0aCA+PSB0aGlzLmNhbnZhc1cpIHtcbiAgICAgIHRoaXMuYmFsbC5keCA9IC10aGlzLmJhbGwuZHg7XG4gICAgfVxuICAgIGlmICggdGhpcy5iYWxsLnkgPD0gMCApIHtcbiAgICAgIHRoaXMuYmFsbC5keSA9IC10aGlzLmJhbGwuZHk7XG4gICAgfVxuICAgIHRoaXMuYnJpY2tzLmZvckVhY2goIGJyaWNrID0+IHtcbiAgICAgIGlmICh0aGlzLmJhbGwueSArIHRoaXMuYmFsbC5iYWxsSGVpZ2h0ID49IGJyaWNrLmJyaWNrWSAmJiB0aGlzLmJhbGwueSA8PSBicmljay5icmlja1kgKyBicmljay5icmlja0hlaWdodFxuICAgICAgICAmJiB0aGlzLmJhbGwueCArIHRoaXMuYmFsbC5iYWxsV2lkdGggPj0gYnJpY2suYnJpY2tYICYmIHRoaXMuYmFsbC54IDw9IGJyaWNrLmJyaWNrWCArIGJyaWNrLmJyaWNrV2lkdGggJiYgYnJpY2suZGVzdHJveWVkID09PSBmYWxzZSkge1xuICAgICAgICBicmljay5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmJyaWNrcy5cbiAgICAgICAgdGhpcy5iYWxsLmR5ID0gLXRoaXMuYmFsbC5keTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYWxsLmR5KTtcbiAgICAgICAgLy8gdGhpcy5hbmltYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICAgIGlmICh0aGlzLmJhbGwueSArIHRoaXMuYmFsbC5iYWxsSGVpZ2h0ID49IHRoaXMuY2FudmFzSCAtIHRoaXMucGFkZGxlLnBhZGRsZUhlaWdodCAmJiB0aGlzLmJhbGwueCA+IHRoaXMucGFkZGxlLnBhZGRsZVggJiYgdGhpcy5iYWxsLnggPCB0aGlzLnBhZGRsZS5wYWRkbGVYKyB0aGlzLnBhZGRsZS5wYWRkbGVXaWR0aCkge1xuICAgICAgdGhpcy5iYWxsLmR5ID0gLXRoaXMuYmFsbC5keTtcbiAgICAgIHRoaXMuYmFsbC5keSs9MC4xNTtcbiAgICAgIGlmICggdGhpcy5iYWxsLmR4ID4gMCkge1xuICAgICAgICB0aGlzLmJhbGwuZHgrPTAuMTU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJhbGwuZHggLT0wLjE1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhbmltYXRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2c/Jyx0aGlzLmJyaWNrcyk7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzVywgdGhpcy5jYW52YXNIKTtcbiAgICB0aGlzLmRyYXdCcmlja3MoKTtcbiAgICB0aGlzLmRyYXdCYWxsKCk7XG4gICAgdGhpcy5wYWRkbGUuZHJhd1BhZGRsZSgpO1xuICAgIHRoaXMubW92ZVBhZGRsZSgpO1xuICAgIC8vIHRoaXMuYmFsbC5jcmVhdGVCYWxsKCk7XG4gICAgLy8gdGhpcy5tb3ZlQmFsbCgpO1xuICAgIHRoaXMuY29sbGlzaW9uRGV0ZWN0aW9uKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyBzZXRUaW1lb3V0KHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpLCAxMDApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbi8vIGV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game.js\n");

/***/ }),

/***/ "./components/paddle.js":
/*!******************************!*\
  !*** ./components/paddle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Paddle {\n  constructor(ctx, canvasW, canvasH) {\n    this.ctx = ctx;\n    this.canvasH = canvasH;\n    this.canvasW = canvasW;\n    this.paddleHeight = 12;\n    this.paddleWidth = 91;\n    this.paddleX = ( canvasW - this.paddleWidth)/2;\n  }\n\n  drawPaddle() {\n    // this.ctx.fillStyle='yellow';\n    // this.ctx.fillRect(10,10,250,100);\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'yellow';\n    // console.log(this.canvasW);\n    // console.log('paddlex', this.paddleX);\n    this.ctx.fillRect(this.paddleX, this.canvasH - this.paddleHeight -0.5, this.paddleWidth, this.paddleHeight);\n    this.ctx.closePath();\n  }\n}\n\nmodule.exports = Paddle;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZGRsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFkZGxlLmpzP2JlNGUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFkZGxlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXLCBjYW52YXNIKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNIID0gY2FudmFzSDtcbiAgICB0aGlzLmNhbnZhc1cgPSBjYW52YXNXO1xuICAgIHRoaXMucGFkZGxlSGVpZ2h0ID0gMTI7XG4gICAgdGhpcy5wYWRkbGVXaWR0aCA9IDkxO1xuICAgIHRoaXMucGFkZGxlWCA9ICggY2FudmFzVyAtIHRoaXMucGFkZGxlV2lkdGgpLzI7XG4gIH1cblxuICBkcmF3UGFkZGxlKCkge1xuICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZT0neWVsbG93JztcbiAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCgxMCwxMCwyNTAsMTAwKTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhbnZhc1cpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdwYWRkbGV4JywgdGhpcy5wYWRkbGVYKTtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBhZGRsZVgsIHRoaXMuY2FudmFzSCAtIHRoaXMucGFkZGxlSGVpZ2h0IC0wLjUsIHRoaXMucGFkZGxlV2lkdGgsIHRoaXMucGFkZGxlSGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZGRsZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/paddle.js\n");

/***/ })

/******/ });