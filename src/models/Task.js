const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  text: String,
  check: Boolean,
  vendedor: String
});

module.exports = Task;
