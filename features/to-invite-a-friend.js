module.exports = function(controller) {
    const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
    function SearchRequest(messagetext)
    {
        let messagerequest=messagetext.substring(2);
        let messagerequestarr=[]
        messagerequestarr=messagerequest.split(' '); 
        let finalString="";
        for(let i=0; i< messagerequestarr.length;i++)
        finalString+="search="+messagerequestarr[i]+"&";
        return finalString.substring(0, finalString.length - 1);
    }
    let go_back_menu = [
        {
            title: "Go back",
            payload: "main-menu"
       }
    ];
    controller.hears('To invite a friend','message',  async(bot, message) => { 
        await bot.reply(message,`Here is your link for friends: https://m.me/105232900896676?ref=${ message.user }`);
        await bot.reply(message, {
            text: 'Send link to 3 friends and get one product is free!',
            quick_replies: go_back_menu
        });

    });
         
   controller.on('facebook_referral', async(bot, message) => {
        await bot.reply(message,`sender.id: ${ message.sender.id }`);
        await bot.reply(message,`recipient.id: ${ message.recipient.id }`);
        await bot.reply(message,`referral.source: ${ message.referral.source }`);
        await bot.reply(message,`referral.type: ${ message.referral.type }`);
        await bot.reply(message,`referral.ref: ${ message.referral.ref }`);
        await bot.reply(message,`referral.referer_uri: ${ message.referral.referer_uri }`);
        await bot.reply(message,`user.id: ${ message.user }`);
      
     });

    
}