// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        console.log(fruits);
        
        fruits.shift();     // remove first elem
        fruits.pop();       // remove last elem

        console.log(fruits);

        fruits.unshift("banana");
        fruits.push("kiwi");

        console.log(fruits);

    });

})();
