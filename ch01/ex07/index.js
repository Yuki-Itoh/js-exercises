
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    }

    add(point) {
        console.log(`point x=${this.x}, y=${this.y}`)
        this.x += point.x;
        this.y += point.y;
        console.log(`point x=${this.x}, y=${this.y}`)
        return this;
    }
}