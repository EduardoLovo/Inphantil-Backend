const mongoose = require("mongoose");

const LencolAplique = mongoose.model("LencolAplique", {
    number: String,
    img: String,
    quantidade: Number,
    cor: String,
    tamanho: String
});

module.exports = LencolAplique;
