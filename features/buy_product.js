module.exports = function(controller) {
    let menu= require('./menus/menus');    
    let getFavoriteList = require('./Database/favorite/get_favorite_list');
    let favoriteList;
    let addToBasket = require('./Database/my purchases/add_to_basket');
    let delFavoriteItem = require('./Database/favorite/del_favorite');
    const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O'); 

    controller.on('facebook_postback', async(bot, message) => {
        if (message.text.substring(0,3) == 'buy') {
            addToBasket(message.user,message.text.substring(4));  
            await bot.reply(message, `Bought`);
        }
    });
    
    
}
