//this is considering the id of book is unique so finding by that 
const router=require('express').Router();
const book = require('../models/book');
router.get('/',(req,res)=>{
    const isbn = req.body.isbn;
    book.findOne({isbn:isbn}).then(book => res.json(book)).catch(err=>console.log(err));
});
module.exports= router;