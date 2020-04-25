var express             = require("express");
var router              = express.Router();
var Person              = require("../models/person");
//var Links            = require("../links");




router.get("/", function(req, res){
    
    //Get all people
    Person.find({}, function(err, allPeople){
        if(err){
            console.log(err);
        } else {
           //Links.findLinks();

                //console.log(Links.daddy);
                res.render("home", {person:allPeople});

           }
            
           
        })
    });
    
    //res.render("home");


router.get("/:id", function(req, res){
    Person.findOne({_id:req.params.id}, function(err, foundPerson){
        if(err){
            console.log(err);
        } else {
            console.log(foundPerson);
            res.render("show", {person:foundPerson});
        }
    });
    //res.render("show");
});




module.exports = router;