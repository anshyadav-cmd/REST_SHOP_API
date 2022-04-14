const express = require("express");
const app = express();

const productRoute = require("./api/route/products");
const orderRoute = require("./api/route/orders");

app.use("/products", productRoute);
app.use("/order", orderRoute);

module.exports = app;
