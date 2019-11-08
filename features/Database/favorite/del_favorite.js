module.exports = async function gelFavoriteItem(id, itemId) {
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    var favItem = { $in: [ itemId ] };
    
           await User.findOne({_id: id}, (err, fb) => {
            if (err){
                 throw err;
               }
               
               else if(fb!=null)
                {
                  fb.favorite.remove(itemId);
                  fb.save();
               }
             });
           
       
            

};