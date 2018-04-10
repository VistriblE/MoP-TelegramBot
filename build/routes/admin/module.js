"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../module"));
function getUsersArray(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const telegramID = action.request.user.id;
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        const cursor = yield tableUsers.run(connect);
        const users = yield cursor.toArray();
        return users;
    });
}
exports.getUsersArray = getUsersArray;
function getUserInfo(action, user) {
    action.response.send(`${user.info.name} ${user.info.surName}\n${user.info.phoneNumber}${user.info.bsuir ? `\nКурс: ${user.info.bsuir.course} | Группа: ${user.info.bsuir.group}` : ''}\nОжидания: ${user.info.expectations}`);
}
exports.getUserInfo = getUserInfo;
function acceptAll(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        const cursor = yield tableUsers.run(connect);
        const users = yield cursor.toArray();
        for (let i = 0; i < users.length; i++) {
            if (users[i].info.finishedRegistration) {
                yield tableUsers.filter({ telegramID: users[i].telegramID })
                    .update({ info: { acceptStatus: true } }).run(connect);
            }
        }
    });
}
exports.acceptAll = acceptAll;
function denyUsersList(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        const cursor = yield tableUsers.run(connect);
        const users = yield cursor.toArray();
        let usernames = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].info.finishedRegistration == true && !users[i].info.acceptStatus) {
                usernames.push(`${users[i].info.phoneNumber} (${users[i].info.name} ${users[i].info.surName})`);
            }
        }
        usernames.push('Ладно, оставим их');
        console.log(usernames);
        return usernames;
    });
}
exports.denyUsersList = denyUsersList;
function deleteUser(str, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        const numberPos = str.indexOf(' ');
        const userPhoneNumber = str.slice(0, numberPos);
        const userCursor = yield tableUsers.filter({ info: { phoneNumber: userPhoneNumber } }).delete()
            .run(connect);
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvYWRtaW4vbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJQSwrQkFBMEI7QUFFMUIsdUJBQW9DLE1BQThCOztRQUM5RCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzVDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFaEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFXLE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUFBO0FBUkQsc0NBUUM7QUFFRCxxQkFBNEIsTUFBOEIsRUFBRSxJQUFVO0lBQ2xFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDM0YsZUFBZSxJ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