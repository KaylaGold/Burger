//Import dependencies
let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Get all burgers in burger database and render on page.


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {


  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true 

  }, condition, function(data) {
  
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
