const express = require('express');
const router = express.Router();

const commonControllers = require("../controllers/commonControllers")
const middleware = require("../middlewares/commonMiddlewares")

router.post("/users", middleware.headerCheck, commonControllers.createUser)
router.post("/products", commonControllers.createProduct)
router.post('/orders',middleware.headerCheck,  commonControllers.createOrder)




module.exports = router;