const mongoose = require("mongoose");

const Aplique = mongoose.model("Aplique", {
  codigo: String,
  imagem: String,
  quantidade: Number,
  estoque: String,
  ordem: Number,
});

module.exports = Aplique;
