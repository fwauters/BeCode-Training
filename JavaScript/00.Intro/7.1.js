let n = Math.floor(Math.random() * 100) + 1;
let m = Number(prompt("Guess the integer (between 1 and 100)"));

while (m !== n) {
    m = Number(prompt("Try again"));
}
console.log("Bravo !")