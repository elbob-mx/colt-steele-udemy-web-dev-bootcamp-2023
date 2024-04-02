let array = [1, 2, 3, 5]; // 11

//for loop
/* function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sumArray(array)); */

/*--------------------------*/
/*--------------------------*/

//forEach loop
/* function sumArray(array) {
  let total = 0;
  array.forEach((e) => {
    total += e;
  });
  return total;
}

console.log(sumArray(array)); */

/*--------------------------*/
/*--------------------------*/

// reduce() loop
function sumArray(array) {
  let total = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return total;
}
console.log(sumArray(array));

/*--------------------------*/
/*--------------------------*/
