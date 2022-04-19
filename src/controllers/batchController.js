const batchModel= require("../models/batchModel")

const createBatches= async function (req, res) {
    let batches = req.body
    let batchCreated = await batchModel.create(batches)
    res.send({data: batchCreated})
}


module.exports.createBatches= createBatches
