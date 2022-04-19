const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const requestIp=require('request-ip')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    let date1=new Date()
let time =date1.toLocaleDateString()
let date =date1.toLocaleTimeString()
let myIp=req.socket.remoteAddress
let myApi=req.originalUrl;

console.log(date, time,  myIp,myApi)

next()
  })


mongoose.connect("mongodb+srv://functionup-uranium1:QzN5Crh5t5EcxZ6T@cluster0.149kg.mongodb.net/Rajeev356mdintro?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
