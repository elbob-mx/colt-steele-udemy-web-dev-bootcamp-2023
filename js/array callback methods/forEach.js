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

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// }); /* movie title - score / 100 */

//for of loop
// for (let movie of movies) {
//   console.log(`${movie.title} - ${movie.score}/100`);
//   let rate = movie.score;
//   console.log(movie.score);
// }

// let rating() = console.log(movies.sort((a, b) => b.score - a.score));

// function ratingDescend() {
//   console.log(movies.sort((a, b) => b.score - a.score));
// }
// console.log("By Score | Descending order ↓");
// ratingDescend();

// function ratingAscend() {
//   console.log(movies.sort((a, b) => a.score - b.score));
// }
// console.log("By Score | Ascending order ↑");
// ratingAscend();

/*----------------------------------------*/

for (i = 0; i < movies.length; i++) {
  let order = movies.sort((a, b) => a.score - b.score);
  console.log(`test: ${order.sort((a, b) => a.score - b.score)}`);
}
