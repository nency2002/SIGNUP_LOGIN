const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/signup");
        console.log("Connected");
    } catch (error) {
        console.log(error.message);
    }
 
};

module.exports =connect;