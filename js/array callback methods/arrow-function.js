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
