console.log("");
console.log("*** / CINEMA RATINGS / ***");
console.log("");

const movies = [
  {
    title: "Good Will Hunting",
    score: 100,
  },
  {
    title: "Interstellar",
    score: 99,
  },
  {
    title: "The Shining",
    score: 97,
  },
  {
    title: "The Godfather",
    score: 98,
  },
  {
    title: "Before Sunrise",
    score: 99,
  },
  {
    title: "Tombstone",
    score: 88,
  },
  {
    title: "White Men Can't Jump",
    score: 89,
  },
];

console.log("According to the latest reviews: ");
console.log("");

// descendant order
function rateDown() {
  console.log("By Score | Descending order ↓");
  let descend = movies.sort((a, b) => b.score - a.score);
  // console.log(`- ${movies[0].title} | ${movies[0].score} / 100`);
  for (i = 0; i < descend.length; i++) {
    console.log(`- ${descend[i].title} | ${descend[i].score} / 100`);
  }
}

rateDown();

console.log("");
console.log("*** / CINEMA RATINGS / ***");
console.log("");

// ascendant order
function rateUp() {
  console.log("By Score | Ascending order ↑");
  let ascend = movies.sort((a, b) => a.score - b.score);
  // console.log(`- ${movies[0].title} | ${movies[0].score} / 100`);
  for (i = 0; i < ascend.length; i++) {
    console.log(`- ${ascend[i].title} | ${ascend[i].score} / 100`);
  }
}

rateUp();
