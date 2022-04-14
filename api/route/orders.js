const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders were Fetched",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Order was created",
  });
});

router.get("/:orderId", (req, res, next) => {
  // const id = req.params.orderId;
  // if()
  res.status(200).json({
    message: "Order details",
    orderId: req.params.orderId,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order Deleted",
    orderId: req.params.orderId,
  });
});
module.exports = router;