const { count } = require("console")
const productModel = require("../models/product")
const userModel = require("../models/user")
const orderModel = require("../models/order")
const ObjectId = require("mongoose").Types.ObjectId

const product = async function(req,res){
    let data = req.body
    let newproduct = await productModel.create(data)
    res.send({msg:newproduct})
}

const user = async function(req,res){
    let userdata = req.body
    userdata.isFreeUser = req.headers.isfreeuser
    let newuser = await userModel.create(userdata)
    res.send({msg:newuserdata})
}

// const order = async function(req, res){
//     let data = req.body
//     if(!ObjectId.isValid(data.userId)){ res.send ("Enter Valid UserId")}
//     else if(!ObjectId.isValid(data.productId)){ res.send ("Enter Valid ProductId")}
//     else {
//         let productmatch = await productModel.findById(data.productId)
//         let userMatch = await userModel.findById(data.userId)
//         if(!productmatch){ res.send("ProductId doesn't Match")}
//         else if(!userMatch){ res.send("UserId doesn't Match")}
//         else{
//             let productprice = await productModel.findById(data.productId).select({price:1})
//             let userbalance = await userModel.findById(data.userId).select({balance:1})
//             let priceof = productprice.price
//             let balanceof = userbalance.balance
//             if((balanceof < priceof) && (req.headers.isfreeuser == "false")){ res.send ("Insufficient Balance")}
//             else if((balanceof > priceof) && (req.headers.isfreeuser == "false")){
//                 let ans = await userModel.updateOne({_id:data.userId},{$set:{balance:(balanceof-priceof)}},{new:true})
//                 data.amount = priceof
//                 data.isFreeUser = req.headers.isfreeuser
//             let result = await orderModel.create(data)
//             res.send({msg: result,ans})
//             }
//             else{
//                 data.amount = 0
//                 // console.log(req.headers)
//                 data.isFreeUser = req.headers.isfreeuser
//                 let saveData = await orderModel.create(data)
//                 res.send({ msg : saveData})
//             }
//         }
//     }
// }

const createOrder = async function(req,res){
    let data = req.body
    if(!ObjectId.isValid(data.userId)){ res.send( {msg :"UserId is not Valid"})}
    else if(!ObjectId.isValid(data.productId)){ res.send( {msg :"ProductId is not Valid"})}
    else{
        let userMatch = await userModel.findById(data.userId)
        let productMatch = await productModel.findById(data.productId)
        if(!userMatch){ res.send({msg : "User Not found"})}
        else if(!productMatch){ res.send({msg : "Product Not found"})}
        else{
            let productPrice = await productModel.findById(data.productId).select({ price:1})
            let userbalance = await userModel.findById(data.userId).select( {balnce:1} )
            let p = productPrice.price
            let b = userbalance.balnce
            // console.log(p)
            // console.log(b)
            if( (b < p) && (req.headers.isfreeuser=='false')){ res.send({msg : "Insufficient Balance"})}
            else if( ( b >= p) && (req.headers.isfreeuser=='false')){
                let result = await userModel.updateOne({_id:data.userId },
                    {$set : {balnce: (b-p) }},
                    {new:true}
                )
                data.amount = p
                data.isFreeAppUser = req.headers.isfreeuser
                // console.log(data)
                // console.log('else if')

                let saveData = await orderModel.create(data)
                res.send({msg : result,saveData})
            }
            else{
                data.amount = 0
                data.isFreeAppUser = req.headers.isfreeuser
                // console.log(data)
                // console.log("else")

                let saveData = await orderModel.create(data)
                res.send({ msg : saveData})
            }
           
        }
    }
}




module.exports.product = product
module.exports.user = user
// module.exports.order = order
module.exports.createOrder = createOrder