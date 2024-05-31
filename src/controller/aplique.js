const Aplique = require("../models/Aplique");

const getAllApliques = async (req, res) => {
  await Aplique.find({})
    .then((aplique) => {
      res.send(aplique);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createAplique = async (req, res) => {
  if (!req.body.number) {
    res.send("Adicione o numero do aplique");
  } else {
    await Aplique.create(req.body)
      .then(() => {
        res.send("Aplique adicionado com sucesso").status(200);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getByIdAplique = async (req, res) => {
  await Aplique.findById({ _id: req.params.id })
    .then((aplique) => {
      res.send(aplique).json;
    })
    .catch((err) => {
      res.status(404).send("Erro ao encontrar Aplique");
    });
};

const updateAplique = async (req, res) => {
  await Aplique.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Aplique atualizado com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Erro ao atualizar Aplique");
      console.log(err);
    });
};

const deleteAplique = async (req, res) => {
  await Aplique.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Aplique excluido com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Erro ao excluir Aplique");
      console.log(err);
    });
};

module.exports = {
  getAllApliques,
  createAplique,
  getByIdAplique,
  updateAplique,
  deleteAplique,
};
