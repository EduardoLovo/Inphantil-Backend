const mongoose = require("mongoose");

const LencolAplique = mongoose.model("LencolAplique", {
    number: String,
    img: String,
    quantidade: String,
    cor: String,
    tamanho: String
});

module.exports = LencolAplique;
