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

if (pc.length === 5) {
  console.log(pc.length + "pieces nice setup 0");
} else {
  console.log(pc.length + " pieces, more than enough eqipment, but maybe...");
}
