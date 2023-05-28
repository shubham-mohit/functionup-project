const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./route/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://sourabhamohite2812:wXzbwlWssiEAjJL1@cluster0.m7awpol.mongodb.net/jaikisan",{useNewUrlParser:true})

.then(()=> console.log("Mongodb is connected"))
.catch(err=> console.log("err.message"))

app.use("/" , route)

app.listen(process.env.PORT || 3000 , function(){
    console.log("Express app Running on port " , process.env.PORT || 3000)
})