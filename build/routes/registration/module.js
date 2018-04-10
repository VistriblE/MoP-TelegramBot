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
function setProperties(action, properties) {
    const telegramID = action.request.user.id;
    const connect = action.config.db.connection;
    const tableUsers = action.config.db.table.users;
    return tableUsers.filter({ telegramID }).update({ info: properties }).run(connect);
}
exports.setProperties = setProperties;
function checkPhoneNumber(phoneNumber) {
    return /^\+?375(29|44|33|25)\d{7}$/.test(phoneNumber);
}
exports.checkPhoneNumber = checkPhoneNumber;
function getUserStatus(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const telegramID = action.request.user.id;
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        const cursor = yield tableUsers.filter({ telegramID }).run(connect);
        const users = yield cursor.toArray();
        return users[0].info.acceptStatus;
    });
}
exports.getUserStatus = getUserStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvcmVnaXN0cmF0aW9uL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsK0JBQTBCO0FBRTFCLHVCQUE4QixNQUE4QixFQUFFLFVBQW9CO0lBQzlFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDNUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUVoRCxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25HLENBQUM7QUFORCxzQ0FNQztBQUVELDBCQUFpQyxXQUFtQjtJQUVoRCxNQUFNLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFIRCw0Q0FHQztBQUVELHVCQUFvQyxNQUE4Qjs7UUFDOUQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRWhELE1BQU0sTUFBTSxHQUFHLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLE1BQU0sS0FBSyxHQUFXLE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN0QyxDQUFDO0NBQUE7QUFURCxzQ0FTQyJ9