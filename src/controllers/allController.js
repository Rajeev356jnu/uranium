const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

const createAuthor = async function (req,res) {
    const Author = req.body;
    const SavedData = await authorModel.create(Author)
    res.send( {msg : allAuthor})
    
}

const createBook = async function (req,res) {
    const Book = req.body;
    const Saved = await bookModel.create(Book)
    res.send( {msg : allBooks})
    
}

const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    console.log(authorDetails)
    const id = authorDetails[0].author_id
    console.log(id)
    const booksName = await bookModel.find({author_id: id}).select({name:1})
    res.send( {msg:booksName})
}

const upadatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})

    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})
    

    res.send({msg:authorN, updatedPrice})

}

const authorsName=async function(req,res){
    const authorId=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0});
    let getAuthorNames=[]
    for(i=0;i<authorId.length; i++){
        const getId=authorId[i].author_id;
        getAuthorNames=await authorModel.findOne({author_id:getId}).select({author_name:1,_id:0});
        
       
    }
    res.send({msg:authorsName})
    console.log(getAuthorNames)

  
}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.allBooks = allBooks
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName
