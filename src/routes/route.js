const express = require('express');
const router = express.Router();
const newbookcontroler = require("../controllers/newbookcontrol")
// const bookmodel2 = require("../models/bookmodel2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createbook", newbookcontroler.createbook  )

router.get("/getmakedata", newbookcontroler.getmakedata)

router.get("/accyear/:year", newbookcontroler.accyear)

router.get("/booksize",newbookcontroler.booksize)

router.get("/indianrs",newbookcontroler.indianrs)

router.post("/getbyname",newbookcontroler.getbyname)


module.exports = router;