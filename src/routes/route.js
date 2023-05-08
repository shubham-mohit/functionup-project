const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const { mid2 } = require('../middlewares/commonMiddlewares');
// const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/product" , BookController.product)

router.post("/user", mid2,BookController.user)

router.post("/order" , mid2 ,BookController.createOrder)


module.exports = router;