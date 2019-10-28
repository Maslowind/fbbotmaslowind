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
    
    controller.hears('Main menu','facebook_quick_reply',  async(bot, message) => { 
        await bot.reply(message,`I heard you posting back a post_back about ${ message.quick_reply.payload}`);
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: main_menu
        });
    });
    controller.on('facebook_quick_reply', async(bot, message) => {
        if (message.text == 'main-menu'|| message.quick_reply.payload=='main-menu') {
            await bot.reply(message,`I heard you posting back a post_back about ${ message.text }`);
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: main_menu
        });
        }
    });
    controller.on('facebook_postback', async(bot, message) => {
        if (message.text == 'main-menu'||message.text == '<postback_payload>'|| message.quick_reply.payload=='main-menu') {
            await bot.reply(message,`I heard you posting back a post_back about ${ message.text }`);
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: main_menu
        });
        }
    });
 

}