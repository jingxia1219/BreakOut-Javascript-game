## Break Out - classic video game

[Live Link](https://jingxia1219.github.io/Javascript-Game/)

### Game Preview
![Alt Text](https://media.giphy.com/media/4NrBSWb5x4qTAYtHX1/giphy.gif)
### Break Out is a game consists of several columns and rows of bricks on the top, a ball, and a paddle on the bottom.

### Technologies Used:
*   Utilized javascript as the main technology to create separate classes for different objects: brick, ball and the paddle with default property such as starting X,Y coordinates and height and width.

```javascript
class Brick {
    constructor(ctx, brickWidth, brickHeight, x, y) {
        this.ctx = ctx;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickX= x;
        this.brickY= y;
        this.destroyed = false;
        this.image = new Image();
        this.image.src = 'images/green-game-brick.png';
      }

     drawBrick(){
       if ( this.destroyed === false) {
         this.ctx.drawImage(this.image, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
       }
      }
  }

  module.exports = Brick;
  ```
*   Used Canvas to draw and set positions of different components on the game board

```javascript
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
```
* Implemented addEventListeners for both mouse movements and left/right key press and release to move the paddle

```javascript
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

paddleListeners() {
  document.addEventListener("touchstart", this.handleTouchStart.bind(this), false);
  document.addEventListener("touchstart", this.handleTouchEnd.bind(this), false);
  document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
  document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
  document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
}
```
* CSS styling gives the game a retro arcade look



### how to play?
The rule is simple:
* hit the ball with the paddle by moving the padding left and right with either mouse or left/right key.
* The ball will bounce in the opposite direction when it either hits a wall that's not the bottom wall or the paddle on the bottom.
* Player starts out with 3 lives. When the ball hits the bottom without being caught by the paddle, the player loses one life.
* The game will be over when no life is left. Player wins the game by clearing all the bricks.
### Features:
* The Ball will moves a little bit faster every time after hitting the paddle.
* The score goes up by 200 every time a brick is destroyed by the ball
* After user clear all bricks, or run out of lives, either a winning or losing message box will pop up in the center and at the same time the background will darken 
* Player can hit the restart button under instruction anytime to restart the game

### A snapshot of my project in progress:
![break out](https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/40002116_1797590337002839_6875587306196041728_n.jpg?_nc_cat=0&oh=e7708f8bb7c4d7c073b537b968c2225b&oe=5BEDB361)
