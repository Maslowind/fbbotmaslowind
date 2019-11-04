module.exports = async function getFavoriteList(id) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    .then(connect => console.log('connected to mongodb..'))
    .catch(e => console.log('could not connect to mongodb', e));
    let favorite_list=[];
    await User.findOne({_id: id}, (err, fb) => {
     if (err){
          throw err;
        } else  
         {
           for(let i=0; i<fb.favorite.length;i++)
           favorite_list[i]=fb.favorite[i]._id;
           console.log(favorite_list);
        }
      });
      console.log("fl="+favorite_list);
      return favorite_list;
};