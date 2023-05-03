const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createpublisher", authorController.createpublisher)

router.post("/createbook", authorController.createbook)

router.get("/getbook", authorController.getbook)

router.put("/updates",authorController.updates)


module.exports = router;