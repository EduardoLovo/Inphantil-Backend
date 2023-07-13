const mongoose = require("mongoose");

const LencolTecido = mongoose.model("LencolTecido", {
    img: String,
    quantidade: Number,
    cor: String,
    tamanho: String,
    estoque: String
});

module.exports = LencolTecido;
