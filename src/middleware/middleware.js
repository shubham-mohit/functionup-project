
const validator = require('validator')
const customerModel = require('../model/customer')

const midd1 = async function(req, res, next) {
    let data = req.body;
        // let  {firstName , lastName, emailId, mobileNumber } = req.body
        if(!data.firstName){
            return res.status(400).send("Please Enter FirstName it is required")
        }
        if(! data.lastName){
            return res.status(400).send("Please Enter LastName it is required")
        }
        if(! data.emailId){
            return res.status(400).send("Please Enter Email it is required")
        }
        if(! data.mobileNumber){
            return res.status(400).send("Please Enter Mobile it is required")
        }
        if(! validator.isEmail(data.emailId)) {return res.status(400).send("Please Enter valid Email address")}
        else if(data.mobileNumber.length != 10) {return res.status(400).send("Please Enter valid Mobile number")}
        else{
            let emailCheck = await customerModel.findOne({ emailId : data.emailId})
            if(emailCheck) {return res.status(400).send("Email already in use")}
            phonecheck = await customerModel.findOne({ mobileNumber:data.mobileNumber})
            if(phonecheck) {return res.status(400).send("Mobile number already in use")}
            else{
                req.body = data
                next()
            }
        }
}


module.exports.midd1 = midd1