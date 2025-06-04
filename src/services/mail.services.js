const nodemailer = require('nodemailer');
const {SMTPConfig}=require("../config/config")
class EmailService {
    #transport
    constructor(){
        try {
            this.#transport = nodemailer.createTransport({
                host: SMTPConfig.host,
                port: SMTPConfig.port,
                secure: SMTPConfig.port === 465, // true for 465, false for other ports
                auth: {
                    user: SMTPConfig.user,
                    pass: SMTPConfig.password
                }
            });
            console.error("Email service initialized successfully");
        } catch (exception) {
            console.error("Error initializing email service:", exception);
            throw{code:500,
                message:"Error initializing email service",
                status:"SMTP_ERROR"
            }
            
        }
    }
}
SVGFEmail=async({to, sub, message, attachment=null, cc=null, bcc=null})=>{
    try {
        let emailBody={
            to:"",
            from:"",
            subject:"",
            html:"",
            cc:"",
            bcc:"",
            attachment:""

        }
        if(cc){
            emailBody["cc"]=cc
        }
        if(bcc){
            emailBody["bcc"]=bcc
        }   
        if(attachment){
            emailBody["attachments"]=attachment
        }
        return await this.#transport.sendMail(emailBody)
    } catch (exception) {
        
    }
}
