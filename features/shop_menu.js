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
    controller.hears(async(message) => { return (message.quick_reply.payload=='Movie'||
    message.quick_reply.payload=='BlackTie'||
    message.quick_reply.payload=='HardGood'||
    message.quick_reply.payload=='Music'||
    message.quick_reply.payload=='Software'||
    message.quick_reply.payload=='Bundle'||
    message.quick_reply.payload=='Game'
    )}, 'message', async(bot, message) => { 
        /*bby.products(`type="${ message.quick_reply.payload }"`,{show:"image"}).then(function(data){});
        for(let i=0;i<10;i++)
        {
        await bot.reply(message,` ${ data.products[i].image }`);
        }*/
       /* bby.products(`type="Movie"`,{show:"image"}).then(function(data){});
        for(let i=0;i<10;i++)
        {
        await bot.reply(message,` ${ data.products[i].image }`);
        }*/
        await bot.reply(message,` ${ message.quick_reply.payload }`);

 });

}