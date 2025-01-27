// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const figlet = require("figlet");
const colors = require("colors");
// figlet("figlet demo", function (err, data) {
//     if (err) {
//         localStorage;
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data.green);
// });

figlet.text(
    "TEXTO",
    {
        font: "3-D",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    },
    function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data.rainbow);
    }
);

figlet.text(
    "TEXTO",
    {
        font: "3-D",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    },
    function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data.bgMagenta);
    }
);
