
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    authorId: String,
    authorName : String,
    age : Number,
    address : String
},{timestamp : true})


module.exports = mongoose.model("author", authorSchema)


