import { TelegramAction } from '@jace1995/telegram-lite';
import { Config, UserInfo, User } from '../module';
import { setProperties } from '../registration/module';

export * from '../module';

export async function getUsersArray(action: TelegramAction<Config>) {
    const telegramID = action.request.user.id;
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    const cursor = await tableUsers.run(connect);
    const users: User[] = await cursor.toArray();
    return users;
}

export function getUserInfo(action: TelegramAction<Config>, user: User) {
    action.response.send(`${user.info.name} ${user.info.surName}\n${user.info.phoneNumber}${
        user.info.bsuir ? `\nКурс: ${user.info.bsuir.course} | Группа: ${user.info.bsuir.group}` : ''
        }\nОжидания: ${user.info.expectations}`);
}

export async function acceptAll(action: TelegramAction<Config>) {
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    const cursor = await tableUsers.run(connect);
    const users: User[] = await cursor.toArray();

    for (let i = 0; i < users.length; i++) {
        if (users[i].info.finishedRegistration) {
            await tableUsers.filter(<User>{ telegramID: users[i].telegramID })
                .update(<User>{ info: { acceptStatus: true } }).run(connect);
        }
    }
}

export async function denyUsersList(action: TelegramAction<Config>) {
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    const cursor = await tableUsers.run(connect);
    const users: User[] = await cursor.toArray();
    let usernames: string[] = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].info.finishedRegistration == true && !users[i].info.acceptStatus) {
            usernames.push(`${users[i].info.phoneNumber} (${users[i].info.name} ${users[i].info.surName})`);
        }
    }
    usernames.push('Ладно, оставим их');
    console.log(usernames);
    return usernames;
}

export async function deleteUser(str: string, action: TelegramAction<Config>) {
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    const numberPos = str.indexOf(' ');
    const userPhoneNumber = str.slice(0, numberPos);
    const userCursor = await tableUsers.filter(<User>{ info: { phoneNumber: userPhoneNumber } }).delete()
        .run(connect);
}