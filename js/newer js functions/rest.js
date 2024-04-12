function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(10, 10, 10)); // 30

/* -------------------- */
/* -------------------- */

// arguments not working as an array
// function sum() {
//   return arguments.reduce((total, el) => total * el);
// }

// console.log(sum(20, 10));

/* -------------------- */
/* -------------------- */

// REST PARAMS - collects all remaining arguments into an actual array

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
sumAll(1, 2);
sumAll(1, 2, 3, 4, 5);

// collects the REST of the values
// 3 dots on parameter 'rest' considers all values passed as a parameter on the function
function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}
console.log(sum(10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 6)); // 666

/* -------------- */
function dunkContest(first, second, third, ...theOthers) {
  console.log(`The winner is: ${first}`);
  console.log(`In close second is: ${second}`);
  console.log(`With a preem performance, third place goes to: ${third}`);
  console.log(`Thanks to the great participants: ${theOthers}`);
}
dunkContest(
  "Michael Jordan",
  "LeBron James",
  "Julius Erving",
  "Mac McClung",
  "Shaquille O'Neal",
  "Spud Webb",
  "Ja Morant",
  "Zion Williamson"
);

/* The winner is: Michael Jordan
In close second is: LeBron James
With a preem performance, third place goes to: Julius Erving
Thanks to the great participants: Mac McClung,Dwight Howard,Spud Webb,Ja Morant,Zion Williamson */
