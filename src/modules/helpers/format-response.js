const formatResponse = ({ ini, end, results }) => {
    return {
        time: {
            ini,
            end,
            total: `${end - ini}ms`,
        },
        results,
    };
};

module.exports = { formatResponse };
