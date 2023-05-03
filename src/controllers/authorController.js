const authorModel = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel") 
const  ObjectId = require("mongoose").Types.ObjectId


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createpublisher= async function (req, res) {
    let publisher = req.body
    let publishercreated = await publisherModel.create(publisher) 
    res.send({data: publishercreated})
}

// const createbook = async function(req ,res){
//     let book = req.body
//     if(!book.author_id || !book.publisher_id){
//         if(!book.author_id){
//             res.send("You have enter Invalid author_id")
//         }else if(!book.publisher_id){
//             res.send("You have enter Invalid publisher_id")
//         }   
//     }
//     else{
//         let checkauthor = await AuthorModel.findById({_id: book.author_id})
//         let checkpublisher = await publisherModel.findById({_id: book.publisher_id})
//         if(!checkauthor || !checkpublisher){
//             if(!checkauthor){
//                 res.send("Author_id is not found")
//             }else{
//                 res.send("Publisher_id is not found")
//             }
//         }
//         let result = await bookModel.create(book)
//         res.send({msg:result})   
//     }  
// }
// const getbook = async function(req , res){
//     let books = await bookModel.find().populate(newauthor,new)
// }
const createbook= async function (req, res) {
    let book = req.body
    if( !book.author_id ){ res.send({ msg : "authorId is missing in data"})}
    else if( !book.publisher_id ){ res.send({ msg : "publisherId is missing in data"})}
    else if( !ObjectId.isValid(book.author_id )){ res.send({msg : "Author id is not valid"}) }
    else if( !ObjectId.isValid(book.publisher_id )){ res.send({msg : "Publisher id is not valid"}) }
    else{
        let authorMatch = await AuthorModel.findById(book.author_id)
        let publisherMatch = await publisherModel.findById(book.publisher_id)
        if( !authorMatch ){ res.send({ msg : "authorId is not available in database"})}
        else if( !publisherMatch ){ res.send({ msg : "publisherId is not available in database"})}
        else{
            let bookCreated = await bookModel.create(book)
            res.send({ msg: bookCreated})
        }
    }
}
const getbook = async function (req,res){
    let ans = await bookModel.find().populate("author_id").populate("publisher_id")
    res.send({msg:ans})
} 
// 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60


    let updates = async function(req,res){
        let checkauthor = await publisherModel.findOne({name:{$in:["Nirali Publisher","Manali Publisher"]}}).select({_id:1})
    let books = await bookModel.updateMany({publisher_id:checkauthor},{$set:{isHardcover:true}},{new:true})
     res.send({msg:books})
    }

  


module.exports.createAuthor= createAuthor
module.exports.createpublisher= createpublisher
module.exports.createbook= createbook
module.exports.getbook= getbook
module.exports.updates = updates

