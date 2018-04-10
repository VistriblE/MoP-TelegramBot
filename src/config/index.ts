import { TelegramBot } from '@jace1995/telegram-lite/src';
import * as rethinkdb from 'rethinkdb';

export interface Config {
    readonly db: {
        readonly table: {
            readonly users: rethinkdb.Table
        };
        readonly connection: any;
    };
    // readonly telegramBot: TelegramBot;
    // readonly discordBot;
}

export async function createConfig(): Promise<Config> {
    return {
        db: {
            table: {
                users: rethinkdb.db('Telegram_Bot').table('users'),
            },
            connection: await rethinkdb.connect('127.0.0.1'),
        },
    };
}