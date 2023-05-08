const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:{
        ref: "userjs",
        type: ObjectId
    },
    productId:{
        ref: "productjs",
        type: ObjectId
    },
    amount: Number,
    isFreeUser : Boolean
},{timestamps:true})


module.exports = mongoose.model("orderjs",orderSchema)