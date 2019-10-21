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

    controller.on('facebook_postback', async(bot, message) => {
        if (message.text == 'main-menu') {
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: [
                {
                    title: "My purchases",
                    payload: "my-purchases"
                    
                },
                {
                    title: "Shop",
                    payload: "shop"
                },
                {
                    title: "Favorites",
                    payload: "favorites"
                },
                {
                    title: "To invite a friend",
                    payload: "to-invite-a-friend"
                }
            ]
        });
    });
        }
    });

    
}