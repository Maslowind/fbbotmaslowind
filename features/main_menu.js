module.exports = function(controller) {
    let main_menu = [
        {
            title: "My purchases",
            payload: "my-purchases"
            
        },
        {
            title: "Shop",
            payload: "shop"
        },
        {
            title: "Favorites",
            payload: "favorites"
        },
        {
            title: "To invite a friend",
            payload: "to-invite-a-friend"
        }
    ];
    let createNewUser = require('./Database/create_user');
    
    controller.hears(async(message) => { return (message.quick_reply.payload=='main-menu') }, 'message', async(bot, message) => { 
        createNewUser(message.user);   
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: main_menu
        });
    });



    controller.on('facebook_postback', async(bot, message) => {
        if (message.text == 'main-menu'||message.text == '<postback_payload>') {
            createNewUser(message.user); 
            await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: main_menu
        });
        }
    });
 

}