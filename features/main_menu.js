module.exports = function(controller) {

    controller.on('message', async(bot, message) => { 

        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: [
                {
                    title: "Main",
                    payload: "main-menu",
                    call_to_actions:[
                        {
                            title:"Hello",
                            payload:"Hello"
                        },
                        {
                            title:"Hi",
                            payload:"Hi"
                        }
                    ]
                },
                {
                    title: "Help",
                    payload: "help"
                }
            ]
        });
    });


}