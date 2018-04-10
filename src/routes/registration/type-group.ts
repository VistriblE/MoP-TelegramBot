import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_type_group,
    registration_type_phone_number,
    setProperties,
} from './module';

export default class extends TelegramAction {
    static readonly id = registration_type_group;

    question() {
        this.response.send('В какой группе?');
    }

    async answer() {
        await setProperties(this, <UserInfo>{ bsuir: { group: this.request.text } });
        return registration_type_phone_number;
    }
}