// arrow function: shorter function syntax
const add = (x, y) => {
  return x * y * 3;
};

console.log(add(2, 2)); // 12

/* --------------------------- */
/* --------------------------- */

const square = (x) => {
  return x * x;
};

console.log(square(7)); // 21.99113

/* --------------------------- */
/* --------------------------- */

const rollDice = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDice());

/* --------------------------- */
/* --------------------------- */

const greet = (name) => {
  return `Hey ${name}!`;
};

console.log(greet("Colt"));

/* --------------------------- */
/* --------------------------- */

// even shorter syntax
const hey = (firstName) => `Hey, ${firstName}...`;
console.log(hey("Bob")); // hey bob...

// numeric comparison
const isEven = (num) => num % 2 === 0;
console.log(isEven(11)); // false

// roll dice
const roll = () => Math.floor(Math.random() * 6) + 1;
console.log(roll()); // random num

const sum = (x, y) => x + y;
console.log(sum(2, 2)); // 4
