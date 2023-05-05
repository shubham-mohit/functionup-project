const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)-

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

    // const assignmentMW= function (req, res, next) {
    //         var currentdate = new Date(); 
    //         var datetime =  currentdate.getDate() + " "
    //                         + (currentdate.getMonth()+1)  + " " 
    //                         + currentdate.getFullYear() + "  "  
    //                         + currentdate.getHours() + ":"  
    //                         + currentdate.getMinutes() + ":" 
    //                         + currentdate.getSeconds();
    //      
    //         let ip= req.ip
    //         let url= req.originalUrl
    //         console.log(`${datetime}  ${ip}  ${url}`)
    //         next()    
    //     }
    //      
    //     app.use( assignmentMW 



















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode