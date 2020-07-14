// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let n = localStorage.getItem("count");
    if (n === "undefined") {
        n = 0;
    }
    document.getElementById("target").innerHTML = n;

    document.getElementById("increment").addEventListener("click", () => {
        n++;
        localStorage.setItem("count", n);
        console.log(localStorage.getItem("count"));
        document.getElementById("target").innerHTML = n;
    });

})();
