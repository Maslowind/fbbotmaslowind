module.exports = function addToBasket(id, scu) {
  function GetDate()
  {
      var today = new Date();
       return (today.getMonth()+1)+'.'+today.getDate()+'.'+today.getFullYear();
  };
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    var favItem = {_id: scu, date: GetDate()};
    User.findOneAndUpdate({_id: id}, {$addToSet:{basket:favItem }},(err, fb) => {
      if (err){
             throw err;
           } else  if (fb != null) {
            fb.update(function (err, fluffy) {
               if (err) console.error(err);
             })
           }
         });
  
};