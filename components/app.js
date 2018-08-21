// import React from 'react';
// import ReactDOM from 'react-dom';
import Game from './game';
import Bricks from './bricks';


document.addEventListener("DOMContentLoaded", ()=>{
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let bricks = new Bricks(ctx);
  bricks.drawBricks();
  console.log("bundle.js is working");
  console.log(bricks.drawBricks);
});
