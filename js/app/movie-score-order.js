console.log("");
console.log("*** / CINEMA RATINGS / ***");
console.log("");

const movies = [
  {
    title: "Good Will Hunting",
    score: 100,
    year: 1997,
    genre: "drama",
  },
  {
    title: "Interstellar",
    score: 99,
    year: 2014,
    genre: "sci-fi",
  },
  {
    title: "The Shining",
    score: 97,
    year: 1980,
    genre: "horror",
  },
  {
    title: "The Godfather",
    score: 98,
    year: 1972,
    genre: "thriller",
  },
  {
    title: "Before Sunrise",
    score: 99,
    year: 1995,
    genre: "drama",
  },
  {
    title: "Tombstone",
    score: 88,
    year: 1993,
    genre: "western",
  },
  {
    title: "White Men Can't Jump",
    score: 89,
    year: 1992,
    genre: "drama",
  },
];

console.log("According to the latest reviews: ");
console.log("");

// descendant order
function rateDown() {
  console.log("By Score | Descending order ↓ :");
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
  console.log("By Score | Ascending order ↑ :");
  let ascend = movies.sort((a, b) => a.score - b.score);
  // console.log(`- ${movies[0].title} | ${movies[0].score} / 100`);
  for (i = 0; i < ascend.length; i++) {
    console.log(`- ${ascend[i].title} | ${ascend[i].score} / 100`);
  }
}
rateUp();

console.log("best movies ->");
const bestMovies = movies.filter((m) => m.score >= 95);
console.log(bestMovies);

console.log("not so old movies ->");
const newMovies = movies.filter((m) => m.year >= 2000);
console.log(newMovies);

console.log("classic! ->");
const classicMovs = movies.filter((m) => m.year <= 1980);
console.log(classicMovs);

console.log("genre! ->");
const westernMovies = movies.filter((m) => m.genre === "western");
console.log(westernMovies);
