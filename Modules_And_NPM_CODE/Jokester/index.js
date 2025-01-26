const jokes = require("give-me-a-joke");
console.log(jokes);
const colors = require("colors");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.underline.green);
});
