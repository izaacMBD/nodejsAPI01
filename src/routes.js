import express from "express";
import UserController from "./controllers/userController.js";
import GenderController from "./controllers/GenderController.js";
import DiretorController from "./controllers/DiretorController.js";

const routes = express();

routes.use("/user", UserController);

routes.use("/gender", GenderController);

routes.use("/diretor", DiretorController);

export default routes;