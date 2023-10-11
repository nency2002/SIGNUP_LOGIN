const users = require("../models/user.schema")

const signdata = async (req , res )=>{
    const {username ,password , email} = req.body

    let user = await users.findOne({email : email})
    if(user){
        res.send("already account")
    }
    else{
    let data = await users.create(req.body);
    res.send(data);
    console.log(data);
    }
}


const logindata = async (req, res) => {
    const {email , password} = req.body
    let user = await users.findOne({email : email})
    if(!user){
        res.send("user not found")
    }
    else if(user.password !== password){
        res.send("password mismatch")
    }
    else{
        res.send("login ")
    }
}


module.exports = {signdata ,logindata}