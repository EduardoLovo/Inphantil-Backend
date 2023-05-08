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
    res.send("Adicione o numero do aplique");
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


module.exports = {
    getAllLencol,
    createLencol,
 
  };
  