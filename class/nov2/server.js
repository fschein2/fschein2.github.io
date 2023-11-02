const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/animals", (req, res) => {
    const animals = [];
    animals[0] = {
        name: "lion",
        color: "yellow",
        state: "fierce",
    };
    animals[1] = {
        name: "bear",
        color: "brown",
        state: "timid",
    };
    animals[2] = {
        name: "penguin",
        color: "black and white",
        state: "playful",
    };

    res.json(animals);
});

app.listen(3000, () => {
    console.log("listening");
});