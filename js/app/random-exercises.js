// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}

// TRUTHY FALSY
const userInput = prompt("Enter random text");

if (userInput) {
  alert("well done, genius. That's a TRUTHY");
} else {
  alert("that doesn't work. That's a FALSY");
}
