// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let partOne = document.getElementById("part-one");
    let partTwo = document.getElementById("part-two");
    let partThree = document.getElementById("part-three");
    let partFour = document.getElementById("part-four");
    
    let n = 460000000;
    document.getElementById("target").innerHTML = "0" + n;
    console.log(n);

    partOne.addEventListener("click", () => {
        n += 1000000;
        document.getElementById("target").innerHTML = "0" + n;
    });

    partTwo.addEventListener("click", () => {
        n += 10000;
        document.getElementById("target").innerHTML = "0" + n;
    });

    partThree.addEventListener("click", () => {
        n += 100;
        document.getElementById("target").innerHTML = "0" + n;
    });

    partFour.addEventListener("click", () => {
        n += 1;
        document.getElementById("target").innerHTML = "0" + n;
    }); 

})();
