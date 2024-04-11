/* spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. */

const nums = [13, 8, 5, 3];
Math.max(nums); // NaN
// use spread...
console.log(Math.max(...nums)); // 13
console.log(Math.min(...nums)); // 3
console.log(...nums); // turns "nums" array into individual arguments

const sounds = ["oops", "yeap", "woof", "plop", "bam"];

console.log(...nums, ...sounds); // both arrays joined into one individual arguments
