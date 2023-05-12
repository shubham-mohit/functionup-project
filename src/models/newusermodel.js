const mongoose = require("mongoose")

const newuserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : {
        type : String,
        enum: ["Male","Female","LGBT"]
    },
	isDeleted: {
        type: Boolean,
        default: false
    },
    age : Number
})

module.exports = mongoose.model("jwt",newuserSchema)