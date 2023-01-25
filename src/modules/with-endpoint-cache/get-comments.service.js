const GetCommentsService = (repo) => async (postId) => {
    const ini = new Date().getMilliseconds();
    const results = await repo(postId);
    const end = new Date().getMilliseconds();

    console.log(`Service time: ${end - ini}ms`);

    return results;
};

module.exports = { GetCommentsService };
