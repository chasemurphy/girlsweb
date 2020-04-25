var Person              = require("../models/person");

module.exports = {
    getHeader: function(req, res, next){
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
    }
};