module.exports = function(controller) {
    const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
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
       await bby.products(`type="${ message.quick_reply.payload }"`,{show:"image,name,salePrice"}).then(function(data){
            for(let i=0; i<5;i++)
            {
            var attachment = {
                type:'template',
                payload:{
                    template_type:'generic',
                    elements:[
                        {
                            title:` ${data.products[i].name }`,
                            image_url:` ${data.products[i].image }`,
                            subtitle:` ${data.products[i].salePrice }$`,
                            buttons:[
                                {
                                type:'postback',
                                title:'Buy',
                                payload:'buy'
                                },
                                {
                                    type:'postback',
                                    title:'Add to favorite',
                                    payload:'add-to-favorite'
                            }
                            ]
                        },
                    ]
                }
            };
            bot.reply(message, {attachment: attachment,});
        }
          });

 });

}