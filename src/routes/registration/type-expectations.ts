import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_type_expectations,
    registration_waiting_room,
    setProperties,
} from './module';

export default class extends TelegramAction {
    static readonly id = registration_type_expectations;
    question() {
        this.response.send('Чего ты ожидаешь от обучения?');
    }

    async answer() {
        await setProperties(this, <UserInfo>{ expectations: this.request.text });
        this.response.send('Ваша заявка принята на рассмотрение');
        return registration_waiting_room;
    }
}