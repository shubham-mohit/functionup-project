const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const cardSchema = new mongoose.Schema({
    cardNumber : String,
    cardType : {
        type : String,
        enum: ["Regular", "Special"]
    },
    customerName : String,
    status: {
        type : String,
        enum: ["Active", "Inactive", ]
    },
    vision : String,
    customerId : {
        type : ObjectId,
        ref : "Customer"   
    }
},{timestamp:true})

module.exports = mongoose.model("Card",cardSchema);