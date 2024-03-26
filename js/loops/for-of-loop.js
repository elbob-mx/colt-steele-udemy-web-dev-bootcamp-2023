const subreddits = [
  "cringe",
  "mexico",
  "mgs",
  "rdr2",
  "cp2077",
  "tacos",
  "cats",
  "rodney mullen",
];

for (i = 0; i < subreddits.length; i++) {
  console.log(`This week updated subreddit: reddit.com/r/${subreddits[i]}`);
}

console.log(
  `*** Our Weekly Pick: reddit.com/r/${
    subreddits[Math.floor(Math.random() * subreddits.length)]
  }`
);

// for of -->
for (let topic of subreddits) {
  console.log(`* This is: ${topic} in Reddit`);
}

const gear = [
  ["bass", "cables", "pedals", "strap", "amp"],
  ["guitar", "cables", "pedals", "strap", "amp"],
  ["drums", "cymbals", "drumsticks", "earplugs"],
  ["mic"], // damn singers
];

for (let equipment of gear) {
  for (let piece of equipment) {
    console.log(piece);
  }
}

for (let char of "dimebag") {
  console.log(char);
}
