import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    start,
    menu,
    userIsAdmin,
    userIsAuthorized,
} from './module';

export default class extends TelegramAction {
    static readonly id = start;

    async answer() {
        this.response.send('Добро пожаловать в Магическое сообщество!');
        return menu;
    }
}