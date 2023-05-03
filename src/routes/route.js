const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
// const myUnderscore = require('underscore')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
router.post('/voters',function(req,res){
    let arr = []
    let adult = req.query.age
    for(let i=0; i<persons.length; i++){
        if(persons[i].age >= adult){
            persons[i].votingStatus = true
            arr.push(persons[i])
        }
    }
    res.send(arr)
}) 

module.exports = router;
