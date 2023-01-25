const { Router } = require("express");

const { getCommentsController } = require("./index");
const { cacheMiddleware } = require("./cache.middleware");

const routes = Router();

routes.get(
    "/with-endpoint-cache/:postId",
    cacheMiddleware,
    getCommentsController
);

module.exports = routes;
