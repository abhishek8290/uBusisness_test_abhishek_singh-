const mongo =require('mongoose');
const book_schema =mongo.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true

    }
});
const book = mongo.model('books', book_schema);
module.exports = book;