// console.log("conditionals!");

// if (1 == true) {
//   console.log("yes, 1 is indeed true");
// }

// if (1 + 3 === 4) {
//   console.log("sure, 1 + 3 it's 4");
// }

// // RANDOM NUM
// console.log("Random number:");
// console.log(Math.random());

// let randomNum = Math.round(Math.random()) * 3;
// console.log(randomNum);

// if (randomNum === 3) {
//   console.log(randomNum);
//   console.log("it is!");
// }

// if (randomNum !== 3) {
//   console.log(randomNum);
//   console.log("it's not");
// }

// // ODD NUM
// let num = 10;
// console.log(num);

// function isEven(num) {
//   if (num % 2 == 0) {
//     console.log("even");
//   } else if (num % 3 == 0) {
//     console.log("odd!");
//   }
// }

// const dayOfTheWeek = "prompt("enter a day of the week")";
// if (dayOfTheWeek === "Monday") {
//   console.log("monday, not again...");
// } else if (dayOfTheWeek === "Saturday") {
//   console.log("yeah! saturday!");
// } else if (dayOfTheWeek === "Sunday") {
//   console.log("well... weekend is over...");
// } else {
//   console.log("invalid input");
// }

// 0-5 - free
// 5-10 - child $10
// 11-65 - adult $20
// 66+ - senior $10

const age = prompt("Enter your age");
if (age < 5) {
  console.log("you're a child, you pay $10");
} else if ((age >= 1, age <= 10)) {
  console.log("you're a child, you pay $10");
} else if ((age >= 11, age <= 64)) {
  console.log("you're an adult, you pay $20");
} else if (age >= 65) {
  console.log("As a senior, you sir have a 50% discount, you only pay $10");
}
