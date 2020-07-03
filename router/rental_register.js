const router = require('express').Router();
const rental = require('../models/current_rental');
const book = require('../models/book');
const cardholder = require('../models/cardholder');

router.post('/',async(req,res)=>{
    const id = req.body.id;
    const isbn = req.body.isbn;
    const cardNumber = req.body.cardNumber;
    const cardHolderFound = await cardholder.findOne({cardNumber:cardNumber});
    const bookFound = await book.findOne({isbn:isbn})
    if(!cardHolderFound)res.json('card holder not found check cardnumber');
    else if(!bookFound)res.json('book not found check isbn');
    if(cardHolderFound&&bookFound){
        const newRental = new rental({
            id:id,
            isbn:isbn,
            cardNumber:cardNumber,
            cardHolder:[{
                id : cardHolderFound.id,
                lastName: cardHolderFound.lastName,
                firstName: cardHolderFound.firstName,
                cardNumber:cardHolderFound.cardNumber
            }],
            book:[{
                id : bookFound.id,
                title: bookFound.title,
                isbn: bookFound.isbn,
                author: bookFound.author

            }]
        });
        console.log(newRental);
        newRental.save().then(rental => res.json(rental)).catch(err=>{
            res.json(err);
            console.log(err)
        }); 
    }
     
});

module.exports= router;

