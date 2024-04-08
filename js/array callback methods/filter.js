const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const isOdd = nums.filter((n) => {
  return n % 2 === 1;
}); /* if callback returns true (division remainder = 1), the number will be added to the new 'isOdd' array.*/
const isEven = nums.filter((n) => {
  return n % 2 === 0;
}); /* if callback returns true (division remainder = 0), the number will be added to the new 'isEven' array.*/
console.log(isOdd); // [ 9, 7, 5, 3, 1 ]
console.log(isEven); // [ 8, 6, 4, 2 ]

const lessThan5 = nums.filter((n) => {
  return n <= 5;
});
console.log(lessThan5); // [ 5, 4, 3, 2, 1 ]

/* ------------------------ */
/* ------------------------ */

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

// filter then map
const greatMovies = movies.filter((m) => m.score > 95).map((m) => m.title);
console.log("great movies ->");
console.log(greatMovies);
