

// const { count } = require("console")
const bookmodel2 = require("../models/bookmodel2")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel2.create(data)
    res.send({msg: savedData})
}

const getmakedata= async function (req, res) {
     let allUsers= await bookmodel2.find().select({bookName:1, authorName:1 , _id:0})
    res.send({msg: allUsers})
}

const accyear = async function(req,resp){
    let ans = req.params.year
    console.log(ans)
    let result = await bookmodel2.find({year : ans})
    resp.send({msg: result})
}

const booksize = async function(req,resp){
    let size = await bookmodel2.find({totalPages:{$gt:500}})
    resp.send({msg:size})
}

const indianrs = async function(req,resp){
    let rupees = await bookmodel2.find({$or :[{europePrice:"dh244"},{europePrice:"dh20"}]})
    resp.send({msg:rupees})
}

const getbyname = async function(req,resp){
    let insideurl = req.body
    let ans = Object.keys(insideurl)
    let ans2 = Object.values(insideurl)
    let saveddata = await bookmodel2.find({[ans]: ans2})
    resp.send({msg:saveddata})
}
module.exports.createbook = createbook
module.exports.getmakedata= getmakedata
module.exports.accyear = accyear
module.exports.booksize= booksize
module.exports.indianrs = indianrs
module.exports.getbyname = getbyname