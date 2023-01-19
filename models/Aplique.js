const mongoose = require("mongoose");

const Aplique = mongoose.model("Aplique", {
  number: String,
  img: String,
  quantidade: String,
  estoque: String,
});

module.exports = Aplique;
