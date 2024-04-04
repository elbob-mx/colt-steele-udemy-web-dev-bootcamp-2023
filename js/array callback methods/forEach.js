// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// each number in the array will pass through the function
// nums.forEach(function (n) {
//   console.log(n * n);
//   console.log("loop done. next =>");
// });

// each number in the array will pass through the function
// nums.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el); // 8,6,4,2
//   }
// });

const movies = [
  {
    title: "Good Will Hunting",
    score: 98,
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
    score: 100,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
}); /* movie title - score / 100 */
