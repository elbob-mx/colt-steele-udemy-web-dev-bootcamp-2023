// function rollTwoDices(funk) {
//   funk();
//   funk();
// }

// function pullTenNumbers(f) {
//   for (let i = 0; i <= 9; i++) {
//     f();
//   }
// }

// function rollDice() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// console.log(rollTwoDices(rollDice));
// console.log(pullTenNumbers(rollDice));

function makeRangeFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isMinor = makeRangeFunc(0, 18);
console.log(isMinor(12)); // true

const isAdult = makeRangeFunc(19, 64);
console.log(isAdult(53)); // true

const isSenior = makeRangeFunc(65, 110);
console.log(isSenior(72)); // true
