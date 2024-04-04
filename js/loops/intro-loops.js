// intro to loops

//for loop
// if 'i' is less or equal to 20 (and it's not), add 5 to 'i' and display it on console until 'i' gets to 20, then stop.
for (let i = 5; i <= 20; i += 5) {
  console.log(i);
}

// odd numbers
for (let i = 20; i >= 0; i -= 2) {
  console.log("restando");
  console.log(i);
}

//multiplying
for (let i = 10; i <= 1000; i *= 10) {
  console.log(i);
}

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 0; i <= 5; i * 2) {
  console.log("Da ba dee da ba daa");
}
