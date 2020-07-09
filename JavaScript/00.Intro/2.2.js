let min = Number(prompt("Please enter a minimum number"));
let max = Number(prompt("Please entrer a maximum number"));
let current;

if (max < min) {
    console.log("Sorry, maximum must be higher than minimum.");
    exit();
} 
else {
    current = Number(prompt("Please enter the current number"));

    if (current < min) {
        console.log(current + " is smaller than " + min + " and " + max + ".");
    }
    else if (current > max) {
        console.log(current + " is bigger than " + min + " and " + max + ".");
    }
    else if (current == max) {
        console.log(current + " is equal to the maximum.")
    }
    else if (current == min) {
        console.log(current + " is equal to the minimum.")
    }
    else {
        console.log(current + " is greater than " + min + " and smaller than " + max + ".");
    }
}