const mongoose=require("mongoose"); 
const { mogoDBConfig } = require("./config");
(async()=>{
    try {
      await  mongoose.connect(mogoDBConfig.url,{
            dbName:mogoDBConfig.dbName,
            autoCreate:true,
            autoIndex:true
        })
        console.log("*****MongoDb connection successfully.........");
        
    } catch (exception) {
        console.error("**MOngodb connection error.....")
        console.log(exception);
        
    }
})()