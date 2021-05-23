const express = require("express");
const { signup, signin } = require("../../controller/admin/auth");
const {
  validateSignupRequest,
  isRequestvalidated,
  validateSigninRequest,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signin", validateSigninRequest, isRequestvalidated, signin);

router.post("/admin/signup", validateSignupRequest, isRequestvalidated, signup);

module.exports = router;
