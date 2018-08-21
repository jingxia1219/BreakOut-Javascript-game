class Brick {
    constructor(ctx) {
        this.ctx = ctx;
        // this.brickRowCount = 3;
        // this.brickColumnCount = 8;
        this.brickWidth = 74.4;
        this.brickHeight = 18;
        // this.brickPadding = 14.4;
        // this.brickOffsetTop = 58;
        // this.brickOffsetLeft= 38;

          this.bricks=[];
          // this.brickX= null;
          // this.brickY= null;
          for ( let c = 0; c < this.brickColumnCount; c++) {
           this.bricks[c] = [];
             for (let r = 0; r < this.brickRowCount; r++ ) {
               // this.brickX = this.brickOffsetLeft + (this.brickWidth + this.brickPadding)*c;
               // this.brickY = this.brickOffsetTop + (this.brickHeight + this.brickPadding)*r;
                 this.bricks[c][r] = {x:0, y: 0, destroyed: false };
           }
          }
        }

     drawBricks(){



       for (let c = 0; c < this.brickColumnCount; c++) {
         for (let r = 0; r < this.brickRowCount; r++) {
           let brick = new Image();
           brick.src = 'images/green-game-brick.png';
           this.brickX = this.brickOffsetLeft + (this.brickWidth + this.brickPadding)*c;
           this.brickY = this.brickOffsetTop + (this.brickHeight + this.brickPadding)*r;
           this.bricks[c][r].x = this.brickX;
           this.bricks[c][r].y = this.brickY;
           console.log(this.bricks);
           // debugger;
           if ( this.bricks[c][r].destroyed == false)
           {
             brick.onload = () => this.ctx.drawImage(brick, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
           }
         }
       }
      }
  }





  module.exports = Brick;
