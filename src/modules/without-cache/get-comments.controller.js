const GetCommentsController = (service) => async (req, res) => {
    const results = await service(1000);
    res.send(`Service say ${results}`);
};

module.exports = { GetCommentsController };
