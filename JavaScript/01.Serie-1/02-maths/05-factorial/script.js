
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let a = Number(document.getElementById("number").value);
        let f = 1;

        function factorial(a) {
            if (a === 0 || a === 0) {
                return f;
            }
            else {
                f *= a;
                return factorial(a - 1);
            }
        }
        alert(factorial(a));

    });

})();
