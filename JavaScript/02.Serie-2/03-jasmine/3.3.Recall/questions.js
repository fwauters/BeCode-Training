let selectElementsStartingWithA = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "a") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let selectElementsStartingWithVowel = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "a" || array[i].charAt(0) === "e" ||
        array[i].charAt(0) === "i" || array[i].charAt(0) === "o" ||
        array[i].charAt(0) === "u" || array[i].charAt(0) === "y") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let removeNullElements = (array) => {
    return array.filter(elem => elem !== null);
}

let removeNullAndFalseElements = (array) => {
    let arr = array.filter(elem => elem !== null);
    return arr.filter(elem => elem !== false);
}

let reverseWordsInArray = (array) => {
    let reversedWords = [];
    for (let i = 0; i < array.length; i++) {
        let splitString = array[i].split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        reversedWords.push(joinArray);
    }
    return reversedWords;
}

let everyPossiblePair = (array) => {
    let result = [];
    array.sort();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                result.push([array[i], array[j]]);
            }
        }
    }     
    return result;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, array.length);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    let n = Math.ceil(string.length / 2);
    return string.substring(0, n);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === array[i].charAt(array[i].length-1)
        && array[i].charAt(1) === array[i].charAt(array[i].length-2)) {
            count++;
        }
    }
    return count;
}

let shortestWord = (array) => {
    let letters = 99;
    let shortest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < letters) {
            letters = array[i].length;
            shortest = array[i];
        }
    }
    return shortest;
}

let longestWord = (array) => {
    let letters = 0;
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > letters) {
            letters = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

let sumNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let repeatElements = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i]);
    }
    for (let j = 0; j < array.length; j++) {
        newArr.push(array[j]);
    }
    return newArr;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 5) {
            newArr.push(array[i]);
        }
        else {
            break;
        }
    }
    return newArr;
}

let convertArrayToObject = (array) => {
    let object = {};
    for (let i = 0; i < array.length; i += 2) {
        object[array[i]] = array[i+1];
    }
    return object;
}

let getAllLetters = (array) => {
    let letters = [];
    for (let i = 0; i < array.length; i++) {
        let char = array[i].split("");
        for (let j = 0; j < char.length; j++) {
            letters.push(char[j]);
        }
    }
    return [...new Set(letters.sort())];
}

let swapKeysAndValues = (object) => {
    let newObj = {};
    for (let prop in object) {
        if(object.hasOwnProperty(prop)) {
          newObj[object[prop]] = prop;
        }
      }
    return newObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    let keys = [...new Set(Object.keys(object))];
    let values = [...new Set(Object.values(object))];
    keys.forEach(elem => sum += Number(elem));
    values.forEach(elem => sum += Number(elem));
    return sum;
}

let removeCapitals = (string) => {
    let array = string.split("");
    let newArr = [];
    array.forEach(char => {
        if (char === char.toLowerCase()) {
            newArr.push(char);
        }
    });
    let newString = newArr.join("");
    return newString;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return `0${date.getUTCDate()}/0${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
}

let getDomainName = (string) => {
    string = string.split("@");
    string = string[1];
    let i = string.lastIndexOf(".");
    string = string.split("");
    let arr = [];
    for (let j = 0; j < i; j++) {
        arr.push(string[j]);
    }
    let newString = arr.join("");
    return newString;
}

let titleize = (string) => {

    function addCap(string) {
        let arr = string.split(" ");
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > 3 || i === 0) {            
                let char = arr[i].split("");
                char[0] = arr[i][0].toUpperCase();
                newArr.push(char.join(""));       
            }
            else {
                newArr.push(arr[i]);
            }
        }
        return newArr.join(" ");
    }
    
    let dot = /[.]/g;
    if (dot.test(string) === true) {
        let subString = string.split(".");
        let a = subString[0];
        let b = subString[1].slice(1,subString[1].length);
        return addCap(a) + ". " + addCap(b);
    }
    else {
        return addCap(string);
    }
    
}

let checkForSpecialCharacters = (string) => {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    return regex.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let f = 1;
    function factorial(a) {
        if (a === 0) {
            return f;
        }
        else {
            f *= a;
            return factorial(a - 1);
        }
    }
    return factorial(number);
}

let findAnagrams = (string) => {

    function getAnagrams(string) {
        if (string.length === 1)
            return string;
        let anagrams = [];
        for (let i = 0; i < string.length; i++) {
            let s = string[0];
            let newA = getAnagrams(string.slice(1, string.length));
            for (let j = 0; j < newA.length; j++)
                anagrams.push(s + newA[j]);
            string = string.slice(1, string.length) + s;
        }
        return anagrams;
    }
    return getAnagrams(string);
}

let convertToCelsius = (number) => {
    let result = (number - 32) * (5/9);
    return Math.round(result);
}

let letterPosition = (array) => {

    function alphabetPosition(letter) {
        if (letter === letter.toUpperCase()) {
            let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
            return alpha.indexOf(letter) + 1;
        }
        else {
            let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
            return alpha.indexOf(letter) + 1;
        }
    }
    
    let newArr = [];
    array.forEach(letter => {
        newArr.push(alphabetPosition(letter));
    });

    return newArr;
}
