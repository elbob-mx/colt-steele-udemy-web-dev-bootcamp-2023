let maxNum = parseInt(
  prompt("Let's make a numbers range. Tell us the maximum number:")
);
while (!maxNum) {
  maxNum = parseInt(prompt("Please enter a valid number:"));
}

const targetNum = Math.floor(Math.random() * maxNum + 1);
console.log(targetNum);

let attempt = parseInt(prompt("Come on, try to guess the number:"));
let guesses = 1;

while (parseInt(attempt) !== targetNum) {
  if (attempt === "quit") break;
  guesses++;
  if (attempt > targetNum) {
    attempt = prompt("nope. too high. try again:");
  } else {
    attempt = prompt("nope. too low. try again:");
  }
}
if (attempt === "quit") {
  prompt("maybe too hard for you.");
} else {
  prompt(
    `alright, alright, alright. Took you ${guesses} guesses. I guess you should be proud ¬¬`
  );
}
