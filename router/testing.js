
const rental = require('../models/current_rental');
const func = async()=>{
    const res = rental.find();
    console.log(res.plugins);
}
func();
