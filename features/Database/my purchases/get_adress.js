module.exports = async function getAdress(id) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    let result=null;
    await User.findOne({_id: id}, (err, fb) => {
     if (err){
          throw err;
        } 
        else  if (fb.adress==null) result= null;
        else result= fb.adress;
       });
    return result;  
};