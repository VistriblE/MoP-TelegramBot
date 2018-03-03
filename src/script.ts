import { User } from './User.module';
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

  return ctx.reply('Welcome!', opts)
})

bot.on('callback_query', (ctx) => {
  ctx.answerCbQuery()
})

bot.command('help', (ctx) => ctx.reply('Try send a sticker!'));
bot.hears(/hi/i, (ctx) => ctx.reply('Hey there!'));
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears(/(.*)/, (ctx) => ctx.reply('привет пошёл нахуй'));

bot.startPolling();
