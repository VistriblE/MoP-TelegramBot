import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_type_name,
    registration_type_second_name,
    setProperties,
} from './module';

export default class extends TelegramAction {
    static readonly id = registration_type_name;

    question() {
        this.response.send('Введи имя');
    }

    async answer() {
        await setProperties(this, <UserInfo>{name: this.request.text});
        return registration_type_second_name;
    }
}