const bookmodel= require("../models/bookmodel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})
}

const getbooksData= async function (req, res) {
    let allbooks= await bookmodel.find()
    res.send({msg: allbooks})}

module.exports.createbook= createbook
module.exports.getbooksData= getbooksData