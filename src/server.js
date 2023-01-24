const express = require("express");

const withoutCacheRoutes = require("./modules/without-cache/router");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(withoutCacheRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});