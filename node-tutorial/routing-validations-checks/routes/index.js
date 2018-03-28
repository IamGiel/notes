var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator/check");
const { matchedData, sanitize } = require("express-validator/filter");

// GET home page
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Form Validation",
    success: req.session.success,
    errors: req.session.errors
  });
  req.session.errors = null;
});

router.post("/submit", function(req, res, next) {
  req
    .check("email", "-Invalid email address")
    .isEmail()
    .withMessage("must be an email");
  req
    .check("password", "-Password is invalid")
    .isLength({ min: 7 })
    .withMessage("-password must be at-least 7 characters please...")
    .equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect("/");
});


module.exports = router;
