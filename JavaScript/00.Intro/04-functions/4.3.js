function rand10() {
    let i = (Math.random() * 10);
    return Math.round(i);
}

let arr = [];
let n;

function multiRand(n) {
    for (let i = n; i !== 0; i--) {
        arr.push(rand10());
    }
    return arr;
}

n = Number(prompt("What lenght do you want for the array ?"));

console.log(multiRand(n));