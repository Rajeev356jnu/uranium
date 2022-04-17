const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")

const createnewBook= async function (req, res) {
    let newBook = req.body
    let a_id=req.body.author
    let p_id=req.body.publisher
    const isAuthor= await newAuthorModel.find({_id:a_id}).select({_id:1})
    const isPublisher= await newPublisherModel.find({_id:p_id}).select({_id:1})
    
    
     if(isAuthor.length>0)
    {
        if(isPublisher.length>0)
        {
            const bookData=await newBookModel.create(newBook)
            res.send({data:bookData})
        }
        else{
            res.send({error:"Invalid publisher Id"})
        }
    }else{
        res.send({error:"Invalid Author Id"})
    }
}

 
const getBooksData= async function (req, res) {
    let books = await newBookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})

}

const newData = async function (req, res) {
    {
     const update = await newBookModel.updateMany({$or: [{"publisher":"625bdd47c6304464a360abd4" },{"publisher": "625bdcf5c6304464a360abce"}]},{"isHardCover" : true});
         res.send({msg:update})
       }

}

const increaseSale= async function (req, res) {
    let increasePrice = await newBookModel.updateMany({ratings:{$gt:3.5}},{$inc : {price: +10}});

    res.send({msg: increasePrice })
}

module.exports.createnewBook= createnewBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.newData= newData
module.exports.increaseSale= increaseSale