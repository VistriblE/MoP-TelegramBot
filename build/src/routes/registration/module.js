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
    return __awaiter(this, void 0, void 0, function* () {
        const telegramID = action.request.user.id;
        const connect = action.config.db.connection;
        const tableUsers = action.config.db.table.users;
        return yield tableUsers.filter({ telegramID }).update({ info: properties }).run(connect);
    });
}
exports.setProperties = setProperties;
function checkPhoneNumber(phoneNumber) {
    return /^\+?375(29|44|33|25)\d{7}$/.test(phoneNumber);
}
exports.checkPhoneNumber = checkPhoneNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL3JlZ2lzdHJhdGlvbi9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtCQUEwQjtBQUUxQix1QkFBb0MsTUFBOEIsRUFBRSxVQUFvQjs7UUFDcEYsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RyxDQUFDO0NBQUE7QUFORCxzQ0FNQztBQUVELDBCQUFpQyxXQUFtQjtJQUVoRCxNQUFNLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFIRCw0Q0FHQyJ9