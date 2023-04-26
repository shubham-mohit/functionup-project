const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createbookinfo = async function(req , res){
    let info = req.body
    let saveinfo = await UserModel.create(info)
    res.send({msg:info})
}
const getbookinfo = async function(req , res){
    let allbook = await userModel.find()
    res.send({msg: allbook})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

module.exports.createbookinfo= createbookinfo
module.exports.getbookinfo= getbookinfo