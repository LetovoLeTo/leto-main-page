const express = require("express");

const app = express();

app.use("/", express.static("html"));
app.get("/", (req, res) => {
    res.sendFile("html/index.html");
});

module.exports = app;