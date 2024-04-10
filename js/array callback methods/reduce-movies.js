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

// highest rated movie on the array
const bestMovie = movies.reduce((hiScore, current) => {
  if (current.score > hiScore.score) {
    return current;
  }
  return hiScore;
});

console.log(bestMovie);

// lowest rated movie on the array
const lowestMovie = movies.reduce((hiScore, current) => {
  if (current.score < hiScore.score) {
    return current;
  }
  return hiScore;
});

console.log(lowestMovie);
