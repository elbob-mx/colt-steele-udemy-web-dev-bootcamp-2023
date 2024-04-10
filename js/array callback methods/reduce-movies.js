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

const bestMovie = movies.reduce((hiScore, current) => {
  if (current.score > hiScore.score) {
    return current;
  }
  return hiScore;
});

console.log(bestMovie);
