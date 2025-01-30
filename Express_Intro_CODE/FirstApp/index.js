// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("ana says: 'i died'!");
//     res.send("<h1>This is my webpage!</h1>");
// });

app.get("/", (req, res) => {
    res.send(
        `<h1 style="font-family:monospace; background-color:cyan;">Esto es un servidor local en el cuarto!</h1><p style="font-family:monospace; background-color:lightgray;">texto cualquiera sin propósito como la vida misma</p>`
    );
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Esto es un titulo h1 ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
    res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!");
});

app.get("/cats", (req, res) => {
    res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
    res.send("WOOF!");
});
app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!");
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`);
    }
});

app.get("*", (req, res) => {
    res.send(`I don't know that path!`);
});

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080 beep bop beep bop!");
});
