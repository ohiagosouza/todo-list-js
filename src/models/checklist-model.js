const mongoose = require("mongoose");

const checklistSchema = mongoose.Schema({
  checklistName: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("Checklist", checklistSchema);
