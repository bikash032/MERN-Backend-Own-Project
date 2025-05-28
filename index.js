const htttp=require("http")
const app = require("./src/config/express.config")
const httpServer=htttp.createServer(app)

const HOST="localhost"
const PORT=9006
httpServer.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
    console.log(("Server is successfully listining to port: "+PORT));
    console.log("Please Press CTRL+C to exit........");
    
    
    
})


//IIFE   Immediately Invoked Function Expression
// (() => {
//     console.log("This is an Immediately Invoked Function Expression (IIFE).");
// })();

// This is a singleton function
// The function will be invoked immediately as it is defined
// (() => {
//     console.log("This is a singleton function, invoked immediately.");
// })();
// the fucntion scope is only one time and will not be accessiable to other time

