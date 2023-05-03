const express = require('express');
const router = express.Router();
const newbookcontroler = require("../controllers/usercontroller")
// const bookmodel2 = require("../models/bookmodel2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createbookInfo", newbookcontroler.createbookInfo  )

router.get("/getbookInfo", newbookcontroler.getbookInfo)



module.exports = router;