module.exports = function createNewUser(id) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('./user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    var newUser = new User({ _id: id,});
    User.findOne({_id: id}, (err, fb) => {
     if (err){
          throw err;
        } else  if (fb === null) {
           newUser.save(function (err, fluffy) {
            if (err) return console.error(err);
           })
        }
      });
   
};