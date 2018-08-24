// import React from 'react';
// import ReactDOM from 'react-dom';
// import Game from './game';
const Game = require('./game');
// const Bricks = require('./bricks');



function newGame() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let canvasW = canvas.width;
  let canvasH = canvas.height;
  let game = new Game(canvas, ctx, canvasW, canvasH );
  game.animate();
  console.log('new game');
}

document.addEventListener("DOMContentLoaded",()=> {
  document.getElementById("restart-button").addEventListener('click', () => newGame());
  newGame();
});

// module.exports = newGame;
