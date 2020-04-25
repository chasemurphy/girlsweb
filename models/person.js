var mongoose = require("mongoose");

var PersonSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    nickname: String,
    image: String,
    birthmonth: Number,
    birthday: Number,
    birthyear: Number,
    city: String,
    state: String,
    weather: {
        hightemp: String,
        lowTemp: String,
        rainchance: String,
        description: String
    }

});

//Modeling the Schema
module.exports = mongoose.model("Person", PersonSchema);