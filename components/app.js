// import React from 'react';
// import ReactDOM from 'react-dom';
// import Game from './game';
const Game = require('./game');
// const Bricks = require('./bricks');
// import Bricks from './bricks';


document.addEventListener("DOMContentLoaded", ()=>{
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let canvasW = canvas.width;
  let canvasH = canvas.height;
  let game = new Game(ctx, canvasW, canvasH );
  // let game = new Bricks(ctx);
  // bricks.drawBricks();
  // game.animate();

});
