const express = require("express");
const { signup, signin } = require("../controller/auth");
const {
  validateSignupRequest,
  isRequestvalidated,
  validateSigninRequest,
} = require("../validators/auth");
const router = express.Router();

router.post("/signin", validateSigninRequest, isRequestvalidated, signin);

router.post("/signup", validateSignupRequest, isRequestvalidated, signup);

module.exports = router;
