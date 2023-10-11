const {Router} = require("express");
const { signdata, logindata } = require("../controllers/user.controllers");
const rounter = Router()


rounter.post("/sign" , signdata)
rounter.post("/login",logindata)

module.exports = rounter