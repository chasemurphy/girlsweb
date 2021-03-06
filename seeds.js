var mongoose = require("mongoose");
var Person = require("./models/person");


var data = [
    {
        firstname: "Chase",
        lastname: "Murphy",
        nickname: "Daddy",
        city: "Spring",
        state: "Texas",
        image: "https://murphyfamily.s3.us-east-2.amazonaws.com/images/DaddyMommy.jpg" 

    },
    {
        firstname: "Ashley",
        lastname: "Murphy",
        nickname: "Mommy",
        city: "Purgatory",
        state: "Texas",
        image: "https://murphyfamily.s3.us-east-2.amazonaws.com/images/DaddyMommy.jpg" 

    },
    {
        firstname: "Parker",
        lastname: "Murphy",
        nickname: "PK",
        city: "Spring",
        state: "Texas",
        image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/91914896_10218507270406278_4503583400984051712_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=kJ25BYWejX0AX_FlsAN&_nc_ht=scontent-dfw5-2.xx&oh=49bc099c6b57f91e929d3439caa832c6&oe=5EC1CE10" 

    },
    {
        firstname: "Kenna",
        lastname: "Murphy",
        city: "Spring",
        nickname: "Kenny B",
        birthmonth: "9",
        birthday: "30",
        birthyear: "2015",
        state: "Texas",
        image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/91067787_10218507270726286_6471672952294211584_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=sc6BsG8VqPgAX_GNQ18&_nc_ht=scontent-dfw5-2.xx&oh=7301036c0d6b5801650b825d4016a68c&oe=5EBFD5C4" 

    },
    {
        firstname: "Leigh",
        lastname: "Murphy",
        city: "Montgomery",
        nickname: "Grandma",
        state: "Texas",
        image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/91067787_10218507270726286_6471672952294211584_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=sc6BsG8VqPgAX_GNQ18&_nc_ht=scontent-dfw5-2.xx&oh=7301036c0d6b5801650b825d4016a68c&oe=5EBFD5C4" 

    }
];

function seedDB(){
    //Remove all campgrounds
    Person.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed all people");
        });

         data.forEach(function(seed){
            Person.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a person");
                
                }
            });
        });   
    };




module.exports = seedDB;