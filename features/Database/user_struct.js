const mongoose = require('mongoose')
const user_struct = new mongoose.Schema({
    _id: { type: Number, required: true },
    phoneNumber:  String, 
    adress: String,
    invited: Boolean, 
    favorite: [{ _id: Number }],    
    basket: [{ _id: Number, date: Date }],
    invitations: [{ _id: Number }],
});

module.exports = user_struct;