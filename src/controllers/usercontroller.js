

 const { count } = require("console")
 const userModel = require("../models/usermodel")


 const createbookInfo = async function(req,res){
    let info = req.body
    let saveinfo = await userModel.create(info)
    res.send({msg:savainfo})
 }

 const getbookInfo = async function(req,res){
    let allbook = await userModel.find();
    res.send({msg:allbook})
 }



 module.exports.createbookInfo = createbookInfo
 module,exports.getbookInfo = getbookInfo


