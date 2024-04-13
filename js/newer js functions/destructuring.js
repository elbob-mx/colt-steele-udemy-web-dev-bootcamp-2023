// a short, clean syntax to 'UNPACK' values form arrays, properties from objects into distinct variables.

// const raceResults = ["Laura Dennis", "Jay Riley", "Evan Miller"];

// const [gold, silver, bronze] = raceResults;
// gold;
// silver;
// bronze;

// const [fastest, ...everyoneElse] = raceResults;
// fastest;
// everyoneElse;

// console.log(raceResults);
// console.log("Gold goes to: " + gold);
// console.log("Silver goes to: " + silver);
// console.log("Bronze goes to: " + bronze);
// console.log("Speed record broken by: " + fastest);
// console.log("Thanks to the participants: " + everyoneElse.join(", "));

/* ----------------------- */
/* ----------------------- */

const scores = [153489, 713468, 165876, 456679, 348671, 248679, 835798];
const ranking = scores.sort((a, b) => b - a); // order top score to lower

// const hiScore = scores[0];
// const secondHiScore = scores[1];

console.log(ranking);
const [gold, silver, bronze, ...mentions] = scores;
console.log(gold); // first number in 'scores' array
console.log(silver); // second number in 'scores' array
console.log(bronze); // third number in 'scores' array
console.log(mentions); // all the other scores 'scores' array
