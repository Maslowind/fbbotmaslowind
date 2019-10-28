module.exports = function(controller) {
    let bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
    controller.hears(async(message) => { return (message.quick_reply.payload=='movie'||
    message.quick_reply.payload=='black-tie'||
    message.quick_reply.payload=='hard-good'||
    message.quick_reply.payload=='music'||
    message.quick_reply.payload=='software'||
    message.quick_reply.payload=='bundle'||
    message.quick_reply.payload=='game'
    )}, 'message', async(bot, message) => { 
        bby.products(`type="${ message.quick_reply.payload }"`,{show:"image"}).then(function(data){});
        for(let i=0;i<10;i++)
        {
        await bot.reply(message,` ${ data.products[i].image }`);
        }
 });

}