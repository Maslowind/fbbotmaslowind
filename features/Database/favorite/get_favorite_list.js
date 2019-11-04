module.exports = async function getFavoriteList(id) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    let favorite_list=[];
    await User.findOne({_id: id}, (err, fb) => {
     if (err){
          throw err;
        } else  if (fb===null) return favorite_list
        else
         {
           for(let i=0; i<fb.favorite.length;i++)
           favorite_list[i]=fb.favorite[i]._id;
        }
      });
      return favorite_list;
};