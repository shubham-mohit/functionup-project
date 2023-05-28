const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    mobileNumber: {
        require : true,
        type: String,
        unique : true,
    },
    DOB : {
        type : String
    },
    emailId : String,
    address : String,
    status: {
        type : String,
        enum: ["Active","Inactive"]
    },
    isdeleted : {
        type: Boolean ,
        default: false 
    }
},{timestamp: true})

module.exports = mongoose.model("Customer", customerSchema)