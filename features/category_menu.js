module.exports = function(controller) {
    let counter =1;
    let go_back_menu = [
        {
            title: "More products",
            payload: "more-products"
       },
       {
            title: "Go back",
            payload: "main-menu"
       }
    ];
    const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
    function SearchRequest(messagetext)
    {
        let messagerequestarr=[],finalString="";
        let messagerequest=messagetext.substring(2);
         messagerequest=messagerequest.replace(/\s+/g, ' ')
        messagerequest=messagerequest.replace(/^\s+/g, '');
        messagerequest=messagerequest.replace(/\s+$/g, '');
        messagerequestarr=messagerequest.split(' '); 
        for(let i=0; i< messagerequestarr.length;i++)
        finalString+="search="+messagerequestarr[i]+"&";
        return finalString.substring(0, finalString.length - 1);
    };

   /* controller.hears(async(message) => { return (message.quick_reply.payload=='shop') }, 'message', async(bot, message) => { 
        await bot.reply(message, {
         text: 'Please, text me name of product, which you want to buy in format: "S:..."',
         quick_replies:  go_back_menu
     });
 });*/
 controller.on('message', async(bot, message) => {     
     console.log(message.text)  ;
    if (message.quick_reply.payload=='shop') {        
    await  bot.reply(message, {
        text: 'Please, text me name of product, which you want to buy in format: "S:..."',
        quick_replies: go_back_menu
       })}
    });

           controller.on('facebook_postback', async(bot, message) => {        
            if (message.text == 'shop') {        
            await  bot.reply(message, {
                text: 'Please, text me name of product, which you want to buy in format: "S:..."',
                quick_replies: go_back_menu
               })}
            });
            
console.log(SearchRequest("S:    Harry   Potter      "));
        controller.hears(async(message) => { return (message.text.substring(0,2) == 'S:') }, 'message', async(bot, message) => { 
            await  bot.reply(message,  `${message.text.substring(2)}`)
           
        /*if(message.quick_reply.payload=='more-products')
        counter++;*/
        
       /* await bby.products(`${SearchRequest(message.text)}`,{show:"image,name,salePrice,sku",pageSize:5, page:1}).then(function(data){
            console.log(data);
            for(let i=0; i<data.products.length;i++)
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
                                payload:`add-to-favorite ${data.products[i].sku}`
                            }
                            ]
                        },
                    ]
                }
            };
            bot.reply(message, {attachment: attachment,});
           
        }
          });*/
        

 });

}