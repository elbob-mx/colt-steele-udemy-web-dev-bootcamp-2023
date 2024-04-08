// console.log("...evening!");
// const timer = setTimeout(() => {
//   console.log("anyone in here?");
// }, 3000);
// setTimeout(() => {
//   console.log("anyone?");
// }, 6000);
// setTimeout(() => {
//   console.log("oh well...");
// }, 9000);

setInterval(() => {
  console.log(Math.floor(Math.random() * 4) + 1);
}, 1000);
const id = setInterval(() => {
  console.log("dot");
}, 4500);
