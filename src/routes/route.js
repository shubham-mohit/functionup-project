const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController")


router.post("/createauthor" , bookController.createauthor)

router.post("/createbook" , bookController.createbook)

router.get("/findbooks" , bookController.findbooks)

router.get("/findauthor" , bookController.findauthor)

router.get("/thebook" , bookController.thebook)



module.exports = router;