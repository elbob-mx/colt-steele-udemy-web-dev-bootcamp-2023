const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const array3 = array1.concat(array2); // new merged array

let newIndex = "pushed";
array3.push(newIndex);

console.log(array3);

// includes / indexOf / reverse
console.log(array3.includes("c") + " it is"); // expected to be true
array3.indexOf("pushed");

console.log(array3.indexOf("pushed"));
console.log(array3.includes("pushed"));
console.log(array3.reverse()); //! destructive method (chenges the original)
