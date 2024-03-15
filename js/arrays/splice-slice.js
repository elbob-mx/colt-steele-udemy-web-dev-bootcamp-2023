// VARIABLES
let bands = ["NIN", "deftones", "pantera", "meshuggah", "isis", "tool"];

// FUNCTIONS
// add space at beggining of every string on 'bands' array
for (var i = 0; i < bands.length; i++) {
  bands[i] = " " + bands[i];
}

// VARIABLES
let industrialBands = bands.slice(0, 1);
let proggyBands = bands.slice(3, 6); // starts at index 3 and includes it; ends at index 6 but doesnt include it

// CONSOLE LOGS
console.log(bands);
console.log(industrialBands + " is an idustrial band.");
console.log(proggyBands + " are proggy bands.");
