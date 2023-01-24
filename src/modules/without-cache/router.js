const { Router } = require("express");

const { getCommentsController } = require("./index");

const routes = Router();

routes.get("/without-cache/:postId", getCommentsController);

module.exports = routes;
