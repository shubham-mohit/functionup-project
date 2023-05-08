const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("productjs",ProductSchema)