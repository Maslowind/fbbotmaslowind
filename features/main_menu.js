module.exports = function(controller) {

    let createNewUser = require('./Database/create_user');
    let menu= require('./menus/menus');


   /* controller.hears(async(message) => {await message.quick_reply.payload=='main-menu'}, 
         'message', async(bot, message) => { 
        createNewUser(message.user);   
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: main_menu
        });
    });*/



    controller.on('facebook_postback', async(bot, message) => {
        console.log(menu.main_menu)
        if (message.text == 'main-menu'||message.text == '<postback_payload>') {
            createNewUser(message.user); 
            await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies:menu.main_menu
        });
        }
    });
 

}