// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

    function animation() { 
        let x = 2;
        let y = 10;
        let id = setInterval(frame, 100);
        function frame() {
            if (x === 10) {
                if (y === 1) {
                    clearInterval(id);
                }
                else {
                    document.getElementById("target").style.fontSize = y + "rem";
                    y--;
                }               
            }
            else { 
            document.getElementById("target").style.fontSize = x + "rem";
            x++;
            }
        }
    }

    animation();

})();
