function rollTwoDices(funk) {
  funk();
  funk();
}

function pullTenNumbers(f) {
  for (let i = 0; i <= 9; i++) {
    f();
  }
}

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

console.log(rollTwoDices(rollDice));
console.log(pullTenNumbers(rollDice));
