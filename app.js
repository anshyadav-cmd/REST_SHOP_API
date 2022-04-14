const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoute = require("./api/route/products");
const orderRoute = require("./api/route/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes which should handle request
app.use("/products", productRoute);
app.use("/orders", orderRoute);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
