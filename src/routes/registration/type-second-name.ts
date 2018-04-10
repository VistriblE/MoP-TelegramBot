import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_type_second_name,
    registration_check_university,
    setProperties,
} from './module';

export default class extends TelegramAction {
    static readonly id = registration_type_second_name;

    question() {
        this.response.send('Введи фамилию');
    }

    async answer() {
        await setProperties(this, <UserInfo>{surName: this.request.text});
        return registration_check_university;
    }
}