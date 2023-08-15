const express = require("express");

const app = express();
const port = 3000;

app.use("/", express.static("html"));
app.get("/", (req, res) => {
    res.sendFile("html/index.html");
});

module.exports = app;