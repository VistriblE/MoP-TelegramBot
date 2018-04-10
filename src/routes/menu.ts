import { TelegramAction } from '@jace1995/telegram-lite';
//import { admin_show_registrated, registration_waiting_room } from '../router';
import { User } from '../models/user';

import {
    UserInfo,
    menu,
    registration_type_name,
    userIsAdmin,
    userIsAuthorized,
    createUser,
    findUser,
    registration_waiting_room,
    admin_menu
} from './module';

enum Keyboard {
    register = 'ДА!!!',
    waiting_room = 'Ok',
    admin_start = 'Администрирую!',
    yeah = 'Урааа!',
    // showRegistratedUsers = 'Показать зарегистрированых',
    // showAcceptedUsers = 'Показать участников'
}

export default class extends TelegramAction {
    static readonly id = menu;

    async question() {
        const user: User | null = await findUser(this);
        console.log(`user: ${user}`);
        if (this.request.user.id == '392321375') {
            this.response.send('Привет, Админ!');
            this.response.setButtons(Keyboard.admin_start);
        } else {
            if (user == null) {
                this.response.send('Желаешь зарегистрироваться?');
                this.response.setButtons('ДА!!!');
            } else {
                if (!user.info.acceptStatus) {
                    this.response.send('Ваша заявка ещё на рассмотрении');
                    this.response.setButtons(Keyboard.waiting_room)
                } else {
                    this.response.send('Поздравляю, вас приняли на курс');
                    this.response.setButtons(Keyboard.yeah);
                }
                // this.response.send('Уже зарегистрирован');
            }
        }

        // else if (userIsAdmin) {
        //     this.response.send('Здравствуй админушака!');
        //     this.response.setButtons(['Показать зарегистрированых', 'Показать участников']);
        // }
    }

    async answer() {
        switch (this.request.text) {
            case Keyboard.register: {
                createUser(this);

                return registration_type_name;
            }
            case Keyboard.waiting_room:
            case Keyboard.yeah: {
                return registration_waiting_room;
            }
            case Keyboard.admin_start: {
                return admin_menu;
            }
            default:
                throw new Error('Данный запрос не может быть обработан');
            // case Keyboard.showRegistratedUsers:
            //     return admin_show_registrated;
            // case Keyboard.showAcceptedUsers:
            // // return admin_show_accepted;
        }
    }
}