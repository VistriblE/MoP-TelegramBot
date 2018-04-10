import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_type_phone_number,
    menu,
    setProperties,
    checkPhoneNumber,
    registration_type_expectations,
} from './module';

export default class extends TelegramAction {
    static readonly id = registration_type_phone_number;

    question() {
        this.response.send('Введи номер телефона');
    }

    async answer() {
        if (checkPhoneNumber(this.request.text)) {
            await setProperties(this, <UserInfo>{ phoneNumber: this.request.text, finishedRegistration: true });
            return registration_type_expectations;
        } else {
            throw new Error('Вы ввели неверный номер, повторите ввод!');
        }
    }
}