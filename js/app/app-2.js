console.log("conditionals!");

if (1 == true) {
  console.log("yes, 1 is indeed true");
}

if (1 + 3 === 4) {
  console.log("sure, 1 + 3 it's 4");
}

console.log("Random number:");
console.log(Math.random());

let randomNum = Math.round(Math.random()) * 3;
console.log(randomNum);

if (randomNum === 3) {
  console.log(randomNum);
  console.log("it is!");
}

if (randomNum !== 3) {
  console.log(randomNum);
  console.log("it's not");
}
