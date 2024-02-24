// * PC pieces using js arrays

let pc = ["mobo", "cpu", "gpu", "monitor", "keeb", "mouse"];

pc.push("wifi", "printer", "router");

pc.splice(1, 2 | 1, "intel 12300F");

pc.splice(2, 3 | 2, "rtx 3060");

pc.splice(0, 1 | 0, "asus TUF wifi mobo");

pc.push("wifi", "printer", "mouse");

pc.splice(7, 8 | 6, "basilisk x");

pc.push("logitech mx keys");

let specs = pc.length;
console.log(pc);

console.log(pc[5]);
pc[5] = "100 mbps";
console.log(pc);
pc[15] = "felt XL pad"; // *TODO: empty spaces/slots (maybe fill 'em later?)
console.log(pc);
pc[-2] = "maybe a lamp?"; //  * how?
console.log(pc);

if (pc.length === 5) {
  console.log(pc.length + "pieces nice setup 0");
} else {
  console.log(pc.length + " pieces, more than enough eqipment, but maybe...");
}

// colt's potter array

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
console.log(leaderboard);

leaderboard[1] = "Luna";
console.log(leaderboard);
leaderboard.splice(3, 4 | 3, "Draco");
console.log(leaderboard);
