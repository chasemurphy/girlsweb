var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    flash               = require("connect-flash"),
    methodOverride      = require("method-override");
    
var indexRoutes         = require("./routes/index");
    
    
mongoose.connect("mongodb://localhost:27017/girlsweb",{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(flash());


//Routes
app.use(indexRoutes);



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("GirlsWeb Server has Started");
});