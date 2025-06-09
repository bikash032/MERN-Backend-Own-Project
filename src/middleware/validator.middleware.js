const bodyValidator =(rules)=>{
    return async(req, res, next )=>{
        try {
            const payload = req.body
            if(!payload){
                throw {
                    code: 422,
                    message:"Data not Provided",
                    status:"VALIDATAION_FAILED_ERROR",
                    options:null

                }
            }
        } catch (exception) {
            next(exception)
        }
    }
}

module.exports=bodyValidator