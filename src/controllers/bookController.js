const { count } = require("console")
const authormodel= require("../models/authors")
const bookmodel = require("../models/book")


const createauthor= async function (req, res) {
    let data= req.body.authorId;
    let ans = req.body
    if(data){
       let alldata= await authormodel.create(ans)
       res.send({msg: alldata})
    }else{
        res.send("sorry authorId is not present")
    }
} 
const createbook = async function(req , res){
    let checkout = req.body.authorId
    let store = req.body
    if(checkout){
        let savedata = await bookmodel.create(store)
        res.send({msg: savedata})
    }
    else{
        res.send("sorry authorId is not found")
    }
}
const findbooks = async function(req ,res){
    let search = req.body.authorName
    let finddata = await authormodel.find({authorName:search}).select({authorId:1,_id:0})
    let getbook = await bookmodel.find({authorId:"1"})
    if(finddata){
        res.send({msg: getbook})
    }
    else{
        res.send("no match found")
    }
}
const findauthor = async function(req, res){
    let resr = req.body.bookname;
    let ans = await bookmodel.findOneAndUpdate({bookname:resr},{price:100},{new:true})
    let ans2 = await authormodel.find({authorId:1})
    if(ans){
        res.send({msg:ans2})
    }
    else{
        res.send('not found')
    }
}
const thebook = async function(req,res){
    let alldata = await bookmodel.find({price:{$gte:50 , $lte:100}}).select({authorId:1})
    // res.send({msg:alldata})
    let diff = alldata.map((x)=> x.authorId)
    let result = await authormodel.find({authorId:diff}).select({authorName:1})
    res.send({msg:result})
}

module.exports.createbook = createbook
module.exports.createauthor= createauthor
module.exports.findbooks = findbooks
module.exports.findauthor = findauthor
module.exports.thebook = thebook