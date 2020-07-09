function calcSurface(w, l) {
    return w * l;
}
let w = Number(prompt("What's the width of the rectangle ?"));
let l = Number(prompt("What's the lenght of the rectangle ?"));

console.log("The surface of the rectangle is " + calcSurface(w, l));