// a short, clean syntax to 'UNPACK' values form arrays, properties from objects into distinct variables.

const raceResults = ["Laura Dennis", "Jay Riley", "Evan Miller"];

const [gold, silver, bronze] = raceResults;
gold;
silver;
bronze;

const [fastest, ...everyoneElse] = raceResults;
fastest;
everyoneElse;

// console.log(raceResults);
console.log("Gold goes to: " + gold);
console.log("Silver goes to: " + silver);
console.log("Bronze goes to: " + bronze);
console.log("Speed record broken by: " + fastest);
console.log("Thanks to the participants: " + everyoneElse.join(", "));
