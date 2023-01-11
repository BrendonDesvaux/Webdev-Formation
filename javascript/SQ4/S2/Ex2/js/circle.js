class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.round(Math.PI * this.radius ** 2);
    }
    getPerimeter() {
        return Math.round(2 * Math.PI * this.radius);
    }
}