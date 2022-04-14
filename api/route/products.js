const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Responding GET request for /products",
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json({
    message: "Responding POST request for /products",
    createProduct: product,
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discoverd the Special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed ID",
      id: id,
    });
  }
});

router.patch("/:productID", (req, res, next) => {
  res.status(200).json({
    message: "Updated Product!",
  });
});

router.delete("/:productID", (req, res, next) => {
  res.status(200).json({
    message: "Deleted Product!",
  });
});
module.exports = router;
