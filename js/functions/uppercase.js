function capitalize(str) {
  let splitWord =
    str.split(""); /* ['u', 'p', 'p','e', 'r', 'c','a','s', 'e'] */
  console.log(splitWord);

  let upChar = splitWord[0].toUpperCase();
  console.log(upChar); // "U"

  let delChar = splitWord.shift();
  console.log(delChar); // "u"
  console.log(splitWord); // /* ['p', 'p','e', 'r', 'c','a','s', 'e'] */

  let unshift = splitWord.unshift(upChar);
  console.log(unshift); // 9 (unshift shows new length)
  let result = splitWord.join(""); /* join array elements to create new word */
  console.log(result); // Anxiety
}
capitalize("anxiety");
