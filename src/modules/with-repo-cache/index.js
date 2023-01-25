const { GetCommentsController } = require("./get-comments.controller");
const { GetCommentsService } = require("./get-comments.service");
const { GetCommentsRepo } = require("./get-comments.repo");

const getCommentsRepo = GetCommentsRepo();
const getCommentsService = GetCommentsService(getCommentsRepo);
const getCommentsController = GetCommentsController(getCommentsService);

module.exports = {
    getCommentsController,
};
