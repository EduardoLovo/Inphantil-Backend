const mongoose = require("mongoose");

const Material = mongoose.model("Material", {
  codigo: String,
  img: String,
  estoque: Boolean,
});

module.exports = Material;
