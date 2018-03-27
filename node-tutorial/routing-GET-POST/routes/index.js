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

//new GET route
router.get("/test/:id", function(req, res, next) {
  res.render("test", {output: req.params.id})
});
//new POST route
router.post("/test/submit", function(req, res, next) {
  var id = req.body.id;
  res.redirect("/test/" + id)
});

module.exports = router;
