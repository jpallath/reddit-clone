import express from "express";

import basicController from "./controllers/basicController";
import userController from "./controllers/userController";
import postController from "./controllers/postController";

const routes = express();

//basic routes
routes.get("/", basicController.get);

//user routes
routes.post("/signup", userController.post);

//post routes
routes.post("/post", postController.post);

export default routes;
