const { Router } = require("express");

const { getCommentsController } = require("./index");

const routes = Router();

routes.get("/without-cache", getCommentsController);

module.exports = routes;
