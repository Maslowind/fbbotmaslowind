module.exports = function(controller) {
    let category_menu = [
        {
            title: "Music",
            payload: "music"
            
        },
        {
            title: "Movie",
            payload: "movie"
        },
        {
            title: "Hard Good",
            payload: "hard-good"
        },
        {
            title: "Black Tie",
            payload: "black-tie"
        }
        ,
        {
            title: "Game",
            payload: "game"
        },
        {
            title: "Software",
            payload: "software"
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