const developerModel = require("../models/developerModel")
const batchModel= require("../models/batchModel")

const createDevelopers= async function (req, res) {
    let developers = req.body
   let developersCreated = await developerModel.create(developers)
    res.send({data: developersCreated})
}


const getDevelopersWithBatchDetails = async function (req, res) {
    let specificDeveloper = await developerModel.find().populate('batch')
    res.send({data: specificDeveloper})

}


const schlorshipDetails= async function (req, res) {
    let details = await developerModel.find({percentage:{$gte:75},gender:"female"}).select ({name:1, _id:0})
    res.send({data: details})
}


const getDevelopersWithCertainParameters = async function (req, res) {
    let parameters = req.query
    let specificDeveloper = await developerModel.find({percentage:{$gte:parameters.percentage}}).select({name:1, _id:0})
    
    res.send({data: specificDeveloper})

}

module.exports.createDevelopers= createDevelopers

module.exports.schlorshipDetails= schlorshipDetails

module.exports.getDevelopersWithBatchDetails = getDevelopersWithBatchDetails

module.exports.getDevelopersWithCertainParameters = getDevelopersWithCertainParameters
