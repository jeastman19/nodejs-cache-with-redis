const axios = require("axios");

const { Cache } = require("../cache");

const GetCommentsRepo = () => async (postId) => {
    const key = `comments:${postId}`;

    const cachedValue = await Cache.get(key);

    if (cachedValue) {
        return JSON.parse(cachedValue);
    }

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const res = await axios.get(url);

    await Cache.set(key, JSON.stringify(res.data));

    return res.data;
};

module.exports = { GetCommentsRepo };
