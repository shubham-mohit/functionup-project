const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const user = async function(req,res){
  let data = req.body
  let gotuser = await userModel.create(data)
  res.send({msg:gotuser})
}
const login = async function(req,res){
  let username = req.body.emailId
  let password = req.body.password
  let user = await userModel.findOne({emailId:username , password:password})
  if(!user){ res.send("username or password is not correct")}
  else{
    let token = jwt.sign({
      userId : user._id,
      secreat : user.mobile
    },
    "team-india-token"
    )
    // res.Header("x-auth-token" , token)
    res.send({satus: true, token:token})
    console.log(req.headers)
  }
}
const getuser = async function (req,res){
  // let Token = req.headers["x-auth-token"]
  // // console.log(Token)
  // if(!Token) {res.send("Token not present")}
  // else{
  //   let checkvalid = jwt.verify(Token , "team-india-token" )
  //   if(!checkvalid) {res.send("Invalid Token")}
  //     if(checkvalid.id != req.params.userId){ res.send(" Id Does Not Match")}
      let userid = req.params.userId
      let finduser = await userModel.findById(userid)
      if(!finduser) {res.send ("User not found")}
      else{
        res.send({status: true , Data:finduser})
      }
    }
  

const updatingeuser = async function(req,res){
  let Token = req.headers["x-auth-token"]
  if(!Token)  { return res.send("Token not present")}
  else{
    let checkvalid = jwt.verify(Token , "team-india-token")
    if(!checkvalid) { return res.send("Token is not valid")}
    if(checkvalid.id != req.params.userid){return res.send("Id Doesn't Match")}
       let id = req.params.userid
      let updateuser = await userModel.findById(id)
      // console.log(updateuser)
      if(!updateuser) { return res.send("user not found")}
      else{
        let ans = await userModel.findOneAndUpdate({firstName: updateuser.firstName},{age:31},{new:true})
        res.send({data: ans })
      }
  }
}


module.exports.user = user
module.exports.login = login
module.exports.getuser = getuser
module.exports.updatingeuser = updatingeuser