import { TelegramAction } from '@jace1995/telegram-lite';

import {
    admin_deny,
    denyUsersList,
    deleteUser,
    admin_menu,

} from './module';

// enum Keyboard {
//     show_list_again = 'Вывести список снова',
//     back = 'Хватит с меня',
// }

export default class extends TelegramAction {
    static readonly id = admin_deny;

    async question() {
        this.response.send('Что они уже натворили?');
        this.response.setButtons(await denyUsersList(this));
    }

    async answer() {
        if (this.request.text != 'Ладно, оставим их') {
            await deleteUser(this.request.text, this);
            this.response.send('Отчислен! Удалён! Убит!');
            return admin_deny;
            // this.response.setButtons([Keyboard.show_list_again, Keyboard.back]);
        } else {
            return admin_menu;
        }
    }
}