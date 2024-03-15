// VARIABLES
let bands = ["NIN", "Deftones", "Pantera", "Meshuggah", "Isis", "TOOL"]; // dream tour!
// SPLICE
let joiningBand = bands.splice(6, 0, "Red Fang", "Chevelle"); // added 2 bands without deleting any
let cancelBand = bands.splice(2, 1); // removed second index (Pantera)
console.log(cancelBand + " canceled.");

// FUNCTIONS
// add space at beggining of every string on 'bands' array
for (var i = 0; i < bands.length; i++) {
  bands[i] = " " + bands[i];
}

// VARIABLES
let industrialBands = bands.slice(0, 1);
let proggyBands = bands.slice(3, 6); // starts at index 3 and includes it; ends at index 6 but doesnt include it
let lastBands = bands.slice(6, 8);

// CONSOLE LOGS
console.log("Tour 2024:" + bands + ": confirmed bands so far.");
console.log("presenting " + bands.length + " bands");
console.log(industrialBands + " is an idustrial band.");
console.log(proggyBands + " are proggy bands.");
console.log(lastBands + " are the last bands to present.");
