
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    balnce: {type:Number , default:100},

    
    address: String,
    age : Number,
    gender:
     {type: String , enum: ['Male','Female','LGBT']},
    isFreeUser: {type: Boolean , default: false}
})

module.exports = mongoose.model("userjs",userSchema)