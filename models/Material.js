const mongoose = require("mongoose");

const Material = mongoose.model("Material", {
  codigo: String,
  img: String,
  estoque: String,
});

module.exports = Material;
