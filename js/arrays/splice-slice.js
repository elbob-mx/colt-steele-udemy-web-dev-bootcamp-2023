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
let proggyBands = bands.slice(2, 5); // starts at index 3 and includes it; ends at index 6 but doesnt include it
let lastBands = bands.slice(5, 7);

// CONSOLE LOGS
console.log("Tour 2024:" + bands + ": confirmed bands so far.");
console.log("presenting " + bands.length + " bands.");
console.log(industrialBands + " is an idustrial band.");
console.log(proggyBands + " are proggy bands.");
console.log(lastBands + " are the last bands to present.");

let orderedBands = bands.sort();
console.log(orderedBands.toString() + " (bands alphabetized)."); // array turn to strings and alphabetized
console.log("=============== PRICES ================="); // nevermind this separator

// PRICES
let prices = [100, 180, 250, 50, 500, 850, 1000, 85, 3200]; // un-ordered prices
prices.sort((a, b) => a - b); // sorts comparing numeric value (85, 100, 180, 250, 500, 850, 1000, 3200)

console.log(
  prices.toLocaleString("es-MX", { style: "currency", currency: "MXN" })
);

// vip ticket
const vipTicket = 3200;
let vipUsd = Intl.NumberFormat("es-MX");
console.log("MX VIP ticket price: " + "$" + vipUsd.format(vipTicket));
