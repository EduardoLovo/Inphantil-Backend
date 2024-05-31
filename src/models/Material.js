const mongoose = require("mongoose");

const Material = mongoose.model("Material", {
  codigo: String,
  cor: String,
  img: String,
  estoque: String,
});

module.exports = Material;
