const { Cache } = require("../cache");

const cacheMiddleware = async (req, res, next) => {
    const { postId } = req.params;
    const key = `comments:${postId}`;

    //
    // Sobre escribimos el metodo send para que guarde en cache
    // el valor que se envia al cliente
    //
    if (!res.sendResponse) {
        res.sendResponse = res.send;

        res.send = (body) => {
            Cache.set(key, JSON.stringify(body));
            res.sendResponse(body);
        };
    }

    //
    // Verificamos si el valor esta en cache
    // si es asi, lo enviamos al cliente
    // y no continuamos con la ejecucion del endpoint
    //
    // En ambos casos, medimos el tiempo que toma la ejecucion
    // del middleware <ini - end>
    //
    const ini = new Date().getMilliseconds();

    const cachedValue = await Cache.get(key);

    const end = new Date().getMilliseconds();

    if (cachedValue) {
        //
        // Mostramos el tiempo que tomo la ejecucion del middleware
        //
        console.log(`Middleware time: ${end - ini}ms`);

        //
        // Enviamos el valor que esta en cache
        // utilizando el metodo sobreescribido <sendResponse>
        //
        return res.sendResponse(JSON.parse(cachedValue));
    }

    //
    // Si no esta en cache, continuamos con la ejecucion del endpoint
    //
    next();
};

module.exports = { cacheMiddleware };
