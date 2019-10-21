module.exports = function(controller) {

    controller.hears('main_menu','message',  async(bot, message) => { 

        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: [
                {
                    title: "Main",
                    payload: "main-menu"
                    
                },
                {
                    title: "Help",
                    payload: "help"
                }
            ]
        });
    });


}