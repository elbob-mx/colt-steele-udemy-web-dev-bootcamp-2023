// Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102;

// if (num <= 100) {
//   if (num >= 50) {
//     console.log("HEY!");
//   }
// } else {
//   if (num < 103) {
//     if (num % 2 === 0) {
//       console.log("YOU GOT ME!");
//     }
//   }
// }

// TRUTHY & FALSY
// const userInput = prompt("Enter random text");

// if (userInput) {
//   alert("well done, genius. That's a TRUTHY");
// } else {
//   alert("that doesn't work. That's a FALSY");
// }

// if ("undefined") {
//   console.log("truthy!");
// } else {
//   console.log("falsey!");
// }

// AND OPERATOR
// if (1 <= 4 && "abc".length === 3) {
//   console.log("false, but true indeed");
// }

// const password = "1234 567";
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Valid password.");
// } else {
//   console.log("Invalid password");
// }

// EXERCISE
// const mystery = "PiValue7";
// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
//   console.log("YOU GOT IT!!!");
// }

// OR OPERATOR
const age = 10000000;
if ((age >= 0 && age <= 5) || (age >= 65 && age <= 100)) {
  console.log("Free!");
} else if (age >= 6 && age <= 10) {
  console.log("$5");
} else if (age >= 11 && age <= 64) {
  console.log("$20");
} else if (age > 101 && age < 200) {
  console.log("you're strong as an oak!");
} else console.log("wow!");
