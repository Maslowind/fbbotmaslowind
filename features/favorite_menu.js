module.exports = function(controller) {
   
 let addToFavorite = require('./Database/add_to_favorite');
    controller.on('facebook_postback', async(bot, message) => {
        if (message.text.substring(0,15) == 'add-to-favorite') {
           addToFavorite(message.user,message.text.substring(16));  
            await bot.reply(message, `Added to favorite}`);
        }
    });
}