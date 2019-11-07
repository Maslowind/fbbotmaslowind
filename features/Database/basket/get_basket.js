module.exports = async function getBasketList(id) {
  function GetDateformatdate(date)
  {
    return date.toLocaleDateString();
  };
    const mongoose = require('mongoose');
    const MongoURI = process.env.MONGO_URI;
    const user_struct = require('../user_struct.js');
    var User= mongoose.model('User', user_struct, "AllUsers");
    mongoose.connect(MongoURI, { useNewUrlParser: true })
    let basket_list= new Object();
    await User.findOne({_id: id}, (err, fb) => {
     if (err){
          throw err;
        } else  if (fb===null) return null
        else
         {
           for(let i=0; i<fb.basket.length;i++)
           basket_list[i]={_id:fb.basket[i]._id, date:GetDateformatdate(fb.basket[i].date)}
        }
      });
      return basket_list;
};