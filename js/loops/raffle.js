const randomNames = [
  "Maria Pena",
  "Samuel Nichols",
  "Nancy Hunt",
  "Austin Gregory",
  "Claudia Romero",
  "Clarence Chavez",
  "Mathilda Harrison",
  "Evelyn Cobb",
  "Noah Hines",
];

const randomPrizes = [
  "plasma tv",
  "walmart skateboard",
  "4 tuna cans",
  "7.30 dollars",
  "garden chair",
  "sandwich with no ham",
  "nylon guitar strings",
  "pair of tweezers",
  "metallica load album",
  "evangelion action figure",
  "2005 iMac",
  "nokia 1100",
];

// pick random name and number
const pickedName = randomNames[Math.floor(Math.random() * randomNames.length)];
const pickedPrize =
  randomPrizes[Math.floor(Math.random() * randomPrizes.length)];

console.log(`${pickedName} won: ${pickedPrize}. Awesome, congratulations!`);
