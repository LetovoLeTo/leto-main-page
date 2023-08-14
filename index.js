const express = require("express");

const app = express();
const port = 3000;

app.use("/res", express.static("leto-resources"));

app.listen(port, () => console.log("Server's alive!"))