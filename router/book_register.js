const router = require('express').Router();
const book = require('../models/book');
router.post('/',async(req,res)=>{
    const newBook = new book({
        id : req.body.id,
        title: req.body.title,
        isbn: req.body.isbn,
        author:req.body.author
    });
    const is_book_there = await book.findOne({isbn:req.body.isbn});
    const is_book_there2 = await book.findOne({id:req.body.id});
    if(is_book_there)res.json('book already added with same isbn');
    else if(is_book_there2)res.json('book already added with same id');
    else {
        newBook.save().then(book => res.json(book)).catch(err=>{
            res.json(err);
            console.log(err)
        }); 
    }

      
});

module.exports= router;
