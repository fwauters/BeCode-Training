// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here

    let btnOne = document.getElementById("fix-part-one");
    let btnTwo = document.getElementById("fix-part-two");
    let btnThree = document.getElementById("fix-part-three");
    let btnFour = document.getElementById("fix-part-four");

    let i1 = "460";
    let i2 = "00";
    let i3 = "00";
    let i4 = "00";

    document.getElementById("target").innerHTML = "0" + i1 + i2 + i3 + i4;

    btnOne.addEventListener("click", () => {
        i1 = Math.floor(Math.random() * 39) + 460;
        if (i1 < 10) {
            i1 = "0" + i1;
        }
        document.getElementById("part-one").value = i1;
        document.getElementById("target").innerHTML = "0" + i1 + i2 + i3 + i4;
    });

    btnTwo.addEventListener("click", () => {
        i2 = Math.floor(Math.random() * 99) + 1;
        if (i2 < 10) {
            i2 = "0" + i2;
        }
        document.getElementById("part-two").value = i2;
        document.getElementById("target").innerHTML = "0" + i1 + i2 + i3 + i4;
    });

    btnThree.addEventListener("click", () => {
        i3 = Math.floor(Math.random() * 99) + 1;
        if (i3 < 10) {
            i3 = "0" + i3;
        }
        document.getElementById("part-three").value = i3;
        document.getElementById("target").innerHTML = "0" + i1 + i2 + i3 + i4;
    });

    btnFour.addEventListener("click", () => {
        i4 = Math.floor(Math.random() * 99) + 1;
        if (i4 < 10) {
            i4 = "0" + i4;
        }
        document.getElementById("part-four").value = i4;
        document.getElementById("target").innerHTML = "0" + i1 + i2 + i3 + i4;
    }); 

})();
