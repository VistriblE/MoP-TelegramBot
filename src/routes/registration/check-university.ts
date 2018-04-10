import { TelegramAction, ActionNotFoundError } from '@jace1995/telegram-lite';

import {
    UserInfo,
    registration_check_university,
    registration_type_course,
    registration_type_phone_number,
    registration_start, //test
    setProperties,
} from './module';

enum Keyboard {
    yes = 'Да',
    no = 'Нет',
}

export default class extends TelegramAction {
    static readonly id = registration_check_university;

    question() {
        this.response.send('Учишься в БГУИРе?');
        this.response.setButtons([
            [Keyboard.yes, Keyboard.no]
        ]);
    }

    answer() {
        // return registration_start; //test

        switch (this.request.text) {
            case Keyboard.yes:
                return registration_type_course;

            case Keyboard.no:
                return registration_type_phone_number;

            default:
                throw new ActionNotFoundError(this.request.text);
        }
    }
}