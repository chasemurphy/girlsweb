var daddy;
Person              = require("./models/person");

function findLinks(){

    Person.findOne({nickname:"Daddy"}, function(err, foundPerson){
    if(err){
        console.log(err);
    } else {
        
        daddy = foundPerson._id;
        assignID();
        
    }
});

};

function assignID(){
    console.log(daddy);
}


module.exports = {
    daddy,
    findLinks
};