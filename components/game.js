const Brick = require('./brick');
// import Brick from './bricks';
const Ball = require('./ball');
// import Ball from './ball';
const Paddle = require('./paddle');
// import Paddle from './paddle';

class Game {
  constructor(ctx, canvasW, canvasH ){
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    // this.ball = new Ball(ctx);
    this.bricks = [];
    this.brickRowCount = 3;
    this.brickColumnCount = 8;
    this.brickPadding = 14.4;
    this.brickWidth = 74.4;
    this.brickHeight = 18;
    this.brickOffsetTop = 58;
    this.brickOffsetLeft= 38;
    this.paddle = new Paddle(ctx, canvasW, canvasH);
    this.ball = new Ball(ctx, canvasW, canvasH);
    this.drawboard();
    // requestAnimationFrame(this.animate);
  }

  drawboard() {
    for( let c = 0; c < 3; c++ ) {
      for ( let r = 0; r < 8; r ++) {
        let x = this.brickOffsetLeft + (r * this.brickWidth) + (r * this.brickPadding);
        let y =this.brickOffsetTop + (c * this.brickHeight) + (c* this.brickPadding);
        let brick = new Brick(this.ctx, this.brickWidth, this.brickHeight, x, y);
        this.bricks.push(brick);
      }
      this.bricks.forEach( brick => brick.drawBrick());
    }
    this.paddle.drawPaddle();
    this.ball.drawBall();
  }

  moveBall() {
    console.log('moving?');
    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;
  }
  animate() {
    this.moveBall();
    this.drawboard();
    // clear canvas
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
    setInterval(this.animate.bind(this), 10);
    // requestAnimationFrame(this.animate);
    // moveBall();

    // drawBall()
    // drawBricks() ### draw all the bircks in the bricks array
    // detectCollisions(); ### if ball collides with brick, remove brick from array
    // requestAnimationFrame(this.animate);
  }
}

module.exports = Game;
// export default Game;
