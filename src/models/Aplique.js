const mongoose = require("mongoose");

const Aplique = mongoose.model("Aplique", {
  number: String,
  img: String,
  quantidade: Number,
  estoque: String,
});

module.exports = Aplique;
