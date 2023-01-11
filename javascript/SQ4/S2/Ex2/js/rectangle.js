class Rectangle {
    width;
    height;
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
        return 2 * (this.width + this.height);

    }
}