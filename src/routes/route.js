const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController");
const clientController = require('../controllers/clientController');
// const validation=require("../middleware/auth.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

router.post("/users",clientController.createUser)
router.post("/login",clientController.loginUser)
router.get("/users/:userId",clientController.getUserData)
router.put("/users/:userId",clientController.updateUser)
router.delete("/users/:userId",clientController.isdeletedUser)
// router.get("/users/:userId",validation.tokenCheck,clientController.getUserData)
// router.put("/users/:userId",validation.tokenCheck,clientController.updateUser)
// router.delete("/users/:userId",validation.tokenCheck,clientController.isdeletedUser)







module.exports = router;