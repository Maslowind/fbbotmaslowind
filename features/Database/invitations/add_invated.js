module.exports = function addAdress(id) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    User.findOne({_id: id}, (err, fb) => {
      if (err){
           throw err;
         } else   {
           fb.invited=true;
            fb.save(function (err, fluffy) {
             if (err) return console.error(err);
            })
         }
       });
};