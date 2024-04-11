function rollDice(numSides) {
  if (numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDice()); // if not value is passed, value will be '6' by default
