// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let passOne = document.getElementById("pass-one").value;
        let passTwo = document.getElementById("pass-two").value;
        let pOne = document.getElementById("pass-one");
        let pTwo = document.getElementById("pass-two");
        
        if (passOne !== passTwo) {
            pOne.classList.add("error");
            pTwo.classList.add("error");
        }
    })
})();
