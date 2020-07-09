
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h === 17 && m <= 30) {
        document.getElementById("target").innerHTML = "Hello !";
    }
    else if (h < 17) {
        document.getElementById("target").innerHTML = "Hello !";
    }
    else {
        document.getElementById("target").innerHTML = "Good evening !";
    }

})();
