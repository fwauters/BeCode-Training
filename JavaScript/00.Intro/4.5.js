function calcDistance(xA, yA, xB, yB) {
    // Pour trouver la distance entre A et B on doit définir
    // un point C et appliquer le théorème de Pythagore
    // Par déduction on trouve que xC = xB et yC = yA

    let h = Math.pow((yB - yA), 2) + Math.pow((xA - xB), 2);
    return Math.sqrt(h);
}

let xA = Number(prompt("What's the x coordinate of point A ?"));
let yA = Number(prompt("What's the y coordinate of point A ?"));
let xB = Number(prompt("What's the x coordinate of point B ?"));
let yB = Number(prompt("What's the x coordinate of point B ?"));

console.log("The distance between A and B is " + calcDistance(xA, yA, xB, yB));