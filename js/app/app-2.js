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
//   alert("monday, not again...");
// } else if (dayOfTheWeek === "Saturday") {
//   alert("yeah! saturday!");
// } else if (dayOfTheWeek === "Sunday") {
//   alert("well... weekend is over...");
// } else {
//   alert("invalid input");
// }

// ENTRANCE FEE
// 0-5 - free
// 5-10 - child $10
// 11-65 - adult $20
// 66+ - senior $10

const age = prompt("Enter your age");

if (age <= 0) {
  alert("so... how does it look in there?");
} else if (age <= 3) {
  alert(
    "aww! you're a baby (who knows how to type, awesome), you are free of charge!"
  );
} else if ((age >= 4, age <= 10)) {
  alert("you are a child, you only pay $10 kiddo");
} else if ((age >= 11, age <= 64)) {
  alert("you're an adult, you pay $20, thanks");
} else if ((age >= 65, age <= 99)) {
  alert(
    "as a senior, you've gt 50% discount off, you only pay $10, thank you :)"
  );
} else alert("longevity rules!");
