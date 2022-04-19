const express = require('express');
const router = express.Router();



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/hello", function (req, res) {
    res.send("My second ever api!")
})
router.get("/goodmorning", function (req, res) {
    res.send("My third ever api!")
})
router.get("/goodevening", function (req, res) {
    res.send("My fourth ever api!")
})




 
module.exports = router;