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
