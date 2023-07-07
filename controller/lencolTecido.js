const LencolTecido  = require("../models/Tecido");

const getAllTecido = async (req, res) => {
  await LencolTecido.find({})
    .then((lencol) => {
      res.send(lencol);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createTecido  = async (req, res) => {
  if (!req.body.img) {
    res.send("Adicione a imagem do tecido");
  } else {
    await LencolTecido.create(req.body)
      .then(() => {
        res.send("Tecido adicionado com sucesso").status(200);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getByIdLencolTecido = async (req, res) => {
    await LencolTecido.findById({ _id: req.params.id })
      .then((lencol) => {
        res.send(lencol).json;
      })
      .catch((err) => {
        res.status(404).send("Erro ao encontrar Tecido");
      });
  };
  
const updateLencolTecido = async (req, res) => {
await LencolTecido.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
    res.status(200).send("Tecido atualizado com sucesso");
    })
    .catch((err) => {
    res.status(400).send("Erro ao atualizar Tecido");
    console.log(err);
    });
};

const deleteLencolTecido = async (req, res) => {
await LencolTecido.deleteOne({ _id: req.params.id })
    .then(() => {
    res.status(200).send("Tecido excluido com sucesso");
    })
    .catch((err) => {
    res.status(400).send("Erro ao excluir Tecido");
    console.log(err);
    });
};


module.exports = {
    getAllTecido,
    createTecido,
    getByIdLencolTecido,
    updateLencolTecido,
    deleteLencolTecido
  };
  