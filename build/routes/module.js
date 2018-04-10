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
__export(require("../config"));
__export(require("../router"));
function userIsAdmin(action) {
    return __awaiter(this, void 0, void 0, function* () {
        return false;
    });
}
exports.userIsAdmin = userIsAdmin;
function userIsAuthorized(action) {
    return __awaiter(this, void 0, void 0, function* () {
        return false;
    });
}
exports.userIsAuthorized = userIsAuthorized;
function createUser(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const telegramID = action.request.user.id;
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        return tableUsers.insert({
            telegramID, info: {
                acceptStatus: false,
                finishedRegistration: false
            }
        }).run(connect);
    });
}
exports.createUser = createUser;
function findUser(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const telegramID = action.request.user.id;
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        const usersCursor = yield tableUsers.filter({ telegramID }).run(connect);
        const users = yield usersCursor.toArray();
        return users.length ? users[0] : null;
    });
}
exports.findUser = findUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSwrQkFBMEI7QUFFMUIsK0JBQTBCO0FBRTFCLHFCQUFrQyxNQUE4Qjs7UUFDNUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQUE7QUFGRCxrQ0FFQztBQUVELDBCQUF1QyxNQUE4Qjs7UUFDakUsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQUE7QUFGRCw0Q0FFQztBQUVELG9CQUFpQyxNQUE4Qjs7UUFDM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFPO1lBQzNCLFVBQVUsRUFBRSxJQUFJLEVBQUU7Z0JBQ2QsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLG9CQUFvQixFQUFFLEtBQUs7YUFDOUI7U0FDSixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FBQTtBQVhELGdDQVdDO0FBRUQsa0JBQStCLE1BQThCOztRQUN6RCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzVDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFaEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0UsTUFBTSxLQUFLLEdBQVcsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7Q0FBQTtBQVJELDRCQVFDIn0=