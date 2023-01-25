const GetCommentsController = (service) => async (req, res) => {
    const postId = req.params.postId;

    const ini = new Date().getMilliseconds();
    const results = await service(postId);
    const end = new Date().getMilliseconds();

    console.log(`Controller time: ${end - ini}ms`);
    res.status(200).json(results);
};

module.exports = { GetCommentsController };
