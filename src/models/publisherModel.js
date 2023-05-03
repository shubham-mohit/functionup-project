
const mongoose = require("mongoose")

let publisherSchema = new mongoose.Schema({
    name : String,
    headquater : String
},{timestamps : true})


module.exports = mongoose.model("publishers", publisherSchema)