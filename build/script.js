"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Telegraf = require('telegraf');
const BOT_TOKEN = '517638395:AAHDSz1ukdmuIQKdKHPbOAfcJdyh6eYVFMc';
const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => {
    console.log('started:', ctx.from.id);
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Регистрация',
                        // we shall check for this value when we listen
                        // for "callback_query"
                        callback_data: 'register'
                    }
                ]
            ]
        }
    };
    return ctx.reply('Welcome!', opts);
});
bot.on('callback_query', (ctx) => {
    ctx.answerCbQuery();
});
bot.command('help', (ctx) => ctx.reply('Try send a sticker!'));
bot.hears(/hi/i, (ctx) => ctx.reply('Hey there!'));
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears(/(.*)/, (ctx) => ctx.reply('привет пошёл нахуй'));
bot.startPolling();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvdGVsZWdyYW0tYm90L3NyYy8iLCJzb3VyY2VzIjpbInNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxNQUFNLFNBQVMsR0FBRywrQ0FBK0MsQ0FBQztBQUVsRSxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVwQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxNQUFNLElBQUksR0FBRztRQUNYLFlBQVksRUFBRTtZQUNaLGVBQWUsRUFBRTtnQkFDZjtvQkFDRTt3QkFDRSxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsK0NBQStDO3dCQUMvQyx1QkFBdUI7d0JBQ3ZCLGFBQWEsRUFBRSxVQUFVO3FCQUMxQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQy9CLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtBQUNyQixDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztBQUMvRCxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1QyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7QUFFNUQsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDIn0=