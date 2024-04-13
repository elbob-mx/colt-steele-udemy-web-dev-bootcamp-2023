const movies = [
  {
    title: "Good Will Hunting",
    score: 83,
    year: 1997,
    genre: "drama",
  },
  {
    title: "Interstellar",
    score: 87,
    year: 2014,
    genre: "sci-fi",
  },
  {
    title: "The Shining",
    score: 84,
    year: 1980,
    genre: "terror",
  },
  {
    title: "The Godfather",
    score: 92,
    year: 1972,
    genre: "drama",
  },
  {
    title: "Before Sunrise",
    score: 81,
    year: 1995,
    genre: "drama",
  },
  {
    title: "Tombstone",
    score: 78,
    year: 1993,
    genre: "western",
  },
  {
    title: "White Men Can't Jump",
    score: 68,
    year: 1992,
    genre: "comedy",
  },
];

// console.log(movies.filter((movie) => movie.score >= 90));

// shorter syntax
console.log(movies.filter(({ score }) => score >= 90));

// map
// console.log(
//   movies.map((movie) => {
//     return `${movie.title} (${movie.year}) scored: ${movie.score}`;
//   })
// );

// shorter map syntax
console.log(
  movies.map(({ title, year, score }) => {
    return `${title} (${year}) got rated ${score}.`;
  })
);
