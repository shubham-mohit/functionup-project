const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const {welcome} = require('../logger/logger');
const {printDate, printmonth , batchInfo} =require("../util/help");
const {convertupper, convrtlower, removespace} = require("../validator/formatter")

const splitting = require('lodash')
const month = ["january","february","march","april","may","june","july","augest","september","octomber","november","december"];

const odd = [1,3,5,7,9,11,13,15,17,19]

const duplicate = [6,6,7,8,7]


const pairss = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]



router.get('/test-me', function (req, res) {
    res.send('This should be working!')
    welcome();
    printDate();
    printmonth();
    batchInfo()
    convertupper();
    convrtlower();
    removespace()

});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
    console.log(splitting.chunk(month,3))
    console.log(splitting.tail(odd))
    console.log(splitting.union(duplicate))
    console.log(splitting.fromPairs(pairss))
});


module.exports = router;