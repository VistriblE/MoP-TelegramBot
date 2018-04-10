import { TelegramAction } from '@jace1995/telegram-lite';

import {
    admin_menu,
    admin_accept_all,
    acceptAll,
} from './module';

enum Keyboard {
    back = 'Назад в меню',
}

export default class extends TelegramAction {
    static readonly id = admin_accept_all;

    async question() {
        await acceptAll(this);
        this.response.send('Все приняты');
        this.response.send('Что дальше?');
        this.response.setButtons(Keyboard.back);
    }

    async answer() {
        switch (this.request.text) {
            case Keyboard.back: {
                return admin_menu;
            }
            default: {
                throw new Error('Данный запрос не может быть обработан');
            }
        }
    }
}