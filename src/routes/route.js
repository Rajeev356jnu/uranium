const express = require('express');
const router = express.Router();

const developerController= require("../controllers/developerController")
const batchController= require("../controllers/batchController")


router.post("/createBatches", batchController.createBatches  )
router.post("/createDevelopers", developerController.createDevelopers )



router.get("/schlorshipDetails", developerController.schlorshipDetails)

router.get("/getDevelopersWithBatchDetails", developerController.getDevelopersWithBatchDetails)

router.get("/getDevelopersWithCertainParameters", developerController.getDevelopersWithCertainParameters)




module.exports = router;