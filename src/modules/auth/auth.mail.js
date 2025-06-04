
const EmailServices = require('../../services/email.services');
class AuthMail extends EmailServices{
svc 
constructor(mailSvc){
    this.svc=new EmailServices();


}
}
const authMailSvc = new AuthMail();
module.exports = authMailSvc;