module.exports = function(controller) {
    let menu= require('./menus/menus');
    let addToInvitations = require('./Database/invitations/add_to_invitations');
    let createNewUser = require('./Database/create_user');

    controller.hears('To invite a friend','message',  async(bot, message) => { 
        await bot.reply(message,`Here is your link for friends: https://m.me/105232900896676?ref=${ message.user }`);
        await bot.reply(message, {
            text: 'Send link to 3 friends and get one product is free!',
            quick_replies: menu.go_back_main_menu
        });

    });
         
   controller.on('facebook_referral', async(bot, message) => {
        createNewUser(message.user);
        if(message.referral.type!=message.sender.id )
        addToInvitations(message.referral.ref,message.sender.id); 
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies:menu.main_menu
        });

     });

    
}