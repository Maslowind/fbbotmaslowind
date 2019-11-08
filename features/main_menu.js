module.exports = function(controller) {

    let createNewUser = require('./Database/create_user');
    let addInvated = require('./Database/invitations/add_invated');
    let getInvated = require('./Database/invitations/get_invated');
    let getInvantion = require('./Database/invitations/get_invation_list');
    let menu= require('./menus/menus');
    function checkInvantion(id)
    {
        addInvated(id);
       if(getInvated(id)==false)
      {
          if(getInvantion(id)==true){ addInvated(id); bot.reply(message,  'Congradulations! You get an opportunity get one our product is free!')}
      }
    };

    controller.hears('Go back to main menu','message',  async(bot, message) => { 
        createNewUser(message.user);   
       await checkInvantion(message.user)
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: menu.main_menu
        });
        
    });
        controller.on('facebook_postback', async(bot, message) => {
        if (message.text == 'main-menu'||message.text == '<postback_payload>') {
            createNewUser(message.user); 
           checkInvantion(message.user)
            await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies:menu.main_menu
        });
        }
        
    });
}