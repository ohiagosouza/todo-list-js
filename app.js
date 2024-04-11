const express = require("express");
const checklistsRouter = require("./src/routes/checklist.js");

const app = express();
app.use(express.json()); //Indica que o middleware deve ser usado, nesse caso verifica se há um body no JSON.

app.use(express.json()); //Indica que o middleware deve ser usado, nesse caso verifica se há um body no JSON.
app.use("/checklists", checklistsRouter);

app.listen(3000, () => {
  console.log("Server active!");
});
