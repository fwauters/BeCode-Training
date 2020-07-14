// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    
    document.getElementById("target").style.fontFamily = "Courier, sans-serif";
    let txt = document.getElementById("target").textContent; 

    let target = document.getElementById("target");
    target.innerHTML = "";

    let i = 0;
    let speed = 50; // milliseconds

    function typeWriter() {
        if (i < txt.length) {
            speed = Math.floor(Math.random() * 200) + 1;
            console.log(speed);
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

})();
