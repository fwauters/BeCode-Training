class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
    move (xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
}

let circleTest = new Circle(1, 1, 2);

circleTest.move (-3, 2);
console.log("xPos = " + circleTest.xPos);
console.log("yPos = " + circleTest.yPos);
