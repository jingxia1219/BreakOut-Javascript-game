class Ball {
  constructor(ctx, canvasW, canvasH) {
    this.dx = 2;
    this.dy = -2;
    this.canvasW = canvasW;
    this.x = canvasW/2;
    this.y = canvasH - 35;
    this.ctx = ctx;
    this.ballRadius = 12;
    this.ballWidth = 24;
    this.ballHeight = 24;
    this.image = new Image();
    this.image.src = './images/break-out-ball.png';
  }

  drawBall() {
    console.log(this.canvasW);
    console.log('x',this.x);
    this.image.onload = () => this.ctx.drawImage( this.image, this.x-this.ballRadius+3, this.y, this.ballWidth, this.ballHeight);
  }

}
module.exports = Ball;
