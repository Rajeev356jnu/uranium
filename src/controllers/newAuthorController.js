const newAuthorModel= require("../models/newAuthorModel")

const createnewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await newAuthorModel.find()
    res.send({data: authors})
}

module.exports.createnewAuthor= createnewAuthor
module.exports.getAuthorsData= getAuthorsData