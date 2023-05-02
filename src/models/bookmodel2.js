const mongoose = require("mongoose");

const bookeSchema = new mongoose.Schema({
    bookName: {
        required: true ,
        type: String   
    },
    price: {
        indianPrice: String,
        europePrice: String,
    },
    tag: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,
    year:{type: Number ,default: 2021}
},{timestamp: true})

module.exports = mongoose.model('booker', bookeSchema)