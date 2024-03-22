// two level arrays
const brands = [
  ["fender", "gibson", "esp", "reverend"],
  ["dw", "mapex", "sonor", "pearl"],
  ["zildjian", "paiste", "meinl"],
  ["ibanez", "digitech", "jhs", "boss", "electro-harmonix"],
];
console.log(brands);
// go to the second string on the third array:
console.log(brands[2][1]);

// free seat exercise
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];
// change null to Hugo
airplaneSeats[3][1] = "Hugo";
console.log(airplaneSeats);
