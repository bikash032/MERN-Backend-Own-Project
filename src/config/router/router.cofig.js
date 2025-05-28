// const homerouter = require("../modules/home/home.router")

const router = require("express").Router()
const authRouter=require("../../modules/auth/auth.router")

router.use("/auth",authRouter)
// router.use("/auth",uploader().single("image"), authCtrl.register)
// router.use("/home",homerouter)


module.exports = router