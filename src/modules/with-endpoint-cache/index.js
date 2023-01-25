const { GetCommentsController } = require("./get-comments.controller");
const { GetCommentsService } = require("./get-comments.service");
const { getCommentsRepo } = require("./get-comments.repo");

const getCommentsService = GetCommentsService(getCommentsRepo);
const getCommentsController = GetCommentsController(getCommentsService);

module.exports = {
    getCommentsController,
};
