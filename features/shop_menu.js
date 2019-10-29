module.exports = function(controller) {
    let category_menu = [
        {
            title: "Music",
            payload: "music"
            
        },
        {
            title: "Movie",
            payload: "Movie"
        },
        {
            title: "Hard Good",
            payload: "HardGood"
        },
        {
            title: "Black Tie",
            payload: "BlackTie"
        }
        ,
        {
            title: "Game",
            payload: "Game"
        },
        {
            title: "Software",
            payload: "Software"
        }
        ,
        {
            title: "Bundle",
            payload: "bundle"
        },
        {
            title: "Go back",
            payload: "main-menu"
       }
    ];
    controller.hears(async(message) => { return (message.quick_reply.payload=='shop') }, 'message', async(bot, message) => { 
        await bot.reply(message, {
         text: 'Please, choose your category:',
         quick_replies: category_menu
     });
 });
 
    controller.on('facebook_postback', async(bot, message) => {
        
        if (message.text == 'shop') {
       await bot.reply(message, {
            text: 'Please, choose your category:',
            quick_replies: category_menu
        });
        }
    });
    

}