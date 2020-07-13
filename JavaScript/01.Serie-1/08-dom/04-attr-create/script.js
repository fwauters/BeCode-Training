// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let data = document.getElementById("source").getAttribute("data-image");
    console.log(data);
    
    let img = document.createElement('img');
    img.src = data;

    document.getElementById("target").appendChild(img);
    document.getElementById("source").removeAttribute("data-image");

})();
