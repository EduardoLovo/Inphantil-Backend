const routes = require("express").Router();
const lencolTecidoController = require("../controller/lencolTecido");

routes.get("/", lencolTecidoController.getAllTecido);
routes.post("/create", lencolTecidoController.createTecido);
routes.get("/getById/:id", lencolTecidoController.getByIdLencolTecido);
routes.patch("/updateOne/:id", lencolTecidoController.updateLencolTecido);
routes.delete("/deleteOne/:id", lencolTecidoController.deleteLencolTecido);

module.exports = routes;