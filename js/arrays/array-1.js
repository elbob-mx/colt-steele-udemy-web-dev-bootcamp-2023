// * colt's planets array

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.push("Uranus");
planets.push("Neptune");
planets.push("Pluto?");
planets.unshift("Mercury");
console.log(planets);

planets.join();
planets.join("");
planets.push("Neil Tyson 3000", "Sarah Connor");
console.log(planets.join(" / "));

// * colt's potter array

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
console.log(leaderboard);

leaderboard[1] = "Luna";
console.log(leaderboard);
leaderboard.splice(3, 4 | 3, "Draco");
console.log(leaderboard);

// * PC pieces using js arrays

let pc = ["mobo", "cpu", "gpu", "monitor", "keeb", "mouse"];

pc.push("wifi", "printer", "router");

pc.splice(1, 2 | 1, "intel 12400F");

pc.splice(2, 3 | 2, "rtx 3060");

pc.splice(0, 1 | 0, "asus prime wifi mobo");

pc.push("wifi", "printer", "mouse");

pc.splice(7, 8 | 6, "basilisk x");
console.log(pc);
pc.push("logitech mx keys");
console.log(pc[5]);

pc[5] = "100 mbps";
console.log(pc);
pc[15] = "screen light bar"; // * empty undefined slots
console.log(pc);

// * new variable array
let maybeItem = pc.pop();
console.log(maybeItem);

// * creating a wishlist with not urgent pieces
let wishlist = [];
wishlist.push(maybeItem);
console.log(wishlist);
wishlist.unshift("led strip");
console.log(wishlist);

if (pc.length === 5) {
  console.log(pc.length + "pieces, nice setup");
} else {
  console.log(pc.length + " pieces, more than enough eqipment, but maybe...");
}

// * remove multiple array elements
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

removeItems(numbers, 2);
console.log(numbers);
