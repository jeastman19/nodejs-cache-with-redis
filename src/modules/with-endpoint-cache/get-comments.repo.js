const axios = require("axios");

const getCommentsRepo = async (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const res = await axios.get(url);

    return res.data;
};

module.exports = { getCommentsRepo };
