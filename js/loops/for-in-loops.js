const testScores = {
  keenan: 80,
  damon: 65,
  mary: 90,
  jens: 87,
  fredrik: 93,
  thomas: 94,
  lars: 66,
  simone: 82,
  james: 70,
  steve: 70,
};

//for in loop (key & value)
for (let person in testScores) {
  console.log(`${person} scored: ${testScores[person]}`);
}

console.log(Object.keys(testScores));
console.log(Object.values(testScores));
//Object mixing keys & values
console.log(Object.entries(testScores));

//getting the scores sum and then the total average
//declare total; get the scores from the object; once is an array, we can use for of to sum the scores and make the division
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
let average = total / scores.length;
console.log(average);
