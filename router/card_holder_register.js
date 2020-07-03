const router = require('express').Router();
const cardholder = require('../models/cardholder');
router.post('/',async(req,res)=>{
    const newCardHolder = new cardholder({
        id : req.body.id,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        cardNumber:req.body.cardNumber
    });
    const is_card_there_id = await cardholder.findOne({id:req.body.id});
    const is_card_there_id2 = await cardholder.findOne({cardNumber:req.body.cardNumber});
    if(is_card_there_id)res.json('card holder is already there with the same id ');
    else if(is_card_there_id2)res.json('card holder is already there with the same card number');
    else {
        newCardHolder.save().then(cardholder => res.json(cardholder)).catch(err=>{
            res.json(err);
            console.log(err)
        });
    }   
});

module.exports= router;

