const { Router } = require("express");

const { getCommentsController } = require("./index");

const routes = Router();

routes.get("/with-repo-cache/:postId", getCommentsController);

module.exports = routes;
