class Ball {
  constructor(ctx, canvasW, canvasH, x, y) {
    this.dx = 2;
    this.dy = -2;
    this.canvasW = canvasW;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.ballRadius = 12;
    this.ballWidth = 24;
    this.ballHeight = 24;
    this.image = new Image();
    this.image.src = './images/break-out-ball.png';
  }

  createBall() {
  // this.image.src = './images/break-out-ball.png';
    this.ctx.drawImage( this.image, this.x, this.y, this.ballWidth, this.ballHeight);
    // this.ctx.drawImage( this.image, this.x-this.ballRadius+3, this.y, this.ballWidth, this.ballHeight);
  }

}
module.exports = Ball;
