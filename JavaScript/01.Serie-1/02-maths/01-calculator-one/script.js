
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function () {
        // perform an addition
        let result = Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });

    document.getElementById("substraction").addEventListener("click", function () {
        // perform an substraction
        let result = Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        // perform an multiplication
        let result = Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });

    document.getElementById("division").addEventListener("click", function () {
        // perform an division
        let result = Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });
})();
