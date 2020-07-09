let n = Number(prompt("Please enter an integer"));
let m;
let t = 0;

for (let i = n; i !== 0; i--) {
    m = Number(prompt("Please enter another integer (" + i + "/" + n + ")"));
    t += m;
}
console.log(t);