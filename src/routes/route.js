const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
// Q NO 1
// Create an API for GET /movies that returns a list of movies.<br>
//  Define an array of movies in your code and return the value in response.
router.get('/movies', function (req, res) {
    let arr=["rang","dilwale","trimurti","tridev","sholay","aaandhi"]
    res.send(arr)
})
// Q NO 2 AND Q NO 3
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request<BR>
//  and it should return the movie in your array at index 1). You can define an array of movies again in your api<br>

// Handle a scenario in problem 2 where if the index is greater than the valid maximum value<br>
//  a message is returned that tells the user to use a valid index in an error message.

router.get('/movies/:indexNumber', function (req, res) {
     let arr=["rang","dilwale","trimurti","tridev","sholay","aaandhi"]
     const arr1=req.params.indexNumber
     if(arr1<arr.length){
         res.send(arr[arr1])
     }else{
         res.send("invalid index")
         }
    })

// Q NO 4
// Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.<br>
//  Each movie object should have values - id, name. An example of movies array is 
// [ {
//  “id”: 1,
//  “name”: “The Shining”
// }, {
//  “id”: 2,
//  “name”: “Incendies”
// }, {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }, {
//  “id”: 4,
//  “name”: “Finding Nemo”
// }]

// Return the entire array in this api’s response
router.get('/films', function (req, res) {
    res.send( movies= [ {
         "id": 1,
         "name": "The Shining"
        }, {
         "id": 2,
         "name": "Incendies"
        }, {
         "id": 3,
         "name": "Rang de Basanti"
        }, {
         "id": 4,
         "name": "Finding Nemo"
        }])
        
        })

// Q NO 5
// Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’

router.get('/films/:filmId', function (req, res) {
    let movies= [ {
         "id": 1,
         "name": "The Shining"
        }, {
         "id": 2,
         "name": "Incendies"
        }, {
         "id": 3,
         "name": "Rang de Basanti"
        }, {
         "id": 4,
         "name": "Finding Nemo"
        }]
        let id=req.params.filmId
        if(id<movies.length){
            newId=movies[id-1]
            res.send(newId)
        
        }else{
            res.send("no movie exists with this id")

        }
})

module.exports = router;
// adding this comment for no reason