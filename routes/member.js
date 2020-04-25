var express             = require("express");
var router              = express.Router();
var Person              = require("../models/person");
var middleware          = require("../middleware");


router.get("/:id", middleware.getHeader, function(req, res){
    Person.findOne({_id:req.params.id}, function(err, foundPerson){
        if(err){
            console.log(err);
        } else {
            //console.log(foundPerson);
            res.render("member/show", {person:foundPerson});
        }
    });
    //res.render("show");
});

module.exports = router;