let axios = require("axios")
// Q NO 1

let getByDistrictId = async function (req, res) {
    try {
        let district = req.query.district_id
        let date = req.query.date
      
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// Q NO 2a


let getWeatherReport = async function (req, res) {
    try {
        let city = req.query.city
        let appid = req.query.appid
      
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// Q NO 2b
let getTemperatureReport = async function (req, res) {
    try {
        let city = req.query.city
        let appid = req.query.appid
      
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// Q NO 2c
let getSortCities = async function (req, res) {
    try {
      let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
      let updatedcities=[];
      for(i=0;i<cities.length;i++){
          let obj={city:cities[i]}
      
      
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f1beaea39a89ed1045562fc1a1591c4c`
        }
        let result = await axios(options)
        let gettingTemp=result.data.main.temp;
      
    obj.temp=gettingTemp;
        updatedcities.push(obj);
    }
    let updatedSortedCities=updatedcities.sort(function(x,y){return x.temp-y.temp});

    res.status(200).send({ status: true ,data : updatedSortedCities })
}
       
        
    
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// q no 3a
let getMemeList = async function (req, res) {

    try {
        
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options);

        console.log(result);
        let data = result.data;
        console.log(data);
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// q no 3b

let createMeme = async function (req, res) {

    try {
        let id = req.query.id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





module.exports.getByDistrictId = getByDistrictId
module.exports.getWeatherReport = getWeatherReport
module.exports.getTemperatureReport = getTemperatureReport
module.exports.getSortCities = getSortCities
module.exports.getMemeList = getMemeList
module.exports.createMeme=createMeme
