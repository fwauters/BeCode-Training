
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte.charAt(4);
}
let afficher9Car =  (texte) => {
    return texte.substring(0,9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    let type = typeof texte;
    if (type === "string") {
        return true;
    }
    else {return false;}
}
let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length - 1;
}
let InverseString =  (texte) => {
    let splitString = texte.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let absoluteArray = [];
    array.forEach(element => {
        element = Math.abs(element);
        absoluteArray.push(element);
    });
    return absoluteArray;
}
let sufaceCercle =  (rayon) => {
    let surface = Math.pow(rayon, 2) * Math.PI;
    return Math.round(surface);
}
let hypothenuse =  (ab, ac) => {
    let squareRes = Math.pow(ab, 2) + Math.pow(ac, 2);
    return Math.sqrt(squareRes);
}
let calculIMC =  (poids, taille) => {
    let imc = poids / Math.pow(taille, 2);
    return Number(imc.toFixed(2));
}
