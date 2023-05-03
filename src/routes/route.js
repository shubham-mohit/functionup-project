const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
// const myUnderscore = require('underscore')

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       }
   ]

   router.post('/players', function(req,res){
    let flag = 0
	let result = req.body.name
    for(let i=0; i<players.length; i++){
        if(players[i].name == result){
            flag = 1
        }
    }
    if(flag == 0){
        players.push(req.body)
        res.send({data : players, status : true})
    }
    else{
        res.send({Response : "name is already exist"})
    }
   })


module.exports = router;