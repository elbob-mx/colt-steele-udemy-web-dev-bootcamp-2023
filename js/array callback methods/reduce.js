const arr = [3, 5, 7, 9, 11];

// sum the array
const arraySum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// 3 + 5 = 8 (first call); 8 + 7 = 15 (second call); 15 + 9 = 24 (third call); 24 + 11 = 35 (fourth / final call);
console.log(arraySum); // 35
