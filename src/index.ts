import { createBot } from '@jace1995/telegram-lite';
import { createConfig } from './config';
import { BOT_TOKEN } from './config/token';
import routes from './routes';

(async () => {
    const config = await createConfig();

    const bot = createBot(BOT_TOKEN, routes, config);

    bot.log = true;
    bot.start();
})();

// function getInfo(id: string): Sequence {
//     return usersTable.filter(<User>{telegramID: id});
// }

// async function getUserInfo(user: User, response: Response): Promise<TelegramActionResult> {
//     response.send(`${user.info.name} ${user.info.surName}\n${user.info.phoneNumber}${
//         user.info.bsuir ? `\nКурс: ${user.info.bsuir.course} | Группа: ${user.info.bsuir.group}` : ''
//     }\nОжидания: ${user.info.expectations}`);
//     response.setButtons('Вернуться');
//     return admin_show_registrated.name;
// }

// const bot = createBot(BOT_TOKEN, actions);