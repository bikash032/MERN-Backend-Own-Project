require("dotenv").config()
const CLoudinaryConfig = {
    cloudname: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,     
    apiSecret: process.env.CLOUDINARY_API_SECRET,
}

const SMTPConfig = {
    provider: process.env.SMTP_PROVIDER,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FORM_ADDRESS 
}
module.exports = {CLoudinaryConfig, SMTPConfig}