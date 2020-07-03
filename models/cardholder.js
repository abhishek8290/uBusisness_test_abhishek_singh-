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
const card_holder = mongo.model('card_holder', card_holder_schema);
module.exports = card_holder;