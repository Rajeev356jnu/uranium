const express = require('express');
const logger= require("./logger")

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('rajeev')
    console.log("the endpoint value is",logger.url)
    // console.log("calling log function")
    logger.logging()

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason