function fibonacciNumbers(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return [0, 1];
    }
    else {
        let s = fibonacciNumbers(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

let n = Number(prompt("Enter a number to show his Fibonacci numbers"));
console.log(fibonacciNumbers(n));