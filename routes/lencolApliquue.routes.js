const routes = require("express").Router();
const lencolApliqueController = require("../controller/lencolAplique");

routes.get("/", lencolApliqueController.getAllLencol);
routes.post("/create", lencolApliqueController.createLencol);
routes.get("/getById/:id", lencolApliqueController.getByIdLencolAplique);
routes.patch("/updateOne/:id", lencolApliqueController.updateLencolAplique);
routes.delete("/deleteOne/:id", lencolApliqueController.deleteLencolAplique);

module.exports = routes;
