const routes = require("express").Router();
const materialController = require("../controller/material");

routes.get("/", materialController.getAllMateriais);
routes.post("/create", materialController.createMateriais);
routes.get("/getById/:id", materialController.getByIdMateriais);
routes.patch("/updateOne/:id", materialController.updateMateriais);
routes.delete("/deleteOne/:id", materialController.deleteMateriais);

module.exports = routes;