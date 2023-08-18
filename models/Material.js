const mongoose = require("mongoose");

const Material = mongoose.model("Material", {
  codigo: String,
  img: String,
  estoque: Boolean,
  rolos: Array
});

module.exports = Material;
