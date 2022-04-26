const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")



// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/district_id", weatherController.getByDistrictId)
router.get("/getWeatherReport", weatherController.getWeatherReport)
router.get("/getTemperatureReport",weatherController.getTemperatureReport)
router.get("/getSortCities",weatherController.getSortCities)
router.get("/getMemeList",weatherController.getMemeList)
router.post("/createMeme",weatherController.createMeme)







module.exports = router;