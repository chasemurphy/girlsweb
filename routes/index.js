var express             = require("express");
var router              = express.Router();


router.get("/", function(req, res){
    res.render("home");
});

router.get("/daddy", function(req, res){
    res.render("daddy");
});




module.exports = router;