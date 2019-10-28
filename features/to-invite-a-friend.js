module.exports = function(controller) {
    let to_invite_a_friend_menu = [
        {
            title: "Go back",
            payload: "main-menu"
       }
    ];
    controller.hears('To invite a friend','message',  async(bot, message) => { 
        await bot.reply(message,`Here is your link for friends: https://m.me/105232900896676?ref=some_random_string`);
        await bot.reply(message, {
            text: 'Send link to 3 friends and get one product is free!',
            quick_replies: to_invite_a_friend_menu
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