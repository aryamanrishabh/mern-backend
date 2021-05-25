const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const { addItemToCart, getCart } = require("../controller/cart");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);

router.get("/user/cart/getcart", requireSignin, userMiddleware, getCart);

module.exports = router;
