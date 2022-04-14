const express = require("express");
const app = express();

const productRoute = require("./api/route/products");

app.use("/products", productRoute);

module.exports = app;
