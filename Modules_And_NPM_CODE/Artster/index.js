// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const figlet = require("figlet");
const colors = require("colors");
figlet("PANTERA", function (err, data) {
    if (err) {
        localStorage;
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.green);
});
