"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_lite_1 = require("@jace1995/telegram-lite");
const module_1 = require("./module");
class default_1 extends telegram_lite_1.TelegramAction {
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            this.response.send('Добро пожаловать в Магическое сообщество!');
            const isAdmin = yield module_1.userIsAdmin(this);
            const isAuthorized = yield module_1.userIsAuthorized(this);
            if (!isAdmin && !isAuthorized) {
                return module_1.registration_type_name;
            }
            else {
                throw new Error('ЛК ещё не реализован');
            }
        });
    }
}
default_1.id = module_1.start;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUV6RCxxQ0FNa0I7QUFFbEIsZUFBcUIsU0FBUSw4QkFBYztJQUdqQyxNQUFNOztZQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFFaEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxvQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sWUFBWSxHQUFHLE1BQU0seUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsK0JBQXNCLENBQUM7WUFDbEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0wsQ0FBQztLQUFBOztBQWJlLFlBQUUsR0FBRyxjQUFLLENBQUM7QUFEL0IsNEJBZUMifQ==