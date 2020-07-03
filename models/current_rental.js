const mongo =require('mongoose');
const card_holder_schema =mongo.Schema({
    id:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true,
    },
    cardNumber:{
        type:String,
        required:true
    }
});
const book_schema =mongo.Schema({
    id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true

    }
});
const rental_schema =mongo.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    isbn:{//used for searching 
        type:String,
        required:true
    },
    cardNumber:{//used for searching
        type:String,
        required:true
    },
    cardHolder:[card_holder_schema],
    book:[book_schema]
});
const curent_rental = mongo.model('rental_schema', rental_schema);
module.exports = curent_rental;