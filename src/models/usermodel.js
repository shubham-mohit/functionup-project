

const mongoose = require("mongoose");

const bookeSchema = new mongoose.Schema({
    name: String,
    author: String,
    category: String,
    year: Number
},{timestamps: true})


module.exports = mongoose.model("book,bookSchema")