class Brick {
    constructor(ctx) {
        this.ctx = ctx;
        this.brickRowCount = 3;
        this.brickColumnCount = 8;
        this.brickWidth = 74.4;
        this.brickHeight = 18;
        this.brickPadding = 14.4;
        this.brickOffsetTop = 58;
        this.brickOffsetLeft= 38;

          this.bricks=[];
          this.brickX= null;
          this.brickY= null;
        }

     drawBricks(){
       let brick = new Image();
       brick.src = 'images/green-game-brick.png';
       this.ctx.drawImage(brick, 0, 0, this.brickWidth, this.brickHeight);
       //
       // for ( let c = 0; c < this.brickColumnCount; c++) {
       //  this.bricks[c] = [];
       //  for (let r = 0; r < this.brickRowCount; r++ ) {
       //    this.brickX = this.brickOffsetLeft + (this.brickWidth + this.brickPadding)*c;
       //    this.brickY = this.brickOffsetTop + (this.brickHeight + this.brickPadding)*r;
       //    this.bricks[c][r] = {x: this.brickX, y: this.brickY, destroyed: false};
       //    if ( this.bricks[c][r].destroyed == false)
          // {
          //   this.ctx.drawImage(brick,0, 0, this.brickWidth, this.brickHeight);
          // }
        }

        // }
      // }
    }





  export default Brick;
  // module.exports = Brick;
