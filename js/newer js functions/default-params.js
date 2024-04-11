// old way:
function rollDice(numSides) {
  if (numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDice()); // if not value is passed, value will be '6' by default

//new way:
function rollNewDice(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}
console.log(rollNewDice(20)); // if not value is passed, value will be '6' by default

// new way:
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(4, 5)); // 20

// new way:
function greet(personName, msg = "hello", punctuation = "!") {
  return `${msg}, ${personName}${punctuation}`;
}
console.log(greet("bob"));
