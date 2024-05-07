function canDrink(person) {
    if (person?.age != null) {
        if (person.age < 18) {
            console.log("nope 🤮");
        } else if (person.age < 21) {
            console.log("not in the US 😞");
        } else {
            console.log("to the pub 🍻!");
        }
    } else {
        console.log("waiting for an answer...");
    }
}

const p = {
    age: 20,
};

canDrink(p);
