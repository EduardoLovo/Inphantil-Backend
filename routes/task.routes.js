const routes = require("express").Router();
const TaskController = require("../controller/task");

routes.get("/", TaskController.getAllTask);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id", TaskController.getByIdTask);
routes.patch("/updateOne/:id", TaskController.updateTask);
routes.delete("/deleteOne/:id", TaskController.deleteTask);

module.exports = routes;
