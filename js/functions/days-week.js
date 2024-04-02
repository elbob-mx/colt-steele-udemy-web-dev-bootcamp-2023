// function returnDay(numOfDay) {
//   if (numOfDay === 1) {
//     return "Monday";
//   } else if (numOfDay === 2) {
//     return "Tuesday";
//   } else if (numOfDay === 3) {
//     return "Wednesday";
//   } else if (numOfDay === 4) {
//     return "Thursday";
//   } else if (numOfDay === 5) {
//     return "Friday";
//   } else if (numOfDay === 6) {
//     return "Saturday";
//   } else if (numOfDay === 7) {
//     return "Sunday";
//   } else {
//     return null;
//   }
// }

// console.log(returnDay(1));

const daysWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

function chooseDay(num) {
  if (daysWeek[i] === num) {
    console.log(daysWeek[num]);
  } else {
    console.log(null);
  }
}

chooseDay(2);
