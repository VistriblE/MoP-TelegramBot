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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3Rlc3RfcmVnLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL190ZXN0X3JlZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7QUFDNUQsdUNBQXVDO0FBQ3ZDLDJEQUEyRDtBQUMzRCxtREFBbUQ7QUFDbkQsc0NBQXNDO0FBRXRDLHNFQUFzRTtBQUN0RSxrREFBa0Q7QUFDbEQsOENBQThDO0FBRTlDLG9GQUFvRjtBQUNwRix5REFBeUQ7QUFDekQsNkNBQTZDO0FBQzdDLElBQUk7QUFFSixzRUFBc0U7QUFDdEUsb0RBQW9EO0FBRXBELDRDQUE0QztBQUM1QyxtREFBbUQ7QUFDbkQsNkRBQTZEO0FBQzdELGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YsOEJBQThCO0FBQzlCLDRDQUE0QztBQUM1QyxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ2hELG1CQUFtQjtBQUNuQixvRUFBb0U7QUFDcEUsbUNBQW1DO0FBQ25DLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUVKLHdGQUF3RjtBQUN4RiwyQ0FBMkM7QUFDM0Msc0NBQXNDO0FBQ3RDLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFDUixJQUFJO0FBRUosa0ZBQWtGO0FBQ2xGLDhFQUE4RTtBQUM5RSxzQ0FBc0M7QUFDdEMsOENBQThDO0FBQzlDLElBQUk7QUFFSiw4RkFBOEY7QUFDOUYsaUZBQWlGO0FBQ2pGLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsbURBQW1EO0FBQ25ELElBQUk7QUFFSixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QixnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsMERBQTBEO0FBQzFELHVEQUF1RDtBQUN2RCxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLGdEQUFnRDtBQUNoRCxvREFBb0Q7QUFDcEQsMkRBQTJEO0FBQzNELFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUVKLHlGQUF5RjtBQUN6RiwyRkFBMkY7QUFDM0Ysd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxJQUFJO0FBRUosd0ZBQXdGO0FBQ3hGLDBGQUEwRjtBQUMxRixrREFBa0Q7QUFDbEQsK0NBQStDO0FBQy9DLElBQUk7QUFFSiwrRUFBK0U7QUFDL0UsbUVBQW1FO0FBQ25FLGlFQUFpRTtBQUNqRSxRQUFRO0FBRVIsK0NBQStDO0FBQy9DLHlGQUF5RjtBQUN6RiwwREFBMEQ7QUFDMUQsbURBQW1EO0FBQ25ELGVBQWU7QUFDZiwrREFBK0Q7QUFDL0QsbURBQW1EO0FBQ25ELFFBQVE7QUFDUixJQUFJO0FBRUosK0VBQStFO0FBQy9FLHNGQUFzRjtBQUN0RiwyRUFBMkU7QUFDM0UsdUVBQXVFO0FBQ3ZFLDREQUE0RDtBQUM1RCwyQkFBMkI7QUFDM0IsSUFBSSJ9