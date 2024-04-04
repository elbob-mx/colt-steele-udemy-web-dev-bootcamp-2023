// try {
//   hello.toUpperCase();
// } catch {
//   console.log("tried code. error caught.");
// }

function scream(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("error detected. type text message instead.");
  }
}

scream("run");
