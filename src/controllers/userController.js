const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const user = async function(req,res){
  try{
    let data = req.body
    let gotuser = await userModel.create(data)
    res.status(201).send({User:gotuser})
    }
  catch (error) {
    res.status(400).send(error.message)
  }
}
const login = async function(req,res){
  try{
    let username = req.body.emailId
    let password = req.body.password
    let user = await userModel.findOne({emailId:username , password:password})
    if(!user){ res.status(404).send("username or password is not correct")}
    else{
      let token = jwt.sign({
        userId : user._id,
        secreat : user.mobile
      },
      "team-india-token"
      )
      // res.Header("x-auth-token" , token)
      res.status(201).send(({satus: true, token:token}))
      console.log(req.headers)
    }
  }
  catch(error) {
    res.status(400).send(error.message)
  } 
}
const getuser = async function (req,res){
  try{
    let Token = req.headers["x-auth-token"]
    // console.log(Token)
    if(!Token) {res.status(401).send("Token not present")}
    else{
      let checkvalid = jwt.verify(Token , "team-india-token" )
      if(!checkvalid) {res.status(401).send("Invalid Token")}
        if(checkvalid.id != req.params.userId){ res.status(403).send(" Id Does Not Match")}
        let userid = req.params.userId
        let finduser = await userModel.findById(userid)
        if(!finduser) {res.status(404).send ("User not found")}
        else{
          res.status(201).send({status: true , Data:finduser})
        }
      }
    }
    catch (error){
      res.status(404).send(error.message)
    } 
  }
  

const updatingeuser = async function(req,res){
  try{
    let Token = req.headers["x-auth-token"]
    if(!Token)  { return res.status(401).send("Token not present")}
    else{
      let checkvalid = jwt.verify(Token , "team-india-token")
      if(!checkvalid) { return res.status(401).send("Token is not valid")}
      if(checkvalid.id != req.params.userid){return res.status(403).send("Id Doesn't Match")}
        let id = req.params.userid
        let updateuser = await userModel.findById(id)
        // console.log(updateuser)
        if(!updateuser) { return res.status(404).send("user not found")}
        else{
          let ans = await userModel.findOneAndUpdate({firstName: updateuser.firstName},{age:31},{new:true})
          res.status(201).send({data: ans })
        }
    }
  }
  catch(error){
    res.status(400).send(error.message)
  } 
}


module.exports.user = user
module.exports.login = login
module.exports.getuser = getuser
module.exports.updatingeuser = updatingeuser