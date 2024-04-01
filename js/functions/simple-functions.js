// one argument in function
/* function rant(message) {
  console.log(`${message}`.toUpperCase());
  console.log(`${message}`.toUpperCase());
  console.log(`${message}`.toUpperCase());
}

rant("go!"); */

// two arguments in function
/* function principalSkinner(firstName, lastName) {
  console.log(`Lets say; "${firstName} ${lastName[0]}".`); // getting the initial using index
  console.log(`No, no, no, lets say, "${firstName[0]}. ${lastName}".`); // getting the initial using index
}
principalSkinner("Lisa", "Simpson"); */

// function with prompts asking for arguments
/* function repeatText(text, reps) {
  let words = prompt("Write a word:");
  text = words;
  let num = prompt("Write a number");
  reps = num;
  for (i = 2; i <= reps; i++) {
    text += words + ", ";
  }
  console.log(text);
} */

/* function repeat(text, reps) {
  let result = "";
  for (let i = 1; i <= reps; i++) {
    result += text + "... ";
  }
  console.log(result);
}

repeat("alright", 3); */

// define isSnakeEyes below:
function isSnakeEyes() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  if (dice1 === 1 && dice2 === 1) {
    console.log(dice1);
    console.log(dice2);
    console.log("Snake Eyes!");
  } else if (dice1 === dice2) {
    console.log(dice1);
    console.log(dice2);
    console.log("Pair!");
  } else {
    console.log(dice1);
    console.log(dice2);
    console.log("Not Snake Eyes!");
  }
}
isSnakeEyes();
