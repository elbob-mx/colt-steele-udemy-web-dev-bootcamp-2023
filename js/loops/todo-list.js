let input = prompt("Let's create a toDo list. Add a task:"); // where the task todo is taken; input by user
const todos = ["Poop", "Read", "Both"]; // listed tasks (with some previously added tasks)
while (input !== "quit") {
  /* while input is not QUIT. do the following: */
  if (input === "list") {
    /* if the input is the word list; show in console the listed tasks with its index number */
    console.log("ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
      console.log("ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ ᓚᘏᗢ");
    }
  } else if (input === "new") {
    /* if the input word is new; prompt the user to add a task */
    const newTodo = prompt("Sure! what would it be the new task?");
    todos.push(newTodo);
    console.log(
      `${newTodo} has been added to the list.`
    ); /* show in console the new added task */
  } else if (input === "delete") {
    const index = parseInt(
      prompt("What index should we erase?")
    ); /* if the input word is delete; prompt the user to enter the index (task) to be deleted */
    if (!Number.isNaN(index)) {
      /* if the input number is not a NaN, proceed to splice (delete) such index from the todos const array */
      const deleted = todos.splice(index, 1);
      console.log(
        `Task "${deleted}" deleted`
      ); /* show in console the deleted index to confirm */
    } else {
      console.log(
        "Unknown index"
      ); /* if the entered index doesn't exist; show in console 'unknown index' */
    }
  }
  input = prompt(
    "What else would you like to do?"
  ); /* after any procedure; ask user for new activity */
}
console.log("App closed, goodbye :)"); /* if the user entered quit; end app */
