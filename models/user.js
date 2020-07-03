const mongo =require('mongoose');
const user_schema =mongo.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});
const user = mongo.model('users', user_schema);
module.exports = user;