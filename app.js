const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>My To-Do</h1>");
});

app.listen(3000, () => {
  console.log("Server active!");
});
