const homeCtrl = require("./home.controller")

const homerouter=require("express").Router()


homerouter.get("/list",homeCtrl.getAll)

module.exports=homerouter