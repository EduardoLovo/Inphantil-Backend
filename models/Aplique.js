const mongoose = require("mongoose");

const Aplique = mongoose.model("Aplique", {
  number: String,
  img: String,
  quantidade: String,
});

module.exports = Aplique;
