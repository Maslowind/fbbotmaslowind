module.exports = function(controller) {
    let menu= require('./menus/menus');    
    let addToBasket = require('./Database/basket/add_to_basket');
    let addPhoneNumber = require('./Database/my purchases/add_phone_number');
    let getPhoneNumber = require('./Database/my purchases/get_phone_number');
    let phoneNumber;
    controller.on('facebook_postback', async(bot, message) => {
        if (message.text.substring(0,3) == 'buy') {
            addToBasket(message.user,message.text.substring(4));
            await getPhoneNumber(message.user).then(v => {
                phoneNumber=v;
               });
            if(phoneNumber==null) await bot.reply(message, `Please, text me your phone number in format: "PN:..."`);
            else await bot.reply(message, {text: `Do you wanna use this one phone number: ${ phoneNumber }?`,
                            quick_replies: menu.yes_no_pn 
                });
        }
    });
    controller.hears('No, another number','message',  async(bot, message) => { 
        await bot.reply(message, {
         text: `Please, text me your phone number in format: "PN:..."`,
         quick_replies: menu.go_back_main_menu
     });
 });
     controller.hears('Yes, this number','message',  async(bot, message) => { 
    await bot.reply(message, `Please, text me your adress in format: "AD:..."`)
   });
     controller.hears(async(message) => { return message.text.substring(0,3) == 'PN:'}, 'message', async(bot, message) => { 
        addPhoneNumber(message.user,message.text.substring(3)) ;
     await bot.reply(message, `Please, text me your adress in format: "AD:..."`)
    });
    
}
