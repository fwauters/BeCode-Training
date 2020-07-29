let shoeSize = Number(prompt("What is your shoe size ?"));
let birthYear = Number(prompt("What is your year of birth ?"));

result = ((((shoeSize * 2) + 5) * 50) - birthYear) + 1766;

console.log("The result is " + result);