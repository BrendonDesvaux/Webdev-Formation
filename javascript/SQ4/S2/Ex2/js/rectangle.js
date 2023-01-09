class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get surface() {
        return this.calcArea();
    }
    get perimeter() {
        return this.calcPerimeter();
    }
    calcArea() {
        return this.width * this.height;
    }
    calcPerimeter() {
        console.log(this);
        return 2 * (this.width + this.height);

    }
}