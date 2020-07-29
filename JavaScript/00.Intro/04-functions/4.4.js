let arr = [];

function rand10() {
    let i = (Math.random() * 10);
    return Math.round(i);
}

function multiRand(n) {
    for (let i = n; i !== 0; i--) {
        arr.push(rand10());
    }
    return arr;
}

function average(arr) {
    let n = arr.length;
    let s = 0;
    let t;
    
    for (let elem of arr) {
        s += elem;
    }
    t = s / n;
    return t;
}

function min(arr) {
    t = Math.min(...arr);
    return t;
}

function max(arr) {
    t = Math.max(...arr);
    return t;
}

let val = Number(prompt("What lenght do you want for the array ?"));
arr = multiRand(val);

console.log("The array created is : " + arr);
console.log("The average is : " + average(arr));
console.log("The minimum is : " + min(arr));
console.log("The maximum is : " + max(arr));