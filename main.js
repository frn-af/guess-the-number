"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function main() {
    var lower_bound = 1;
    var upper_bound = 100;
    var random_number = getRandomNumber(lower_bound, upper_bound);
    var guess;
    console.log("I have a number between 1 and 100.");
    console.log("Can you guess my number?");
    do {
        guess = parseInt(readlineSync.question("Guess what number I have: "));
        if (isNaN(guess)) {
            console.log("Please enter a number.");
        }
        else if (guess < lower_bound || guess > upper_bound) {
            console.log("Please enter a number between ".concat(lower_bound, " and ").concat(upper_bound, "."));
        }
        else if (guess > random_number) {
            console.log("Your guess is too high");
        }
        else if (guess < random_number) {
            console.log("Your guess is too low");
        }
        else {
            console.log("You got it!");
        }
    } while (guess !== random_number);
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
main();
