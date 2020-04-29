
import { Board } from "./board.js";
import { Snake } from "./snake.js";
import { Point } from "./models/models.js";

export class Game {

    private board: Board;
    private snake: Snake;
    private static grid: number = 16;
    private frameCount: number;
    private gameOver: boolean;
    private pause: boolean;

    constructor() { 
        const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game');
        this.board = new Board(canvas);
        this.snake = new Snake({ positionX: 160, positionY: 160 }, { vectorX: Game.grid, vectorY: 0 }, 10);
        this.frameCount = 0;
        this.gameOver = false;
        this.pause = false;
        this.registerActions();
    }

    private registerActions(): void {
        let lastKey: number = 39;    // right arrow key default
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            // prevent snake from backtracking on itself by checking that it's 
            // not already moving on the same axis (pressing left while moving
            // left won't do anything, and pressing right while moving left
            // shouldn't let you collide with your own body)
            console.log(e.which, this.pause)
            const snakeDirection = this.snake.getDirection();
            if (!this.pause) {
                if (e.which === 37 && snakeDirection.vectorX === 0) { // left arrow key
                    this.snake.changeDirection({ vectorX: -Game.grid, vectorY: 0 });
                    lastKey = 37;
                } else if (e.which === 38 && snakeDirection.vectorY === 0) { // up arrow key
                    this.snake.changeDirection({ vectorX: 0, vectorY: -Game.grid });
                    lastKey = 38;
                } else if (e.which === 39 && snakeDirection.vectorX === 0) { // right arrow key
                    this.snake.changeDirection({ vectorX: Game.grid, vectorY: 0 });
                    lastKey = 39;
                } else if (e.which === 40 && snakeDirection.vectorY === 0) { // down arrow key
                    this.snake.changeDirection({ vectorX: 0, vectorY: Game.grid });
                    lastKey = 40;
                } else if ((e.which === 80 || e.which === 13)){ //Pause
                    console.log('entra pause')
                    this.snake.changeDirection({ vectorX: 0, vectorY: 0 });
                    this.pause = true;
                }
            } else {
                if ((e.which === 80 || e.which === 13)) { 
                    console.log('entra en NO pause')
                    this.pause = false;
                    this.start();

                    if (lastKey === 37 && snakeDirection.vectorX === 0) { // left arrow key
                        this.snake.changeDirection({ vectorX: -Game.grid, vectorY: 0 });
                    } else if (lastKey === 38 && snakeDirection.vectorY === 0) { // up arrow key
                        this.snake.changeDirection({ vectorX: 0, vectorY: -Game.grid });
                    } else if (lastKey === 39 && snakeDirection.vectorX === 0) { // right arrow key
                        this.snake.changeDirection({ vectorX: Game.grid, vectorY: 0 });
                    } else if (lastKey === 40 && snakeDirection.vectorY === 0) { // down arrow key
                        this.snake.changeDirection({ vectorX: 0, vectorY: Game.grid });
                    }
                }
            }
        });
    }

    private isSnakeCollision(): boolean {
        const snakeCells: Point[] = this.snake.getCells();
        return snakeCells.some((c: Point, i: number) => {
            return i > 0 && c.positionX === snakeCells[0].positionX && c.positionY === snakeCells[0].positionY;
        });
    }

    start() {
        if (!this.gameOver || !this.pause) {
            requestAnimationFrame(this.start.bind(this)); 
            if (++this.frameCount < 10) return;
            this.frameCount = 0;
            this.snake.move(this.board.getHeight(), this.board.getWidth(), Game.grid);
            this.board.draw(this.snake, Game.grid);
            this.gameOver = this.isSnakeCollision();
        } else if (this.pause) {
            this.board.pause();            
        } else{
            this.board.gameOver();
        }
        
    }

}