import { Snake } from './snake.js';

export class Board { 

    private context:CanvasRenderingContext2D | null;

    constructor(private canvas: HTMLCanvasElement){
        this.context = canvas.getContext('2d');
    }

    draw(snake: Snake, grid: number): void{ 
        this.clear();
        if (this.context) this.context.fillStyle = 'green';
        snake.getCells().forEach(c => {
            this.context?.fillRect(c.positionX, c.positionY, grid - 1, grid - 1)
        })
    }

    clear(){
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    gameOver(): void {
        if (this.context) {
            this.context.font = "40px Tahoma";
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.fillStyle = "White";
            this.context.fillText("GAME OVER", this.canvas.width / 2, this.canvas.height / 2);
        }
    }
    pause(): void {
        if (this.context) {
            this.context.font = "40px Tahoma";
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.fillStyle = "White";
            this.context.fillText("Pause", this.canvas.width / 2, this.canvas.height / 2);
        }
    }

    getHeight() {
        return this.canvas.height;
    }

    getWidth() {
        return this.canvas.width;
    }
}