const { Cache } = require("../cache");

const { getCurrentTimeInMilliseconds, formatResponse } = require("../helpers");

const cacheMiddleware = async (req, res, next) => {
    const { postId } = req.params;
    const key = `comments:${postId}`;

    const ini = getCurrentTimeInMilliseconds();
    const cachedValue = await Cache.get(key);
    const end = getCurrentTimeInMilliseconds();

    if (cachedValue) {
        return res
            .status(200)
            .json(formatResponse({ ini, end, results: cachedValue }));
    }
    next();
};

module.exports = { cacheMiddleware };
