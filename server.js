const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hello</h1>");
});

app.listen(8080);
console.log("server on port 8080");
