const routes = require("express").Router();
const lencolApliqueController = require("../controller/lencolAplique");

routes.get("/", lencolApliqueController.getAllLencol);
routes.post("/create", lencolApliqueController.createLencol);
// routes.get("/getById/:id", lencolApliqueController.getByIdAplique);
// routes.patch("/updateOne/:id", lencolApliqueController.updateAplique);
// routes.delete("/deleteOne/:id", lencolApliqueController.deleteAplique);

module.exports = routes;
