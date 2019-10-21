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



    
}