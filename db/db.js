const mongo = require('mongoose');
const mongo_url = 'mongodb://localhost/buBusinees_abhishek';
mongo.connect(mongo_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db =mongo.connection;
db ? console.log('Database connected successfully') : console.log('Error');
module.exports= db; 