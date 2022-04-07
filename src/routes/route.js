

const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    // console.log(req)
    console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

// Q1 GET /all-candidates
// Write a get api that returns a list of candidate names

router.get('/all-candidates', function (req, res) {
    let arr=["ram","shyam","suresh","gopi","rajeev","raju"];
    let arr1=[],j=0
    for(i=0;i<arr.length;i++){
        arr1[j]=arr[i]
        j++
        }       
        //  res.send("my name is rajeev")
         res.send(arr1)
});

// QUES 2
// GET /candidates?count=3
// Write a get api that returns a list of candidates with size equal to the count value recieved in the query param.

// COnsider that the count value is greater than 0 and less or equal to 10.

// The request you will send should have a url like this - http://localhost:3000/candidates?count=3

    router.get('/candidates', function (req, res) {
    let arr=['ram','shyam',"suresh","gopi","rajeev","raju"];
    let arr1=[],j=0
    if((req.query.count>0) && (req.query.count<10)){
        for(i=0;i<req.query.count;i++){
            arr1[j]=arr[i]
            j++
        }}else{
            res.send("invalid input")
        }
       res.send(arr1)
    }) 


module.exports = router;
// adding this comment for no reason