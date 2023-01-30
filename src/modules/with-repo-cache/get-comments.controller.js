const { getCurrentTimeInMilliseconds } = require("../helpers");
const { formatResponse } = require("../helpers/format-response");

const GetCommentsController = (service) => async (req, res) => {
    const postId = req.params.postId;

    const ini = getCurrentTimeInMilliseconds();
    const results = await service(postId);
    const end = getCurrentTimeInMilliseconds();

    res.status(200).send(formatResponse({ ini, end, results }));
};

module.exports = { GetCommentsController };
