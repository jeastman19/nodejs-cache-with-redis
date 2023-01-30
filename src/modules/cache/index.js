const redis = require("redis");

const onRedisError = (err) => {
    console.error(err);
};
const onRedisConnect = () => {
    console.log("Redis connected");
};
const onRedisReconnecting = () => {
    console.log("Redis reconnecting");
};
const onRedisReady = () => {
    console.log("Redis ready!");
};

const Cache = {
    client: null,

    init: () => {
        Cache.client = redis.createClient();

        Cache.client.on("error", onRedisError);
        Cache.client.on("connect", onRedisConnect);
        Cache.client.on("reconnecting", onRedisReconnecting);
        Cache.client.on("ready", onRedisReady);

        Cache.client.connect();
    },

    get: async (key) => {
        return await Cache.client.get(key);
    },

    set: async (key, value) => {
        return await Cache.client.set(key, value, {
            EX: 10,
            NX: true,
        });
    },

    del: async (key) => {
        return await Cache.client.del(key);
    },

    quit: async () => {
        return await Cache.client.quit();
    },
};

Cache.init();

module.exports = { Cache };
