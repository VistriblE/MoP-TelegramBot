// import { TelegramAction } from '@jace1995/telegram-lite';
// import * as routes from '../routes';
// import { setProperties } from '../helpers/registration';
// import { User, UserInfo } from '../models/user';
// import { config } from '../config';

// async function findUser(telegramID: string): Promise<User | null> {
//     const tableUsers = config().db.table.users;
//     const connect = config().db.connection;

//     const usersCursor = await tableUsers.filter(<User>{telegramID}).run(connect);
//     const users: User[] = await usersCursor.toArray();
//     return users.length ? users[0] : null;
// }

// export const start: TelegramAction = async (request, response) => {
//     const user = await findUser(request.user.id);
    
//     if (request.user.id == '392321375') {
//         response.send('Здравствуй, админушка!');
//         response.setButtons('Показать зарегистрированых');
//         return routes.admin_show_registrated;
//     } else {
//         if (user == null) {
//             response.send('зарегайся!'); 
//             response.setButtons('Регистрация');
//             return routes.registration_start;
//         } else {
//             response.setButtons(['Я ничего не делаю', 'Я тоже']);
//             return routes.start;
//         }
//     }
// }

// export const registration_start: TelegramAction = async function(request, response) {
//     if (request.text == 'Регистрация') {
//         response.send('Введи имя');
//         return routes.registration_type_name;
//     } else {
//         return null;
//     }
// }

// export const registration_name: TelegramAction = async (request, response) => {
//     await setProperties(request.user.id, <UserInfo>{ name: request.text });
//     response.send('Введи фамилию');
//     return routes.registration_second_name;
// }

// export const registration_second_name: TelegramAction = async function(request, response) {
//     await setProperties(request.user.id, <UserInfo>{ surName: request.text });
//     response.send('Учишься в БГУИРе?');
//     response.setButtons([['Да', 'Нет']]);
//     return routes.registration_check_university;
// }

// export const registration_check_university: TelegramAction = async function(request, response) {
//     switch (request.text) {
//         case 'Да': {
//             response.send('На каком курсе?');
//             return routes.registration_course;
//         }
//         case 'Нет': {
//             response.send('Введи свой номер телефона');
//             return routes.registration_phone_number;
//         }
//         default: {
//             response.send('Не пиши ерунды!');
//             response.setButtons([['Да', 'Нет']]);
//             return routes.registration_check_university;
//         }
//     }
// }

// export const registration_course: TelegramAction = async function(request, response) {
//     await setProperties(request.user.id, <UserInfo>{ bsuir: { course: request.text } });
//     response.send('В какой группе?');
//     return routes.registration_group;
// }

// export const registration_group: TelegramAction = async function(request, response) {
//     await setProperties(request.user.id, <UserInfo>{ bsuir: { group: request.text } });
//     response.send('Введи свой номер телефона');
//     return routes.registration_phone_number;
// }

// export const registration_phone_number = async function(request, response) {
//     function validatePhoneNumber(phoneNumber: string): boolean {
//         return /^\+?375(29|44|33|25)\d{7}$/.test(phoneNumber);
//     }
    
//     if (validatePhoneNumber(request.text)) {
//         await setProperties(request.user.id, <UserInfo>{ phoneNumber: request.text });
//         response.send('Чего ты ожидаешь от обучения?');
//         return routes.registration_expectations;
//     } else {
//         response.send('Введи корректный номер телефона!!!');
//         return routes.registration_phone_number;
//     }
// }

// export const registration_expectations = async function(request, response) {
//     await setProperties(request.user.id, <UserInfo>{ expectations: request.text });
//     response.send('Регистрация окончена, ждите ответа администратора!');
//     response.send('Можешь побаловаться с бесполезными кнопками :)');
//     response.setButtons(['Я ничего не делаю', 'Я тоже']);
//     return routes.start;
// }