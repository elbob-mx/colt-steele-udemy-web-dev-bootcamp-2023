let pc = ["mobo", "cpu", "gpu", "monitor", "keeb", "mouse"];
console.log(pc);

pc.push("wifi", "printer", "router");
console.log(pc);

pc.splice(1, 2 | 1, "intel");
console.log(pc);

pc.splice(2, 3 | 2, "rtx 3060");
console.log(pc);

pc.splice(0, 1 | 0, "asus TUF wifi");
console.log(pc);

pc.push("wifi", "printer");
console.log(pc);
