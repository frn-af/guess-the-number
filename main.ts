import * as readlineSync from "readline-sync";

function main() {
  const lower_bound: number = 1;
  const upper_bound: number = 100;
  const random_number: number = getRandomNumber(lower_bound, upper_bound);

  let guess: number;

  console.log("I have a number between 1 and 100.");
  console.log("Can you guess my number?");

  do {
    guess = parseInt(readlineSync.question("Guess what number I have: "));

    if (isNaN(guess)) {
      console.log("Please enter a number.");
    } else if (guess < lower_bound || guess > upper_bound) {
      console.log(
        `Please enter a number between ${lower_bound} and ${upper_bound}.`
      );
    } else if (guess > random_number) {
      console.log("Your guess is too high");
    } else if (guess < random_number) {
      console.log("Your guess is too low");
    } else {
      console.log("You got it!");
    }
  } while (guess !== random_number);
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();
