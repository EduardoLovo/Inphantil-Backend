const mongoose = require("mongoose");

const LencolTecido = mongoose.model("LencolTecido", {
    img: String,
    quantidade: Number,
    cor: String,
    estoque: String
});

module.exports = LencolTecido;
