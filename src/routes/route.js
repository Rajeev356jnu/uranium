const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const validation=require("../middleware/auth.js")



router.post("/users",clientController.createUser)
router.post("/login",clientController.loginUser)

router.get("/users/:userId", validation.tokenCheck,validation.authorise,clientController.getUserData)
router.put("/users/:userId", validation.tokenCheck,validation.authorise,clientController.updateUser)
router.delete("/users/:userId", validation.tokenCheck,validation.authorise,clientController.isdeletedUser)
router.post("/users/:userId/posts", validation.tokenCheck,validation.authorise,clientController.postMessage)








module.exports = router;