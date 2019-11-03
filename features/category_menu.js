module.exports = function(controller) {
    let counter =1;
    let currentProdType='';
    let go_back_menu = [
        {
            title: "More products",
            payload: "more-products"
       },
        {
            title: "Go back",
            payload: "shop"
       }
    ];
    const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
    controller.hears(async(message) => { return (message.quick_reply.payload=='Movie'||
    message.quick_reply.payload=='BlackTie'||
    message.quick_reply.payload=='HardGood'||
    message.quick_reply.payload=='Music'||
    message.quick_reply.payload=='Software'||
    message.quick_reply.payload=='Bundle'||
    message.quick_reply.payload=='Game'||
    message.quick_reply.payload=='more-products'
    )}, 'message', async(bot, message) => { 
        if(message.quick_reply.payload=='more-products')
        counter++;
        else
        currentProdType=message.quick_reply.payload;

       await bby.products('search=spider&search=man',{show:"image,name,salePrice,sku", page:counter}).then(function(data){
            for(let i=1; i<5;i++)
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
                                payload:`buy ${data.products[i].sku }`
                                },
                                {
                                type:'postback',
                                title:'Add to favorite',
                                payload:`add-to-favorite ${data.products[i].sku`
                            }
                            ]
                        },
                    ]
                }
            };
            bot.reply(message, {attachment: attachment,});
           
        }
          });
         await  bot.reply(message, {
         text: 'Your menu:',
         quick_replies: go_back_menu
        })

 });

}