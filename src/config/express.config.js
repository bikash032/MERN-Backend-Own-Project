const express =require("express")
const router = require("./router/router.cofig")
require("./mongo.config")

const app=express()

// BOdy parsers
// this will parse the json data from the request body
app.use(express.json()) // this will parse the json data from the request body
// this will parse the url encoded data from the request body
app.use(express.urlencoded({extended:true})) // this will parse the url encoded data from the request body



app.use((req, res ,next)=>{
    console.log("/ I am here");
    req.user={
        name:"Bikash"
    }
    next()
    
    
})

// static middleware 
app.use(express.static('"public')); // Serve static files from the 'public' directory

app.use("/api/v1",router)



app.use((error, req, res, next)=>{

    // THIS WILL ONLY HOLD THE RUN TIME ERROR error handeling middlrware 
let statuscode=error.code || 500;
let details=error.details || null;
let msg=error.message || "Internal server error.....";
let status =error.status || "SERVER_ERROR"
    res.status(statuscode).json({
        error:details,
        message:msg,
        status:status,
        options:null
    })
})

module.exports=app
