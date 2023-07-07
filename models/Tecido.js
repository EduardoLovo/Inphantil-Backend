const mongoose = require("mongoose");

const LencolTecido = mongoose.model("LencolTecido", {
    img: String,
    quantidade: String,
    cor: String,
    tamanho: String
});

module.exports = LencolTecido;
