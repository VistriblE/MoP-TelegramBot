"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_lite_1 = require("@jace1995/telegram-lite");
const config_1 = require("./config");
const token_1 = require("./config/token");
const routes_1 = require("./routes");
(() => __awaiter(this, void 0, void 0, function* () {
    const config = yield config_1.createConfig();
    const bot = telegram_lite_1.createBot(token_1.BOT_TOKEN, routes_1.default, config);
    bot.start();
}))();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkRBQW9EO0FBQ3BELHFDQUF3QztBQUN4QywwQ0FBMkM7QUFDM0MscUNBQThCO0FBRTlCLENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxNQUFNLEdBQUcsTUFBTSxxQkFBWSxFQUFFLENBQUM7SUFFcEMsTUFBTSxHQUFHLEdBQUcseUJBQVMsQ0FBQyxpQkFBUyxFQUFFLGdCQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFakQsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUVMLDJDQUEyQztBQUMzQyx3REFBd0Q7QUFDeEQsSUFBSTtBQUVKLDhGQUE4RjtBQUM5Rix3RkFBd0Y7QUFDeEYsd0dBQXdHO0FBQ3hHLGdEQUFnRDtBQUNoRCx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLElBQUk7QUFFSiw2Q0FBNkMifQ==