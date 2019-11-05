module.exports = function(controller) {

    let createNewUser = require('./Database/create_user');
    let menu= require('./menus/menus');


    controller.hears('Go back to main menu','message',  async(bot, message) => { 
        createNewUser(message.user);   
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: menu.main_menu
        });
    });
        controller.on('facebook_postback', async(bot, message) => {
        if (message.text == 'main-menu'||message.text == '<postback_payload>') {
            createNewUser(message.user); 
            await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies:menu.main_menu
        });
        }
    });
}