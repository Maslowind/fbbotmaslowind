module.exports = async function getInvated(id) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    let result;
    await User.findOne({_id: id}, (err, fb) => {
     if (err){
          throw err;
        } 
        else
         {
           console.log(fb);
           if(fb.invited==null) result= false;
           else result= true
        }
      });
return result;
};