/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    /**
     * Detect when a message has a sticker attached
     */
    

    controller.hears(async(message) => message.sticker_id, 'message', async(bot, message) => {
        await bot.reply(message,'Cool sticker.');
    });
   /* controller.on('facebook_postback', async(bot, message) => {
        await bot.reply(message,`I heard you posting back a post_back about ${ message.text }`);
    });*/
    controller.on('facebook_referral', async(bot, message) => {
        await bot.reply(message,`sender.id: ${ message.sender.id }`);
        await bot.reply(message,`recipient.id: ${ message.recipient.id }`);
        await bot.reply(message,`referral.source: ${ message.referral.source }`);
        await bot.reply(message,`referral.type: ${ message.referral.type }`);
        await bot.reply(message,`referral.ref: ${ message.referral.ref }`);
        await bot.reply(message,`referral.referer_uri: ${ message.referral.referer_uri }`);

    });

    
}