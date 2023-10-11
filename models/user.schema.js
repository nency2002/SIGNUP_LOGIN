const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

let users = mongoose.model("users", usersSchema)

module.exports = users