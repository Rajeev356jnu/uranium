const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const validator=require("../validator/formatter")
const lodash = require('lodash');

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
//  Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function.,br>
//  Print these sub-arrays
let arr= ["january","feb","march","april","may","june","july","august","sep","oct","nov","dec"]
     console.log(lodash.chunk(arr,3))

    //  - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
      let arr1=[1,3,5,7,9,11,13,15,17,19]
     console.log(lodash.tail(arr1))

    //  Create 5 arrays of numbers containing a few duplicate values.<br>
    //  Using the function union create a merged array with only unique values and print them
      let arr2=[2,3,5,6,7];
     let arr3=[2,3,9,0,8];
     let arr4=[2,3,8,7,6];
     let arr5=[2,3,5,1,0];
     let arr6=[2,1,3,4,5,6]
     console.log(lodash.union(arr2,arr3,arr4,arr5,arr6))

    // Use the function fromPairs to create an object containing key value pairs.<br>
    //  For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
     let obj=[[ "horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     console.log(lodash.fromPairs(obj))

    



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
