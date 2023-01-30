const { formatResponse, getCurrentTimeInMilliseconds } = require("../helpers");

const GetCommentsController = (service) => async (req, res) => {
    const postId = req.params.postId;

    const ini = getCurrentTimeInMilliseconds();
    const results = await service(postId);
    const end = getCurrentTimeInMilliseconds();

    res.status(200).json(formatResponse({ ini, end, results }));
};

module.exports = { GetCommentsController };
