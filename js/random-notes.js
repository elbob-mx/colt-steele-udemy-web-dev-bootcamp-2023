// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5).replace("o", "e");
console.log(facialHair);

// Random number between 0 and 1000
`${Math.floor(
  Math.random() * 1000 + 1
)}` //Random number between 20 and 22
`${Math.floor(Math.random() * 3 + 20)}`;

//VARIABLES//
let product = "Lettuce";
let price = 1.99;
let qty = 10;
const tax = 1.16;

// Syntax for "You bought 10 pieces of Lettuce. That'd be $24 please." //
`You bought ${qty} pieces of ${product}. That'd be $${Math.ceil(
  price * qty * tax
)} please.`;
