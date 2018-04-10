import { TelegramAction } from '@jace1995/telegram-lite';
import { Config, UserInfo, User } from '../module';

export * from '../module';

export function setProperties(action: TelegramAction<Config>, properties: UserInfo) {
    const telegramID = action.request.user.id;
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    return tableUsers.filter(<User>{ telegramID }).update(<User>{ info: properties }).run(connect);
}

export function checkPhoneNumber(phoneNumber: string) {

    return /^\+?375(29|44|33|25)\d{7}$/.test(phoneNumber);
}

export async function getUserStatus(action: TelegramAction<Config>) {
    const telegramID = action.request.user.id;
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    const cursor = await tableUsers.filter(<User>{ telegramID }).run(connect);
    const users: User[] = await cursor.toArray();

    return users[0].info.acceptStatus;
}