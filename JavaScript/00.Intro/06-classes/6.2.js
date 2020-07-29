class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, height) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.height = height;
    }
    collides (otherRectangle) {
        if (
            this.topLeftXPos > (otherRectangle.topLeftXPos + otherRectangle.width) || (this.topLeftXPos + this.width) < otherRectangle.topLeftXPos ||
            this.topLeftYPos < (otherRectangle.topLeftYPos - otherRectangle.height) || (this.topLeftYPos - this.height) > otherRectangle.topLeftYPos
            ) 
            {
            return false;
        }
        else {return true;}
    }
}

let rectangle1 = new Rectangle(1, 2, 3, 1);
let rectangle2 = new Rectangle(-2, 1, 3, 2);
let rectangle3 = new Rectangle(-5, 5, 4, 10);
let rectangle4 = new Rectangle(2, 3, 3, 5);
let rectangle5 = new Rectangle(1, -3, 3, 2);
let rectangle6 = new Rectangle(0, 5, 5, 8); 
let rectangle7 = new Rectangle(0, 3, 5, 3);

console.log(rectangle1.collides(rectangle2));   // true
console.log(rectangle1.collides(rectangle3));   // false
console.log(rectangle1.collides(rectangle4));   // true
console.log(rectangle1.collides(rectangle5));   // false
console.log(rectangle1.collides(rectangle6));   // true
console.log(rectangle1.collides(rectangle7));   // true