const express = require("express");
const { join } = require("path");

const app = express();

app.use("/", express.static("html"));
app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = app;