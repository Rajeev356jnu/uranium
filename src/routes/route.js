const express = require('express');
const router = express.Router();
const bookmodel= require("../models/bookmodel.js")
const bookcontroller= require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook", bookcontroller.createbook  )

router.get("/getbooksData", bookcontroller.getbooksData)

module.exports = router;