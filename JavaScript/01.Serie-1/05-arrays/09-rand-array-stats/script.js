// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    function sumArr(arr) {

        let m = 0;
        for (let i = (arr.length - 1); i >= 0; i--) {
            let n = Number(arr[i]);
            m += n;
        }
        return m;
    }

    document.getElementById("run").addEventListener("click", () => {

        let randomNumbers = [];

        for (let i = 0; i < 10; i++) {
            randomNumbers.push((Math.floor(Math.random() * 100)) + 1);
        }

        console.log(randomNumbers);

        for (j = 0; j < randomNumbers.length; j++) {
            document.getElementById("n-" + (j+1)).innerHTML = randomNumbers[j];
        }

        let min = Math.min(...randomNumbers);
        let max = Math.max(...randomNumbers);
        let sum = sumArr(randomNumbers);
        let average = (sumArr(randomNumbers)) / 10;

        console.log(min + " -> " + max);
        console.log("sum = " + sum + " / average = " + average);

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;

    });

})();
