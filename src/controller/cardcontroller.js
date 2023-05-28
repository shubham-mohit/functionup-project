
const cardModel = require("../model/cardmodel")
const validator = require('validator')
const { find } = require("../model/customer")

const createcard = async function(req,res){
    try{
        let data = req.body
        if (! data.customerName) {return res.send("Please enter your name")}
        if (! data.vision) {return res.send("Please enter your vision")}
        if (! data.customerId) {return res.send("Please enter customerId")}
        else{
            let ans = await cardModel.find({cardNumber: data.cardNumber}).count()
            ans = ans+1
    		if(ans == 0) req.body["cardNumber"] ="C00" + ans
    		else if(ans >=1 ) req.body["cardNumber"] = "C00" + ans
            // console.log(req.body)
            let answer = await cardModel.create(data)
            res.send({status : true, message : answer}) 
        }
    }
    catch(error){
        res.send(error.message)
    }   
} 

const getcard = async function(req,res){
    try{
        const card = await cardModel.find().populate("customerId")
        if(!card) {return res.send("No data found")}
        else{
        res.send({status: true,card: card})
        }
    }
    catch(err){
        res.send(err.message)
    }
}


module.exports.createcard = createcard
module.exports.getcard = getcard