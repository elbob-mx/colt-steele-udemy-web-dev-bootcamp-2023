// const examScores = [75, 80, 90, 60, 83, 98];

// let classroomPassed = examScores.every((score) => score >= 70);
// console.log(classroomPassed); // false

// const words = ["dog", "dig", "log", "bag", "wag"];

// words.every((w) => {
//   let last_letter = w[w.length - 1];
//   return last_letter === "g";
// }); // true

// words.every((w) => {
//   let last_letter = w[w.length - 1];
//   console.log(last_letter === "g");
// }); // true

const array = [2, 4, 6, 8];

function allEvens(array) {
  return array.every((num) => num % 2 == 0);
}

console.log(allEvens(array));
