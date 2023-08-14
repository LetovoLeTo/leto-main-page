const express = require("express");

const app = express();
const port = 3000;

app.use("/res", express.static("leto-resources"));
app.use("/", express.static("html"));
app.get("/", (req, res) => {
    res.sendFile("html/index.html");
});

app.listen(port, () => console.log("Server's alive!"));