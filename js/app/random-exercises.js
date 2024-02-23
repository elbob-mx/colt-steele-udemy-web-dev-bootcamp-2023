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
//   console.log("falsy!");
// }

// FALSY;
// if (null == 0) {
//   console.log("it is!");
// } else {
//   console.log("it's not...");
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
// const age = 157;
// if ((age >= 0 && age <= 5) || (age >= 65 && age <= 100)) {
//   console.log("Free!");
// } else if (age >= 6 && age <= 10) {
//   console.log("$5");
// } else if (age >= 11 && age <= 64) {
//   console.log("$20");
// } else if (age > 101 && age < 150) {
//   console.log("you're strong as an oak!");
// } else console.log("wow!");

// not operator
// const age = 65;

// if (age === 0 || age <= 3) {
//   console.log("Error. Try again");
// } else if (!((age >= 4 && age < 10) || age >= 65)) {
//   alert("You'll pay $15.00");
// } else {
//   console.log("Free of charge.");
// }

// SWITCH (not that common)
// const day = 5;
// if (day === 1) {
//   console.log("monday");
// } else if (day === 2) {
//   console.log("tuesday");
// } else if (day === 3) {
//   console.log("wednesday");
// } else if (day === 4) {
//   console.log("thursday");
// } else if (day === 5) {
//   console.log("friday");
// } else if (day === 6) {
//   console.log("saturday");
// } else if (day === 7) {
//   console.log("sunday");
// } else {
//   console.log("error.");
// }

const day = 6;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
  case 7:
    console.log("weekend!");
    break;
  default:
    console.log("error.");
}
