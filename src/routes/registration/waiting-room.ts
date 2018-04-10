import { TelegramAction } from '@jace1995/telegram-lite';

import {
    UserInfo,
    setProperties,
    getUserStatus,
    menu,
    registration_waiting_room
} from './module';

enum Keyboard {
    check_status = 'Проверить текущее состояние'
}

export default class extends TelegramAction {
    static readonly id = registration_waiting_room;

    question() {
        this.response.send('Проверить текущее состояние?');
        this.response.setButtons(Keyboard.check_status);

    }

    async answer() {
        switch (this.request.text) {
            case Keyboard.check_status: {
                if (await getUserStatus(this)) {
                    this.response.send('Поздравляю, вас приняли на курс');
                    return this.id;
                } else {
                    this.response.send('Ваша заявка ещё на рассмотрении');
                    return registration_waiting_room;
                }
            }
            default: {
                throw new Error('Невозможно обработать данный запрос');
            }
        }
    }
}