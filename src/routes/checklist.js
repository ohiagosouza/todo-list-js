const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  console.log(`Status code: ${res.statusCode}`);
  res.status(200).send(req.body);
});

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(`Status code: ${res.statusCode}`);
  res.status(200).send(req.body);
});

router.get("/:id", (req, res) => {
  res.send(`ID: ${req.params.id}`);
  console.log(req.params.id);
});

module.exports = router;
