
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let dateObj = new Date();
    let minute = dateObj.getMinutes();
    let hour = dateObj.getHours();
    let day = String(dateObj.getDay());
    let date = dateObj.getDate();
    let month = String(dateObj.getMonth());
    let year = dateObj.getFullYear();

    let actualDate = day + "/" + month + "/" + year + " " + hour + ":" + minute;
        console.log(actualDate);

    let textDay;
    switch (day) {
        case '0' :
            textDay = "Sunday";
            break;
        case '1' :
            textDay = "Monday";
            break;
        case '2' :
            textDay = "Tuesday";
            break;
        case '3' :
            textDay = "Wednesday";
            break;
        case '4' :
            textDay = "Thursday";
            break;
        case '5' :
            textDay = "Friday";
            break;
        case '6' :
            textDay = "Saturday";
            break;        
    }

    let textMonth;
    switch (month) {
        case '0' :
            textMonth = "January";
            break;
        case '1' :
            textMonth = "February";
            break;
        case '2' :
            textMonth = "March";
            break;
        case '3' :
            textMonth = "April";
            break;
        case '4' :
            textMonth = "May";
            break;
        case '5' :
            textMonth = "June";
            break;
        case '6' :
            textMonth = "July";
            break;
        case '7' :
            textMonth = "August";
            break;
        case '8' :
            textMonth = "September";
            break;
        case '9' :
            textMonth = "October";
            break;
        case '10' :
            textMonth = "November";
            break;
        case '11' :
            textMonth = "December";
            break;
    }

    document.getElementById("target").innerHTML =
        textDay + " " + date + " " + textMonth + " " + year + ", " + hour + "h" + minute;

})();
