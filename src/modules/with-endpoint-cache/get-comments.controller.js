const { Cache } = require("../cache");
const { formatResponse, getCurrentTimeInMilliseconds } = require("../helpers");

const GetCommentsController = (service) => async (req, res) => {
    const postId = req.params.postId;
    const key = `comments:${postId}`;

    const ini = getCurrentTimeInMilliseconds();
    const results = await service(postId);
    const end = getCurrentTimeInMilliseconds();

    Cache.set(key, JSON.stringify(results));

    res.status(200).json(formatResponse({ ini, end, results }));
};

module.exports = { GetCommentsController };
