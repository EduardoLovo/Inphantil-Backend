const Task = require("../models/Task")

const getAllTask = async (req, res) => {
    await Task.find({})
      .then((task) => {
        res.send(task);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
const createTask = async (req, res) => {
    if (!req.body.text) {
        res.send("coloque texto");
    } else {
        await Task.create(req.body)
        .then(() => {
            res.send("Tarefa adicionado com sucesso").status(200);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};

const getByIdTask = async (req, res) => {
    await Task.findById({ _id: req.params.id })
      .then((task) => {
        res.send(task).json;
      })
      .catch((err) => {
        res.status(404).send("Erro ao encontrar tarefa");
      });
  };

const updateTask = async (req, res) => {
    await Task.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
        res.status(200).send("Tarefa atualizado com sucesso");
        })
        .catch((err) => {
        res.status(400).send("Erro ao atualizar tarefa");
        console.log(err);
        });
};

const deleteTask = async (req, res) => {
    await Task.deleteOne({ _id: req.params.id })
        .then(() => {
        res.status(200).send("Tarefa excluido com sucesso");
        })
        .catch((err) => {
        res.status(400).send("Erro ao excluir tarefa");
        console.log(err);
        });
};

module.exports = {
    getAllTask,
    createTask,
    getByIdTask,
    updateTask,
    deleteTask,
  };