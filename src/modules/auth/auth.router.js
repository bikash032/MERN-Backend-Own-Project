const authRouter=require("express").Router()
const authCtrl = require("./auth.controller")

// const loginCheck = require("../../middleware/auth.middleware")
const uploader = require("../../middleware/uploader.middleware")
authRouter.post("/register",uploader().single("image"),authCtrl.register)
module.exports=authRouter