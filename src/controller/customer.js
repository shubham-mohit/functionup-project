// const { default: isEmail } = require('validator/lib/isEmail');

const customerModel = require('../model/customer');
const validator = require('validator')


const customer = async function(req,res){
    try{
        let data = req.body
        let create = await customerModel.create(data)
        res.status(200).send({status : true , customerlist : create})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const fetch = async function(req,res){
    let data = req.body
    let customerlist = await customerModel.find({data})
    res.send({msg : customerlist , status : true})
}


const deletecustomer = async function(req,res){
    let data = req.body
    let customer = await customerModel.find({status : "Inactive"}).select({status :1})
    let deleted = await customerModel.updateMany({customer},{$set: {isdeleted: true}},{new:true})
    console.log(deleted)
        res.send({status: true , message: `${deleted.modifiedCount} deleted successfully`})
}



module.exports.customer = customer 
module.exports.fetch = fetch
module.exports.deletecustomer = deletecustomer