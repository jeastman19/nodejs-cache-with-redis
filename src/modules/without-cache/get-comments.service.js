const GetCommentsService = (repo) => async (postId) => {
    return repo(postId);
};

module.exports = { GetCommentsService };
