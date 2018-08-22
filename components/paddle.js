class Paddle {
  constructor(ctx, canvasW, canvasH) {
    this.ctx = ctx;
    this.canvasH = canvasH;
    this.canvasW = canvasW;
    this.paddleHeight = 12;
    this.paddleWidth = 91;
    this.paddleX = ( canvasW - this.paddleWidth)/2;
    this.paddleY = (this.canvasH - this.paddleHeight -0.5);
  }

  drawPaddle() {
    // this.ctx.fillStyle='yellow';
    // this.ctx.fillRect(10,10,250,100);
    this.ctx.beginPath();
    this.ctx.fillStyle = 'yellow';
    // console.log(this.canvasW);
    // console.log('paddlex', this.paddleX);
    this.ctx.fillRect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);
    this.ctx.closePath();
  }
}

module.exports = Paddle;
