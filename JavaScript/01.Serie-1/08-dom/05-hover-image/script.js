// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let imgHover = document.querySelector("figure img");
    imgHover.addEventListener("mouseover", () => {
        
        let source = document.querySelector("figure img").getAttribute("data-hover");
        imgHover.src = source;
    });

})();
