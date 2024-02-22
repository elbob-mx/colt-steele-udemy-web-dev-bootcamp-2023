// Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// // DO NOT TOUCH ANYTHING BELOW (please)
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

// TRUTHY FALSY
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

// AND

// if (1 <= 4 && "abc".length === 3) {
//   console.log("false, but true indeed");
// }

// const password = "1234 567";
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Valid password.");
// } else {
//   console.log("Invalid password");
// }

const mystery = "PiValue7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}
