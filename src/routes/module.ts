import { TelegramAction } from '@jace1995/telegram-lite';
import { Config } from './module';
import { User, UserInfo } from '../models/user';
import { userInfo } from 'os';

export * from '../config';
export * from '../models';
export * from '../router';

export async function userIsAdmin(action: TelegramAction<Config>) {
    return false;
}

export async function userIsAuthorized(action: TelegramAction<Config>) {
    return false;
}

export async function createUser(action: TelegramAction<Config>) {
    const telegramID = action.request.user.id;
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    return tableUsers.insert(<User>{
        telegramID, info: {
            acceptStatus: false,
            finishedRegistration: false
        }
    }).run(connect);
}

export async function findUser(action: TelegramAction<Config>): Promise<User | null> {
    const telegramID = action.request.user.id;
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;

    const usersCursor = await tableUsers.filter(<User>{ telegramID }).run(connect);
    const users: User[] = await usersCursor.toArray();
    return users.length ? users[0] : null;
}