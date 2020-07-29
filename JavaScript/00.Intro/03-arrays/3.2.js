let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let s = 0;
let t;

for (let elem of arr) {
    s += elem;
}
t = s / n;

console.log(t);