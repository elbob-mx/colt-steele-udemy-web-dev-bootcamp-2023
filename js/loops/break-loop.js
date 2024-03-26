let input = prompt("say something to me...");
while (true) {
  // this will copy what the user inputs
  input = prompt(input);
  // if user inputs exactly "stop!" it will break
  if (input === "stop!") break;
}
prompt("alright alright, relax, i'm just messing with you...");
