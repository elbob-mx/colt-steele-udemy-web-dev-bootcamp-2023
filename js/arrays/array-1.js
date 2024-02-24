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
pc[15] = "screen light bar?"; // ! empty undefined slots
console.log(pc);

let maybeItem = pc.pop(); // ! new variable array
console.log(maybeItem);

let wishlist = []; // ! creating a wishlist with not urgent pieces
wishlist.push(maybeItem);
console.log(wishlist);

if (pc.length === 5) {
  console.log(pc.length + "pieces nice setup 0");
} else {
  console.log(pc.length + " pieces, more than enough eqipment, but maybe...");
}

let specsQty = pc.length;
console.log(specsQty + " pieces");
