//  function canDrink(person) {if (person?.age != null) {
//      if (person.age < 18) {
//          console.log("nope 🤮");
//      } else if (person.age < 21) {
//          console.log("not in the US 😞");
//      } else {
//          console.log("to the pub 🍻!");
//      }
//  } else {
//          console.log("waiting for an answer...");
//      }
//  }

// function ableToDrink(person) {
//     if (person?.age == null) return console.log("you're not human 🤨");
//     else if (person.age < 18) return console.log("nope 🤮");
//     else if (person.age < 21) return console.log("not in the US 😞");
//     else return console.log("to the pub 🍻!");
// }

function canDrinkResponse(age) {
    if (age < 18) return console.log("Nope");
    if (age < 21) return console.log("Not in the US.");
    return console.log("Yes 🍻");
}

const p = {
    age: 20,
};

canDrinkResponse(p.age);
