const Brick = require('./brick');
const Ball = require('./ball');
const Paddle = require('./paddle');
// const newGame = require('./app');
// import { newGame } from './app';

class Game {
  constructor(canvas, ctx, canvasW, canvasH ){
    this.requestId = null;
    this.over = false;
    this.background = new Image();
    this.background.src = 'images/canvas-background-copy.jpg';
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.lives = 3;
    this.score = 0;
    this.bricks = [];
    this.brickRowCount = 3;
    this.brickColumnCount = 8;
    this.brickPadding = 14.4;
    this.brickWidth = 74.4;
    this.brickHeight = 18;
    this.brickOffsetTop = 58;
    this.brickOffsetLeft= 38;

    this.paddle = new Paddle(ctx, canvasW, canvasH);
    this.x = canvasW/2 ;
    this.y = canvasH - 38;
    this.ball = new Ball(ctx, canvasW, canvasH, this.x, this.y);
    this.rightPressed = false;
    this.leftPressed = false;
    this.createBricks();
    this.paddleListeners();
    this.ball.createBall();
  }

  mouseMoveHandler(e) {
    let relativeX = e.clientX - this.canvas.offsetLeft;
    if ( relativeX > this.paddle.paddleWidth/2+ 3 && relativeX < this.paddle.canvasW - this.paddle.paddleWidth/2 - 3 ) {
      this.paddle.paddleX = relativeX - this.paddle.paddleWidth/2;
    }
  }
  keyDownHandler(e) {
    if (e.keyCode == 39) {
      this.rightPressed = true;
    } else if (e.keyCode == 37 ) {
      this.leftPressed = true;
    }
  }
  keyUpHandler(e) {
    if (e.keyCode == 39 ) {
      this.rightPressed = false;
    } else if (e.keyCode == 37 )  {
      this.leftPressed = false;
    }
  }
  handleTouchStart(e) {
    e.preventDefault();
    let relativeX = e.touches[0].clientX - this.canvasW/2;
    if ( relativeX < 0 ) {
      this.leftPressed = true;
      this.rightPressed = false;
    } else if ( relativeX > 0 ) {
      this.rightPressed = true;
      this.leftPressed = false;
    }
  }
  handleTouchEnd(e){
    // this.leftPressed =
  }
  paddleListeners() {
    document.addEventListener("touchstart", this.handleTouchStart.bind(this), false);
    document.addEventListener("touchstart", this.handleTouchEnd.bind(this), false);
    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
    document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);

}
  movePaddle(){
      if ( this.rightPressed && this.paddle.paddleX + this.paddle.paddleWidth <= this.canvasW - 7) {
      this.paddle.paddleX+= 8;
    } else if ( this.leftPressed && this.paddle.paddleX > 7) {
      this.paddle.paddleX-= 8;
      }
    }
  createBricks() {
    for( let c = 0; c < 3; c++ ) {
      for ( let r = 0; r < 8; r ++) {
        let x = this.brickOffsetLeft + (r * this.brickWidth) + (r * this.brickPadding);
        let y =this.brickOffsetTop + (c * this.brickHeight) + (c* this.brickPadding);
        let brick = new Brick(this.ctx, this.brickWidth, this.brickHeight, x, y);
        this.bricks.push(brick);
      }
    }
  }
  drawScore() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("Score: " + this.score, 15, 30);
  }
  drawLives() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("Lives: "+ this.lives, this.canvasW - 100, 30);
  }
  drawBricks(){
      this.bricks.forEach( brick => brick.drawBrick());
  }
  drawBall(){
    this.ctx.drawImage( this.ball.image, this.ball.x-this.ball.ballRadius, this.ball.y+5, this.ball.ballWidth, this.ball.ballHeight);
    if ( this.ball.x > 0 && this.ball.x < this.canvasW && this.ball.y < this.canvasH)
    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;
  }
  collisionDetection() {
    if (this.ball.x - this.ball.ballRadius <= 0 || this.ball.x + this.ball.ballRadius >= this.canvasW) {
      this.ball.dx = -this.ball.dx;
    }
    if ( this.ball.y <= 0 ) {
      this.ball.dy = -this.ball.dy;
    }
    let notDestroyed = true;
    this.bricks.forEach( brick => {
      if (this.ball.y + this.ball.ballHeight >= brick.brickY && this.ball.y <= brick.brickY + brick.brickHeight
        && this.ball.x + this.ball.ballRadius > brick.brickX && this.ball.x - this.ball.ballRadius< brick.brickX + brick.brickWidth && brick.destroyed === false) {
          this.score += 250;
        brick.destroyed = true;
        if (notDestroyed) {
          this.ball.dy = -this.ball.dy;
          notDestroyed = false;
        }
      }
    }
  );
    if (this.ball.y + this.ball.ballHeight >= this.paddle.paddleY ) {
      if (this.ball.x + this.ball.ballRadius >= this.paddle.paddleX && this.ball.x + this.ball.ballRadius <= this.paddle.paddleX+ this.paddle.paddleWidth) {
        this.ball.dy = -this.ball.dy;
        this.ball.dy+=0.15;
        if ( this.ball.dx > 0) {
          this.ball.dx+=0.2;
        } else {
          this.ball.dx -=0.2;
        }
      } else {
        this.lives -= 1;
        this.paddle = new Paddle(this.ctx, this.canvasW, this.canvasH);
        this.ball = new Ball(this.ctx, this.canvasW, this.canvasH, this.x, this.y);
      }
    }
  }
  gameOver() {
    let overImage = new Image();
    if (this.score === 250 * this.brickColumnCount * this.brickRowCount  ) {
      this.over = true;
      this.ctx.drawImage( this.background, 0 , 0, this.canvasW, this.canvasH);
      this.drawScore();
      this.drawLives();
      this.drawBricks();
      this.drawBall();
        this.paddle.drawPaddle();
      overImage.src = './Images/you-win.png';
      this.ctx.drawImage( overImage, this.canvasW/2 - 200 , this.canvasH/2 - 50, 380, 110);
      // cancelAnimationFrame();
    } else if (this.lives === 0) {
      this.over = true;
          this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
          this.ctx.drawImage( this.background, 0 , 0, this.canvasW, this.canvasH);
          this.drawScore();
          this.drawLives();
          this.drawBricks();
          this.drawBall();
            this.paddle.drawPaddle();
      overImage.src = './images/game-over.png';
      this.ctx.drawImage( overImage, this.canvasW/2 -100 , this.canvasH/2 - 80, 245, 245);
    }
  }
  restart() {
    console.log('restart');
    cancelAnimationFrame(this.requestId);
  }

  animate() {
    // console.log('try');
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
    // this.drawRestart();
    this.drawScore();
    this.drawLives();
    this.drawBricks();
    this.drawBall();
    this.paddle.drawPaddle();
    this.movePaddle();
    this.collisionDetection();
    this.gameOver();
    if ( !this.over )  {
    this.requestId = requestAnimationFrame(this.animate.bind(this));
    }
  }
}

module.exports = Game;
