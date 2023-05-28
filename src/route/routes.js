const express = require('express')
const router = express.Router()
const customercontrol = require("../controller/customer")
const cardcontrol = require("../controller/cardcontroller")
const commonmid = require('../middleware/middleware')


router.post("/createcustomer" ,commonmid.midd1, customercontrol.customer)
router.get("/fetch" , customercontrol.fetch)
router.delete("/delete" , customercontrol.deletecustomer)
router.post("/createcard" , cardcontrol.createcard)
router.get("/getcard" , cardcontrol.getcard)

module.exports = router
