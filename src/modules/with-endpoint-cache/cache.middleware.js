const { Cache } = require("../cache");

const cacheMiddleware = async (req, res, next) => {
    const { postId } = req.params;
    const key = `comments:${postId}`;

    if (!res.sendResponse) {
        res.sendResponse = res.send;
        res.send = (body) => {
            Cache.set(key, JSON.stringify(body));
            res.sendResponse(body);
        };
    }

    const ini = new Date().getMilliseconds();

    const cachedValue = await Cache.get(key);

    const end = new Date().getMilliseconds();

    if (cachedValue) {
        console.log(`Middleware time: ${end - ini}ms`);
        return res.sendResponse(JSON.parse(cachedValue));
    }

    next();
};

module.exports = { cacheMiddleware };
