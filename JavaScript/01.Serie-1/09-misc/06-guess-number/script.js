// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let x = Math.floor(Math.random() * 100) + 1;
    console.log(x);

    let guess = prompt("Guess the number (between 1 & 100)");

    for (let y = 2; guess !== x; y++) {
        if (x > guess) {
            guess = prompt("You're lower, try again (Guess " + y + ")");
        }
        else if (x < guess) {
            guess = prompt("You're higher, try again (Guess " + y + ")");
        }
        else {
            alert("That's it ! You needed " + (y - 1) + " guesses.");
            break;
        }
    }

})();
