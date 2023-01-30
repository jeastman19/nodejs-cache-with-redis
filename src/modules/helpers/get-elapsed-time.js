const {
    getCurrentTimeInMilliseconds,
} = require("./get-current-time-in-milliseconds");

const getElapsedTime = (ini) => {
    const end = getCurrentTimeInMilliseconds();
    return end - ini;
};

module.exports = { getElapsedTime };
