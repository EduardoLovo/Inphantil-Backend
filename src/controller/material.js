const Material = require("../models/Material");

const getAllMateriais = async (req, res) => {
  await Material.find({})
    .then((material) => {
      res.send(material);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createMateriais = async (req, res) => {
  if (!req.body.codigo) {
    res.send("Adicione o codigo do material");
  } else {
    await Material.create(req.body)
      .then(() => {
        res.send("Material adicionado com sucesso").status(200);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getByIdMateriais = async (req, res) => {
  await Material.findById({ _id: req.params.id })
    .then((aplique) => {
      res.send(aplique).json;
    })
    .catch((err) => {
      res.status(404).send("Erro ao encontrar Material");
    });
};

const updateMateriais = async (req, res) => {
  await Material.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Material atualizado com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Erro ao atualizar Material");
      console.log(err);
    });
};

const deleteMateriais = async (req, res) => {
  await Material.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Material excluido com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Erro ao excluir Material");
      console.log(err);
    });
};

module.exports = {
    getAllMateriais,
    createMateriais,
    getByIdMateriais,
    updateMateriais,
    deleteMateriais,
};
