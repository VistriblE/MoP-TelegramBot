import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_type_course,
    registration_type_group,
    setProperties,
} from './module';

export default class extends TelegramAction {
    static readonly id = registration_type_course;

    question() {
        this.response.send('На каком курсе?');
    }

    async answer() {
        await setProperties(this, <UserInfo>{ bsuir: { course: this.request.text } });
        return registration_type_group;
    }
}