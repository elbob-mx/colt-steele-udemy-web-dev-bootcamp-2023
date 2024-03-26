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
  "tv",
  "old skateboard",
  "tuna cans",
  "7.30 dollars",
  "garden chair",
  "sandwich with no ham",
  "guitar strings",
  "yellow cellphone case",
  "12 nails",
  "evangelion action figure",
  "2005 iMac",
  "nokia 1100",
];

// pick random name and number
const pickedName = randomNames[Math.floor(Math.random() * randomNames.length)];
const pickedPrize =
  randomPrizes[Math.floor(Math.random() * randomPrizes.length)];

console.log(`${pickedName} won: ${pickedPrize}. Awesome, congratulations!`);
