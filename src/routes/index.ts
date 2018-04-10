import { assignActions } from '@jace1995/telegram-lite';

import * as registration from './registration';
import * as admin from './admin'
import start from './start';
import menu from './menu';

export default assignActions([
    start,
    menu,
    registration.type_name,
    registration.type_second_name,
    registration.check_university,
    registration.type_course,
    registration.type_group,
    registration.type_phone_number,
    registration.waiting_room,
    registration.type_expectations,

    admin.menu,
    admin.show_registrated,
    admin.accept_all,
    admin.deny,
]);