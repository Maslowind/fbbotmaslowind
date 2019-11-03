module.exports = function addToFavorite(id, scu) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('./user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI,{ useNewUrlParser: true});
    var db= mongoose.connection;

    console.log("LOL");
    var favItem = {_id: scu};

    User.findOneAndUpdate({_id: id}, {$addToSet:{favorite:favItem }},(err, fb) => {
       let oldUser=fb;
        if (err){
             throw err;
           } else  if (fb != null) {
              oldUser.update(function (err, fluffy) {
               if (err) return console.error(err);
               return console.error("Should I stay or should i go? "+ oldUser);
             })
           }
         });
  
};