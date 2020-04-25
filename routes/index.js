var express             = require("express");
var router              = express.Router();
var Person              = require("../models/person");
//var Links            = require("../links");





    
    //res.render("home");


router.get("/:id", getHeader, function(req, res){
    Person.findOne({_id:req.params.id}, function(err, foundPerson){
        if(err){
            console.log(err);
        } else {
            //console.log(foundPerson);
            res.render("show", {person:foundPerson});
        }
    });
    //res.render("show");
});




  router.get("/", getHeader, function(req, res){
    
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


    function getHeader(req, res, next) {
        //console.log("Reached Middleware");
        Person.findOne({nickname:"Daddy"}, function(err, foundDaddy){
                if(err){
                    console.log(err);
                    next();
                } else {           
                    res.locals.daddy = foundDaddy._id;
                    //Mommy inside Daddy
                    Person.findOne({nickname:"Mommy"}, function(err, foundMommy){
                        res.locals.mommy = foundMommy._id;
                        Person.findOne({firstname:"Parker"}, function(err, foundParker){
                            res.locals.parker = foundParker._id;
                            Person.findOne({firstname:"Kenna"}, function(err, foundKenna){
                                res.locals.kenna = foundKenna._id;
                                next();
                            });
                        });
                        
                    });
                    //console.log(foundDaddy._id); 
                    //next()     
                }
            });

            
            
        
      };





module.exports = router;
