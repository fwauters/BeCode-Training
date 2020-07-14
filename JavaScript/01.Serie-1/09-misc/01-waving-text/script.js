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

    function selCharWithDelay(txt) {
        let char;
        let i = 0;
        let int = setInterval(frame, 100);
        function frame() {
            if (i === txt.length) {
                clearInterval(int);
            }
            else {
               char = txt.substring(i, (i + 1));
               console.log(char);
                i++;
            }
        }
    }
    
    //-----------document.getElementsByTagName(tag).remove();-----------
    function addTag(string, tag) {
        let result = tag + string + tag;
        return result;
    }
    /*
    let txt = document.getElementById("target").textContent;
    console.log(txt);

    console.log(selCharWithDelay(txt));
    */
    fontSizeWave(document.getElementById("target"));

    selCharWithDelay(document.getElementById("target").textContent);
})();
