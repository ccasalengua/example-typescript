export class Snake {
    constructor(initialPos, initialVelocity, initialLength) {
        this.head = initialPos;
        this.body = [];
        this.velocity = initialVelocity;
        let x = initialPos.positionX - initialVelocity.vectorX;
        let y = initialPos.positionY - initialVelocity.vectorY;
        for (let i = 0; i < initialLength - 1; i++) {
            this.body.push({ positionX: x, positionY: y });
            y -= initialVelocity.vectorY;
            x -= initialVelocity.vectorX;
        }
    }
    calculateLimitPosition(maxHeight, maxWidth, grid) {
        const limitPosition = {};
        // wrap snake position horizontally on edge of the board
        if (this.head.positionX < 0) {
            limitPosition.positionX = maxWidth - grid;
        }
        else if (this.head.positionX >= maxWidth) {
            limitPosition.positionX = 0;
        }
        // wrap snake position vertically on edge of the board
        if (this.head.positionY < 0) {
            limitPosition.positionY = maxHeight - grid;
        }
        else if (this.head.positionY >= maxHeight) {
            limitPosition.positionY = 0;
        }
        return limitPosition;
    }
    move(maxHeight, maxWidth, grid) {
        this.body.unshift({ positionX: this.head.positionX, positionY: this.head.positionY });
        this.body.pop();
        this.head.positionX += this.velocity.vectorX;
        this.head.positionY += this.velocity.vectorY;
        this.head = { ...this.head, ...this.calculateLimitPosition(maxHeight, maxWidth, grid) };
    }
    getCells() {
        return [this.head, ...this.body];
    }
    getDirection() {
        return this.velocity;
    }
    changeDirection(newDirection) {
        this.velocity = newDirection;
    }
    pause() {
        //this.velocity = 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25ha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbmFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLE9BQU8sS0FBSztJQU1kLFlBQVksVUFBaUIsRUFBRSxlQUF1QixFQUFFLGFBQXFCO1FBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFFaEMsSUFBSSxDQUFDLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1FBQzlELElBQUksQ0FBQyxHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBQ08sc0JBQXNCLENBQUMsU0FBaUIsRUFBRSxRQUFnQixFQUFFLElBQVk7UUFDNUUsTUFBTSxhQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUN6Qyx3REFBd0Q7UUFDeEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDekIsYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDeEMsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFFRCxzREFBc0Q7UUFDdEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDekIsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQzlDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDekMsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxDQUFDLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxJQUFZO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM1RixDQUFDO0lBQ0QsUUFBUTtRQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxlQUFlLENBQUMsWUFBb0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7SUFDakMsQ0FBQztJQUVELEtBQUs7UUFDRCxvQkFBb0I7SUFDeEIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pbnQsIFZlY3RvciB9IGZyb20gJy4vbW9kZWxzL21vZGVscy5qcyc7XHJcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGVhZDogUG9pbnQ7XHJcbiAgICBwcml2YXRlIGJvZHk6IFBvaW50W107XHJcbiAgICBwcml2YXRlIHZlbG9jaXR5OiBWZWN0b3I7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxQb3M6IFBvaW50LCBpbml0aWFsVmVsb2NpdHk6IFZlY3RvciwgaW5pdGlhbExlbmd0aDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmhlYWQgPSBpbml0aWFsUG9zO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBpbml0aWFsVmVsb2NpdHk7XHJcblxyXG4gICAgICAgIGxldCB4Om51bWJlciA9IGluaXRpYWxQb3MucG9zaXRpb25YIC0gaW5pdGlhbFZlbG9jaXR5LnZlY3Rvclg7XHJcbiAgICAgICAgbGV0IHk6bnVtYmVyID0gaW5pdGlhbFBvcy5wb3NpdGlvblkgLSBpbml0aWFsVmVsb2NpdHkudmVjdG9yWTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRpYWxMZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2goeyBwb3NpdGlvblg6IHgsIHBvc2l0aW9uWTogeSB9KTtcclxuICAgICAgICAgICAgeSAtPSBpbml0aWFsVmVsb2NpdHkudmVjdG9yWTtcclxuICAgICAgICAgICAgeCAtPSBpbml0aWFsVmVsb2NpdHkudmVjdG9yWDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZUxpbWl0UG9zaXRpb24obWF4SGVpZ2h0OiBudW1iZXIsIG1heFdpZHRoOiBudW1iZXIsIGdyaWQ6IG51bWJlcik6IFBhcnRpYWw8UG9pbnQ+IHtcclxuICAgICAgICBjb25zdCBsaW1pdFBvc2l0aW9uOiBQYXJ0aWFsPFBvaW50PiA9IHt9O1xyXG4gICAgICAgIC8vIHdyYXAgc25ha2UgcG9zaXRpb24gaG9yaXpvbnRhbGx5IG9uIGVkZ2Ugb2YgdGhlIGJvYXJkXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZC5wb3NpdGlvblggPCAwKSB7XHJcbiAgICAgICAgICAgIGxpbWl0UG9zaXRpb24ucG9zaXRpb25YID0gbWF4V2lkdGggLSBncmlkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkLnBvc2l0aW9uWCA+PSBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICBsaW1pdFBvc2l0aW9uLnBvc2l0aW9uWCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3cmFwIHNuYWtlIHBvc2l0aW9uIHZlcnRpY2FsbHkgb24gZWRnZSBvZiB0aGUgYm9hcmRcclxuICAgICAgICBpZiAodGhpcy5oZWFkLnBvc2l0aW9uWSA8IDApIHtcclxuICAgICAgICAgICAgbGltaXRQb3NpdGlvbi5wb3NpdGlvblkgPSBtYXhIZWlnaHQgLSBncmlkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkLnBvc2l0aW9uWSA+PSBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgbGltaXRQb3NpdGlvbi5wb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGltaXRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKG1heEhlaWdodDogbnVtYmVyLCBtYXhXaWR0aDogbnVtYmVyLCBncmlkOiBudW1iZXIpOiB2b2lkeyBcclxuICAgICAgICB0aGlzLmJvZHkudW5zaGlmdCh7IHBvc2l0aW9uWDogdGhpcy5oZWFkLnBvc2l0aW9uWCwgcG9zaXRpb25ZOiB0aGlzLmhlYWQucG9zaXRpb25ZfSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LnBvcCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5wb3NpdGlvblggKz0gdGhpcy52ZWxvY2l0eS52ZWN0b3JYO1xyXG4gICAgICAgIHRoaXMuaGVhZC5wb3NpdGlvblkgKz0gdGhpcy52ZWxvY2l0eS52ZWN0b3JZO1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IHsgLi4udGhpcy5oZWFkLCAuLi50aGlzLmNhbGN1bGF0ZUxpbWl0UG9zaXRpb24obWF4SGVpZ2h0LCBtYXhXaWR0aCwgZ3JpZCkgfTsgXHJcbiAgICB9XHJcbiAgICBnZXRDZWxscygpOiBQb2ludFtde1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5oZWFkLCAuLi50aGlzLmJvZHldOyBcclxuICAgIH1cclxuICAgIGdldERpcmVjdGlvbigpOiBWZWN0b3Ige1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlbG9jaXR5O1xyXG4gICAgfVxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbjogVmVjdG9yKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ld0RpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICAvL3RoaXMudmVsb2NpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxufSJdfQ==