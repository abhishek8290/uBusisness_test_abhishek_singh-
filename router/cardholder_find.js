//this is considering the id of book is unique so finding by that 
const router=require('express').Router();
const cardholder = require('../models/cardholder');
router.get('/',(req,res)=>{
    const cardNumber = req.body.cardNumber;
    
    cardholder.findOne({cardNumber:cardNumber}).then(cardholder => res.json(cardholder)).catch(err=>console.log(err));
});
module.exports= router;