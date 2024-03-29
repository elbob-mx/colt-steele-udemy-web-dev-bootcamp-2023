// let maxNum = parseInt(
//   prompt("Let's make a numbers range. Tell us the maximum number:")
// );
// while (!maxNum) {
//   maxNum = parseInt(prompt("Please enter a valid number:"));
// }

// const targetNum = Math.floor(Math.random() * maxNum + 1);
// console.log(targetNum);

// let attempt = parseInt(prompt("Come on, try to guess the number:"));
// let guesses = 1;

// while (parseInt(attempt) !== targetNum) {
//   if (attempt === "quit") break;
//   guesses++;
//   if (attempt > targetNum) {
//     attempt = prompt("nope. too high. try again:");
//   } else {
//     attempt = prompt("nope. too low. try again:");
//   }
// }
// if (attempt === "quit") {
//   prompt("maybe too hard for you.");
// } else {
//   prompt(
//     `alright, alright, alright. Took you ${guesses} guesses. I guess you should be proud ¬¬`
//   );
// }

// fixed:
let maxNum = parseInt(
  prompt("Let's make a numbers range. Tell us the maximum number:")
);
while (!maxNum) {
  maxNum = parseInt(prompt("Please enter a valid number:"));
}

const targetNum = Math.floor(Math.random() * maxNum + 1);
console.log(targetNum);

let attempt = prompt("Come on, try to guess the number:");
let guesses = 1;

while (parseInt(attempt) !== targetNum) {
  if (attempt === "quit") break;
  attempt = parseInt(attempt);
  if (attempt > targetNum) {
    attempt = prompt("nope. too high. try again:");
    guesses++;
  } else if (attempt < targetNum) {
    attempt = prompt("nope. too low. try again:");
    guesses++;
  } else {
    attempt = prompt("Not valid. Enter a number or type 'quit' to end game");
  }
}
if (attempt === "quit") {
  prompt(`Game over. the number was: ${targetNum}. Better luck next time.`);
} else {
  prompt(
    `Alright, alright, alright. Took you ${guesses} guesses. Impressive IQ, you should be proud.`
  );
}
