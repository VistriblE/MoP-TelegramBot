import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    admin_menu,
    admin_show_registrated,
} from './module';

enum Keyboard {
    show_registrated_users = 'Показать зарегистрированных',
}

export default class extends TelegramAction {
    static readonly id = admin_menu;

    question() {
        this.response.send('Что будем делать?');
        this.response.setButtons(Keyboard.show_registrated_users);
    }

    answer() {
        switch (this.request.text) {
            case Keyboard.show_registrated_users: {
                return admin_show_registrated;
            }
            default: {
                throw new Error('Данный запрос не может быть обработан');
            }
        }
    }
}