const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoute = require("./api/route/products");
const orderRoute = require("./api/route/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// adding header for giving access to all the users from different port to access the API
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*"); // * means any you can specify to a single user like "https://liky.com"
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization" // or can give * for all
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET "
    );
    return res.status(200).json({});
  }
  next();
});

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
