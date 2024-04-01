// one argument in function
/* function rant(message) {
  console.log(`${message}`.toUpperCase());
  console.log(`${message}`.toUpperCase());
  console.log(`${message}`.toUpperCase());
}

rant("go!"); */

// two arguments in function
function principalSkinner(firstName, lastName) {
  console.log(`Lets say; ${firstName} ${lastName[0]}.`);
  console.log(`No wait, I meant, ${firstName[0]}. ${lastName}.`);
}

principalSkinner("Lisa", "Simpson");
