const words = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte"];

const wordsCap = words.map(function (item) {
  return item.toUpperCase();
});

console.log(words); // '[byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte']
console.log(wordsCap); // ['BYTE', 'KILOBYTE', 'MEGABYTE', 'GIGABYTE', 'TERABYTE']

/* ---------------------- */
/* ---------------------- */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const nums = numbers.map(function (item) {
  return item * 2;
});

console.log(numbers); /* [
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ]
  */
console.log(nums + " / doubled!"); // (note: not an array coz string input on console!) '2 times,4 times,6 times,8 times,10 times,12 times,14 times,16 times,18 times / doubled!

console.log(nums); /* (note: result in new array) [
    2,  4,  6,  8, 10,
   12, 14, 16, 18
 ]
 */

/* ---------------------- */
/* ---------------------- */

console.log("");
console.log("*** / CINEMA FILMS TODAY / ***");
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

const showingToday = movies.map(function (movie) {
  return movie.title + " ";
});

console.log("🎞🎞🎞 " + showingToday.length + " movies showing today:");
console.log(showingToday + "");

/* ---------------------- */
/* ---------------------- */
