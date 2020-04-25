var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    flash               = require("connect-flash"),
    methodOverride      = require("method-override"),
    Person              = require("./models/person"),
    seedDB              = require("./seeds");
   // Links               = require("./links");
    
var indexRoutes         = require("./routes/index");




    
// mongoose.connect("mongodb://localhost:27017/girlsweb",{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect("mongodb+srv://chasemurphy:Park3rfay3!!@cluster0-7ond7.mongodb.net/girlsweb?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(flash());


//Routes
app.use(indexRoutes);

//seedDB();

// var daddy = Person.findOne({nickname:"Daddy"}, function(err, foundPerson){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(daddy.nickname);
//         return foundPerson;
        
//     }
// });



// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("GirlsWeb Server has Started on Port ");
// });


app.listen(3000, function() {
    console.log("GirlsWeb Server has Started on Port 3000");
});