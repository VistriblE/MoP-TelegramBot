import { TelegramAction } from '@jace1995/telegram-lite';
import { User } from '../../models/user';

import {
    UserInfo,
    admin_show_registrated,
    getUsersArray,
    getUserInfo,
    admin_menu,
    admin_accept_all,
    admin_deny
} from './module';

enum Keyboard {
    back = 'Вернуться в меню',
    deny = 'Отклонить кого-то',
    accept_all = 'Принять всех',
}

export default class extends TelegramAction {
    static readonly id = admin_show_registrated;

    async question() {
        const users: User[] = await getUsersArray(this);
        for (let i = 0; i < users.length; i++) {
            if (users[i].info.finishedRegistration && !users[i].info.acceptStatus) {
                await getUserInfo(this, users[i]);
            }
        }
        this.response.send('Что будем с ними делать?');
        this.response.setButtons([Keyboard.accept_all, Keyboard.deny, Keyboard.back]);
    }

    answer() {
        switch (this.request.text) {
            case Keyboard.accept_all: {
                return admin_accept_all;
            }
            case Keyboard.deny: {
                return admin_deny;
            }
            case Keyboard.back: {
                return admin_menu;
            }
            default: {
                throw new Error('Невозможно обработать данный запрос');
            }
        }
    }
}