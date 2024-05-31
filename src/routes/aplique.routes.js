const routes = require("express").Router();
const ApliqueController = require("../controller/aplique");

routes.get("/", ApliqueController.getAllApliques);
routes.post("/create", ApliqueController.createAplique);
routes.get("/getById/:id", ApliqueController.getByIdAplique);
routes.patch("/updateOne/:id", ApliqueController.updateAplique);
routes.delete("/deleteOne/:id", ApliqueController.deleteAplique);

module.exports = routes;
