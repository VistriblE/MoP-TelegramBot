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
        return yield tableUsers.insert({ telegramID }).run(connect);
    });
}
exports.createUser = createUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBS0EsK0JBQTBCO0FBRTFCLCtCQUEwQjtBQUUxQixxQkFBa0MsTUFBOEI7O1FBQzVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUFBO0FBRkQsa0NBRUM7QUFFRCwwQkFBdUMsTUFBOEI7O1FBQ2pFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUFBO0FBRkQsNENBRUM7QUFFRCxvQkFBaUMsTUFBOEI7O1FBQzNELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDNUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUVoRCxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQztDQUFBO0FBTkQsZ0NBTUMifQ==