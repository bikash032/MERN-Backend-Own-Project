require("dotenv").config()
const cloudinary = require("cloudinary").v2
const fs = require("node:fs")
const { cloudinaryConfig } = require("../config/cloudinary.config")
class CloudinaryServices {
    constructor() {
        cloudinary.config({
            cloud_name:cloudinaryConfig.cloudName ,
            api_key: cloudinaryConfig.apiKey,
            api_secret:cloudinaryConfig.apiSecret
        })
    }
    async uploadfile(filePath, folder = "/") {
        try {
            const response = await cloudinary.uploader.upload(filePath, {
                unique_filename: true,
                resource_type: "auto",
                folder: "mern-46" + folder
            })
            fs.unlinkSync(filePath)


            const optimized_Url = cloudinary.url(response.public_id, {
                width: 400,
                format: "jpg",
                fetch_format: "auto",
                effect: "quality:70",
            })

            return ({
                optimized_Url: optimized_Url,
                secure_Url: response.secure_url
            })
        } catch (exception) {
            throw {
                code: "500",
                message: "Cloudinary File Upload Error...",
                status: "SERVER_ERROR",
                options: null
            }
        }
    }

}

const cloudnarySvc = new CloudinaryServices()
module.exports = cloudnarySvc