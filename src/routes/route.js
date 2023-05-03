
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


// missing array value using get W6D1
router.get('/sol1',function(req, res){
    let arr = [1,2,3,4,5,6,7,8,9,11]
    let sum = arr.reduce((x,y) => x+y)
    let n = arr.length + 1
    let missingvalue = ((n*(n+1))/2) - sum
    console.log('missingvalue :'+missingvalue)
});

router.get('/sol2',function(req, res){
    let arr = [36,37,38,39,41,40,42,44]
    let sum = arr.reduce((x,y) => x+y)
    let n = arr.length +1
    let missingvalue = ((n*(arr[0]+arr[arr.length-1]))/2) - sum
    console.log('missingvalue :'+missingvalue)
});
module.exports = router;
module.exports = router;
