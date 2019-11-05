const mongoose = require('mongoose')
const user_struct = new mongoose.Schema({
    _id: { type: Number, required: true },
    phoneNumber:  String, 
    adress: String, 
    favorite: [{ _id: Number }],    
    basket: [{ _id: Number, date: Date }],
});

module.exports = user_struct;