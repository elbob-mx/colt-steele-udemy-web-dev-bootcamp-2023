class Pet {
    constructor(name, age) {
        console.log("IN PET CONSTRUCTOR!");
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("IN CAT CONSTRUCTOR!");
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOWWWW!!";
    }
    eat() {
        return `${this.name} ignores her food!`;
    }
}

class Dog extends Pet {
    bark() {
        return "WOOOF!!";
    }
    eat() {
        return `${this.name} elegantly eats her meaty treats!`;
    }
}

const leopolda = new Cat("Leopolda", 8);
console.log("Lady " + leopolda.eat()); // "Leopolda scarfs his food!" // "Leopolda scarfs his food!"
