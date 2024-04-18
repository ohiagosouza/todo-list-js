const express = require("express");
const router = express.Router();

const Checklist = require("../models/checklist-model");

// Buscando todos os dados
router.get("/", async (req, res) => {
  try {
    let checklist = await Checklist.find({});
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Buscando dados por ID
router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Salvando dados no servidor
router.post("/", async (req, res) => {
  let { checklistName } = req.body;

  try {
    let checklist = await Checklist.create({ checklistName });
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.put("/:id", async (req, res) => {
  let { checklistName } = req.body;

  try {
    let checklist = await Checklist.findByIdAndUpdate(req.params.id, { checklistName }, { new: true });
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndDelete(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
