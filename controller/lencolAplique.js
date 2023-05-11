const LencolAplique = require("../models/LencolAplique");

const getAllLencol = async (req, res) => {
  await LencolAplique.find({})
    .then((lencol) => {
      res.send(lencol);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createLencol = async (req, res) => {
  if (!req.body.number) {
    res.send("Adicione o numero do lençol");
  } else {
    await LencolAplique.create(req.body)
      .then(() => {
        res.send("Lençol adicionado com sucesso").status(200);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getByIdLencolAplique = async (req, res) => {
    await LencolAplique.findById({ _id: req.params.id })
      .then((lencol) => {
        res.send(lencol).json;
      })
      .catch((err) => {
        res.status(404).send("Erro ao encontrar Lençol");
      });
  };
  
const updateLencolAplique = async (req, res) => {
await LencolAplique.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
    res.status(200).send("Lençol atualizado com sucesso");
    })
    .catch((err) => {
    res.status(400).send("Erro ao atualizar Lençol");
    console.log(err);
    });
};

const deleteLencolAplique = async (req, res) => {
await LencolAplique.deleteOne({ _id: req.params.id })
    .then(() => {
    res.status(200).send("Lençol excluido com sucesso");
    })
    .catch((err) => {
    res.status(400).send("Erro ao excluir Lençol");
    console.log(err);
    });
};


module.exports = {
    getAllLencol,
    createLencol,
    getByIdLencolAplique,
    updateLencolAplique,
    deleteLencolAplique
  };
  