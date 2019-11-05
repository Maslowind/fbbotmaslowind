module.exports = function(controller) {
    let menu= require('./menus/menus');    
    let getFavoriteList = require('./Database/favorite/get_favorite_list');
    let favoriteList;
    let addToFavorite = require('./Database/favorite/add_to_favorite');
    let delFavoriteItem = require('./Database/favorite/del_favorite');
    const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O'); 

    controller.on('facebook_postback', async(bot, message) => {
        if (message.text.substring(0,15) == 'add-to-favorite') {
           addToFavorite(message.user,message.text.substring(16));  
            await bot.reply(message, `Added to favorite`);
        }
    });
    controller.on('facebook_postback', async(bot, message) => {
        if (message.text.substring(0,12) == 'del-from-fav') {
            delFavoriteItem(message.user,message.text.substring(13));  
            await bot.reply(message, `Deleted from favorite`);
        }
    });
    //controller.hears(async(message) => { return (message.quick_reply.payload=='favorites') }, 'message', async(bot, message) => { 
        controller.hears('Favorites','message',  async(bot, message) => { 
        await getFavoriteList(message.user).then(v => {
            favoriteList=v;
           });
           if (favoriteList==null)  await bot.reply(message, `Your favorite list is empty.`);
           else{
     for(let i=0; i<favoriteList.length;i++)
         {
        await bby.products(`sku=${favoriteList[i]}`,{show:"image,name,salePrice,sku",pageSize:1, page:1})
        .then(async function(data){
         var attachment = {
             type:'template',
             payload:{
                 template_type:'generic',
                 elements:[
                     {
                         title:` ${data.products[0].name }`,
                         image_url:` ${data.products[0].image }`,
                         subtitle:` ${data.products[0].salePrice }$`,
                         buttons:[
                             {
                             type:'postback',
                             title:'Buy',
                             payload:`buy ${data.products[0].sku }`
                             },
                             {
                             type:'postback',
                             title:'Delete from favorite',
                             payload:`del-from-fav ${data.products[0].sku}`
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