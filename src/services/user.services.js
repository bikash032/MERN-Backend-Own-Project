const UserModel = require("../modules/user/user.model")

class UserServices {





    async userRegister(data){
        try {
            const user = new UserModel(data)
            return await user.save()
        } catch (execution) {
            throw execution
        }
    }

    getUserPublicprofile(user){
        return {
            _id:user._id,
            name:user.name,
            email:user.email,
            address:user.address,
            role:user.role,
            dob:user.dob,
            phone:user.phone,
            status:user.status,
            
        }
    }
}