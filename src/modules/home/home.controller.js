class HomeController{

    getAll=(req, res, next)=>{
        res.json({
            data:req.user,
            message:"Home data fetched finished",
            status:"OK",
            options:null
        })
    }
}



const homeCtrl= new HomeController
module.exports=homeCtrl