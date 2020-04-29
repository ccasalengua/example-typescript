import { Point, Vector } from './models/models.js';
export class Snake {
    
    private head: Point;
    private body: Point[];
    private velocity: Vector;
    
    constructor(initialPos: Point, initialVelocity: Vector, initialLength: number){
        this.head = initialPos;
        this.body = [];
        this.velocity = initialVelocity;

        let x:number = initialPos.positionX - initialVelocity.vectorX;
        let y:number = initialPos.positionY - initialVelocity.vectorY;
        for (let i = 0; i < initialLength - 1; i++) {
            this.body.push({ positionX: x, positionY: y });
            y -= initialVelocity.vectorY;
            x -= initialVelocity.vectorX;
        }
    }
    private calculateLimitPosition(maxHeight: number, maxWidth: number, grid: number): Partial<Point> {
        const limitPosition: Partial<Point> = {};
        // wrap snake position horizontally on edge of the board
        if (this.head.positionX < 0) {
            limitPosition.positionX = maxWidth - grid;
        } else if (this.head.positionX >= maxWidth) {
            limitPosition.positionX = 0;
        }

        // wrap snake position vertically on edge of the board
        if (this.head.positionY < 0) {
            limitPosition.positionY = maxHeight - grid;
        } else if (this.head.positionY >= maxHeight) {
            limitPosition.positionY = 0;
        }
        return limitPosition;
    }

    move(maxHeight: number, maxWidth: number, grid: number): void{ 
        this.body.unshift({ positionX: this.head.positionX, positionY: this.head.positionY});
        this.body.pop();
        this.head.positionX += this.velocity.vectorX;
        this.head.positionY += this.velocity.vectorY;
        this.head = { ...this.head, ...this.calculateLimitPosition(maxHeight, maxWidth, grid) }; 
    }
    getCells(): Point[]{
        return [this.head, ...this.body]; 
    }
    getDirection(): Vector {
        return this.velocity;
    }
    changeDirection(newDirection: Vector): void {
        this.velocity = newDirection;
    }

    pause() {
        //this.velocity = 0;
    }

}