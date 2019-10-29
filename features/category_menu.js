module.exports = function(controller) {
    let bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
    controller.hears(async(message) => { return (message.quick_reply.payload=='Movie'||
    message.quick_reply.payload=='BlackTie'||
    message.quick_reply.payload=='HardGood'||
    message.quick_reply.payload=='Music'||
    message.quick_reply.payload=='Software'||
    message.quick_reply.payload=='Bundle'||
    message.quick_reply.payload=='Game'
    )}, 'message', async(bot, message) => { 
        /*bby.products(`type="${ message.quick_reply.payload }"`,{show:"image"}).then(function(data){});
        for(let i=0;i<10;i++)
        {
        await bot.reply(message,` ${ data.products[i].image }`);
        }*/
       /* bby.products(`type="Movie"`,{show:"image"}).then(function(data){});
        for(let i=0;i<10;i++)
        {
        await bot.reply(message,` ${ data.products[i].image }`);
        }*/
        await bot.reply(message,` ${ message.quick_reply.payload }`);

 });

}