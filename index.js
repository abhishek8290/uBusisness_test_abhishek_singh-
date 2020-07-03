const express= require('express');
const app = express();
const bodyparser= require('body-parser');
const db = require('./db/db');
const router_book_register = require('./router/book_register');
const card_holder_register = require('./router/card_holder_register');
const newRental = require('./router/rental_register');
const findBook = require('./router/book_find');
const findcardHolder = require('./router/cardholder_find');
const returnBook = require('./router/return_book');
const getallbooksonloan = require('./router/getAllBooksOnLoan');

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.use('/book_register',router_book_register);
app.use('/cardholder_register',card_holder_register);
app.use('/rentalRegister',newRental);
app.use('/findBook',findBook);
app.use('/findcardHolder',findcardHolder);
app.use('/returnBook',returnBook);
app.use('/getallbooksonloan',getallbooksonloan);
app.get('/',(req,res)=>res.send('hello world'));

app.listen('8000',function(){console.log('app started')});