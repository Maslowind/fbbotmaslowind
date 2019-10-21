module.exports = function(controller) {

    controller.hears('main-menu','message',  async(bot, message) => { 

        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: [
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
            ]
        });
    });
    

}