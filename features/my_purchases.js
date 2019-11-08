module.exports = function(controller) {
    let menu= require('./menus/menus');    
    let getFavoriteList = require('./Database/favorite/get_favorite_list');
    let  basketList;
    let getBasketList = require('./Database/basket/get_basket');
    const bby = require('bestbuy')(process.env.BBY); 
   Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
    
    controller.on('facebook_postback', async(bot, message) => {
        if (message.text.substring(0,12) == 'del-from-fav') {
            delFavoriteItem(message.user,message.text.substring(13));  
            await bot.reply(message, `Deleted from favorite`);
            await bot.reply(message, 
                {text: 'You can go back into main menu:',
                            quick_replies: menu.go_back_main_menu
                });
        }
    });
    controller.hears('My purchases','message',  async(bot, message) => { 
        await getBasketList(message.user).then(v => {
            basketList=v;
           });
           if ( Object.size(basketList)==0)
           {await bot.reply(message, `Your basket list is empty.`)
           await bot.reply(message, 
            {text: 'You can go back into main menu:',
                        quick_replies: menu.go_back_main_menu
            });
        }
           else{

     for(let i=0; i<Object.size(basketList);i++)
         {
            
        await bby.products(`sku=${ basketList[i]._id}`,{show:"image,name,salePrice,sku",pageSize:1, page:1})
        .then(async function(data){
            
         var attachment = {
             type:'template',
             payload:{
                 template_type:'generic',
                 elements:[
                     {
                         title:` ${data.products[0].name }`,
                         image_url:` ${data.products[0].image }`,
                         subtitle:` ${data.products[0].salePrice }$, ${basketList[i].date }`,
                         buttons:[
                             {
                             type:'postback',
                             title:'Buy',
                             payload:`buy ${data.products[0].sku }`
                             }
                            
                         ]
                     },
                 ]
             }
         };
          await bot.reply(message, { attachment: attachment,});
          await bot.reply(message, 
            {text: 'You can go back into main menu:',
                        quick_replies: menu.go_back_main_menu
            });
        })
      }
    }
    });
}