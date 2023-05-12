const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const jwt = require("jsonwebtoken")

// const auth = async function(req,res,next){
//     let Token = req.headers["x-auth-token"]
//     if(!Token)  {res.send("Token not present")}
//     else{
//       let checkvalid = jwt.verify(Token , "team-india-token")
//       if(!checkvalid) {res.send("Token is not valid")}
//       else{
//        next()
//         }
//       }
// }

const auth = async function(req,res,next){
  let Token = req.headers["x-auth-token"]
  // console.log(Token)
  if(!Token) {res.send("Token not present")}
  else{
    let checkvalid = jwt.verify(Token , "team-india-token" )
    if(!checkvalid) {res.send("Invalid Token")}
    // req.checkvalid = checkvalid
      if(checkvalid.id != req.params.userid){ res.send(" Id Does Not Match")}
      else{
        // req.checkvalid = checkvalid
        next()
      }
  }
}


router.post("/user" , userController.user)

router.post("/login" , userController.login)

router.get("/getuser/:userId"  ,auth ,  userController.getuser)

router.put("/update/:userid"  , userController.updatingeuser)

module.exports = router;