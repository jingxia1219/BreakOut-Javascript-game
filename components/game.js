import Brick from './bricks';
import Ball from './ball';
import Paddle from './paddle';

class Game {
  constructor(ctx){
    this.brick = new Brick(ctx);
    this.ball = new Ball(ctx);
    this.paddle = new Paddle(ctx);
    // this.animate();
    // this.brick.drawBricks();
  }
  animate() {
    // debugger
    this.brick.drawBricks();
  }
}

export default Game;
