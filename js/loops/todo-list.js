let input = prompt("Let's create a toDo list. Add a task:");
const todos = ["Poop", "Read Nietzsche", "Listen to Meshuggah"];
while (input !== "quit") {
  if (input === "list") {
    console.log("ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ");
  } else if (input === "new") {
    const newTodo = prompt("Sure! what would it be the new task?");
    todos.push(newTodo);
    console.log(`${newTodo} has been added to the list.`);
  } else if (input === "delete") {
    const index = parseInt(prompt("What index should we erase?"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Task "${deleted}" deleted`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What else would you like to do?");
}
console.log("App closed, goodbye :)");
