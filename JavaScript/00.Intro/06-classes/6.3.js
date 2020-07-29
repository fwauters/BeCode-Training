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

function randomPos() {
    return Math.floor(Math.random() * 1000) + 1;
}

function randomSize() {
    return Math.floor(Math.random() * 10) + 1;
}

function makeRectangles(n) {
    let rectangles = [];
    for (let i = 1; i <= n; ++i) {
        rectangles.push(new Rectangle(randomPos(), randomPos(), randomSize(), randomSize()));
    }
    return rectangles;
}

let r = makeRectangles(1000);
console.log(r);

for (let j = 0; j < r.length; j++) {
    for (let k = 0; k < r.length && j > k; k++) {
        if (r[j].collides(r[k])) {
            console.log("Rectangle " + j + " collides with rectangle " + k);
        }
    }
}