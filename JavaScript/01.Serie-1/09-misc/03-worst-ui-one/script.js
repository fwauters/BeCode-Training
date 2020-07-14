// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let elem = document.getElementById("slider");
    let val = document.getElementById("slider").value;
    document.getElementById("target").innerHTML = "0" + val;

    elem.addEventListener("change", () => {
        val = document.getElementById("slider").value;
        document.getElementById("target").innerHTML = "0" + val;
    });

})();
