module.exports = function(controller) {

    controller.hears(async(message) => { return (message.quick_reply.payload=='movie'||
    message.quick_reply.payload=='black-tie'||
    message.quick_reply.payload=='hard-good'||
    message.quick_reply.payload=='music'||
    message.quick_reply.payload=='software'||
    message.quick_reply.payload=='bundle'||
    message.quick_reply.payload=='game'
    )}, 'message', async(bot, message) => { 
        await bot.reply(message,`I heard you wanna choose ${ message.quick_reply.payload }`);
 });

}