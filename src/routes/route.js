const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const validator=require("../validator/formatter")
const_ = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
    logger.welcome()
    util.date_month()
    util.getBatchInfo()
    console.log("word is trimmrd by trim function",validator.word)
    console.log("word is in lowercase",validator.word1)
    console.log("word is in upper case",validator.word3 )
   
    
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
    console.log("months are divided into groups", _.arr)
    console.log("get all but the first element of array", _.arr1)
    console.log("an array of unique values", _.arr7)
    console.log("object composed of key-value pairs", _.obj)
});


// router.get('/test-me5', function (req, res) {
//     res.send('My final ever api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My first ever api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My first ever api!')
// });

module.exports = router;
// adding this comment for no reason