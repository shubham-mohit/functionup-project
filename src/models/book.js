
const mongoose = require("mongoose");

const bookeSchema = new mongoose.Schema({
    bookname: String,
    authorId : String,
    price: Number,
    rating: Number
}, {timestamp: true})

module.exports = mongoose.model("book",bookeSchema)