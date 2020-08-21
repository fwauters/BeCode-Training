// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

    function fontSizeWave(elemHtml) {
        let x = 2;
        let y = 8;
        let int = setInterval(frame, 100);
        function frame() {
            if (x === 8) {
                if (y === 1) {
                    clearInterval(int);
                }
                else {
                    elemHtml.style.fontSize = y + "rem";
                    y--;
                }
            }
            else {
                elemHtml.style.fontSize = x + "rem";
                x++;
            }
        }
    }

    function pullAndPush(elemId, txt, tag) {
        for (let i = 0; i < txt.length; i++) {

            let result = addTag(txt, i, tag);
            document.getElementById(elemId).innerHTML = result;
            elemTag = document.querySelector(tag);
            elemTag.id = "actual";
            elemTag.content = "text";
            fontSizeWave(document.getElementById("actual"));
        }
    }

    function addTag(string, i, tag) {
        let result = string.substring(0, i) + "<" + tag + ">" + string[i] + "</" + tag + ">" + string.substring(i + 1, string.length);
        return result;
    }

    let tag = "b";
    let txt = document.getElementById("target").textContent;
    pullAndPush("target", txt, tag);

})();
