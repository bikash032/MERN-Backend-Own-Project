const htttp=require("http")
const httpServer=htttp.createServer((request, Response)=>{
    console.log("Server response is successfull");
    
})

const HOST="localhost"
const PORT=9006
httpServer.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
    console.log(("Server is successfully listining to port: "+PORT));
    console.log("Please Press CTRL+C to exit........");
    
    
    
})