var express             = require("express");
var router              = express.Router();
var Person              = require("../models/person");
var middleware          = require("../middleware");

//var Links            = require("../links");





    
    //res.render("home");


// router.get("/:id", middleware.getHeader, function(req, res){
//     Person.findOne({_id:req.params.id}, function(err, foundPerson){
//         if(err){
//             console.log(err);
//         } else {
//             //console.log(foundPerson);
//             res.render("show", {person:foundPerson});
//         }
//     });
//     //res.render("show");
// });




  router.get("/", middleware.getHeader, function(req, res){
    
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


module.exports = router;
