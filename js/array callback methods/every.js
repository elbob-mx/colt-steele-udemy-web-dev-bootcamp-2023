const words = ["dog", "dig", "log", "bag", "wag"];

words.every((w) => {
  let last_letter = w[w.length - 1];
  console.log(last_letter === "g");
}); // true

// words.every((w) => {
//   let last_letter = w[w.length - 1];
//   return last_letter === "g";
// }); // true
