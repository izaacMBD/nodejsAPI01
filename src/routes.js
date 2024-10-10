import express from "express";
import UserController from "./controllers/userController.js";
import GenderController from "./controllers/GenreController.js";
import DiretorController from "./controllers/DiretorController.js";
import AtorController from "./controllers/AtorController.js";

const routes = express();

routes.use("/user", UserController);

routes.use("/genre", GenderController);

routes.use("/diretor", DiretorController);

routes.use("/ator", AtorController);

export default routes;