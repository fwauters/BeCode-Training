function factorial(a) {
    if (a === 0) {
        return f;
    }
    else {
        f *= a;
        return factorial(a - 1);
    }
}

let f = 1;
let a = Number(prompt("Enter a number"));
console.log(factorial(a));