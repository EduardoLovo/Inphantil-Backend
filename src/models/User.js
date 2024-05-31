const mongoose = require("mongoose");

const User = mongoose.model("User", {
  usuario: String,
  password: String,
  type: String,
});

module.exports = User;
