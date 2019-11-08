module.exports = function addToInvitations(id, id_inv) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    console.log(id+", "+id_inv)
    var InvItem = {_id: id_inv};
    User.findOneAndUpdate({_id: id}, {$addToSet:{invitations:InvItem }},(err, fb) => {
      if (err){
             throw err;
           } else  if (fb != null) {
            fb.update(function (err, fluffy) {
               if (err) console.error(err);
             })
           }
         });
  
};