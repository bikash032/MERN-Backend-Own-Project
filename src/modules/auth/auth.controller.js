class AuthController{
    register=(req, res, next)=>{
        let data =req.body
        let file = req.file;
        if(file.filename){
            data.image=file.filename
        }        

        res.json({
            data:data,
            message:"User is register successfully",
            status:"OK",
            options:null
        })
    }
    login=(req, res, next)=>{
        res.json({
            data:{},
            message:"User is logged in successfully",
            status:"OK",
            options:null
        })
    }
    getLoginUser=(req, res, next)=>{
        res.json({
            data:{},
            message:"User is login successfully",
            status:"OK",
            options:null
        })
    }
}
const authCtrl=new AuthController
module.exports=authCtrl