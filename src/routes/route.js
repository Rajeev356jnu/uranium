const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookController")
const newPublisherController= require("../controllers/newPublisherController")



router.post("/createnewAuthor", newAuthorController.createnewAuthor  )

router.post("/createnewPublisher", newPublisherController.createnewPublisher  )
router.post("/createnewBook", newBookController.createnewBook  )

router.get("/getAuthorsData", newAuthorController.getAuthorsData)
router.get("/getPublishersData", newPublisherController.getPublishersData)
router.get("/getBooksData", newBookController.getBooksData)

router.get("/getBooksWithAuthorDetails", newBookController.getBooksWithAuthorDetails)
router.post("/newData",newBookController.newData)
router.get("/newData",newBookController.newData)
router.post("/increaseSale",newBookController.increaseSale)
router.get("/increaseSale",newBookController.increaseSale)




module.exports = router;