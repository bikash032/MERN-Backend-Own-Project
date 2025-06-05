const mongoose = require("mongoose")
const { UserRole, Gender, UserStatus } = require("../../config/constant")
const UserScheme = new mongoose.Schema({
    // property defination
    name: {
        type: String,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        min: 5,
        max: 15,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.CUSTOMER
    },
    gender: {
        type: String,
        enum: Object.values(Gender)
    },
    address: String,
    status: {
        type: String,
        enum: Object.values(UserStatus),
        default: UserStatus.INACTIVE

    }
}, {
    // collection options
    timestamps: true,
    autoCreate: true,
    autoIndex: true
})


const UserModel = mongoose.model("User", UserScheme)


module.exports = UserModel