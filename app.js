const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoute = require("./api/route/products");
const orderRoute = require("./api/route/orders");

app.use(morgan("dev"));

// Routes which should handle request
app.use("/products", productRoute);
app.use("/order", orderRoute);

module.exports = app;
