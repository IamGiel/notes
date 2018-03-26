var express = require("express");
var router = express.Router();

// GET home page
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Cool Huh!",
    condition: true,
    attrArray: ["Name" , "role", "strengths", 33],
    slogan: "This is Gels handlbars - get it?"
  });
});

module.exports = router;
