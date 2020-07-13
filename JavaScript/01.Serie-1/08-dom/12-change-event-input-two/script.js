// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    function hasNumber(string) {
        let t = /\d{2}/.test(string);
        console.log(t);
        return t;
    }

    document.getElementById("pass-one").addEventListener("input", () => {

        let s = document.getElementById("pass-one").value;
        let n = s.length;
        if (n > 7 && hasNumber(s) === true) {
            document.getElementById("validity").innerHTML = "ok";
        }

    },false);

})();
