

// the logic behind here is that of the clouser fucntion that function using within the function and that will be used to hold the data from the outer function and that will be used to hold the data from the outer function
const loginCheck=()=>{
return((req, res, next)=>{
    try {
        let data = req.body;

        // TODO: check the user is logged in or not
        next()
    } catch (exception) {
        next(exception)
        
    }
})
}
module.exports =loginCheck
