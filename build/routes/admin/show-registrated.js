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
var Keyboard;
(function (Keyboard) {
    Keyboard["back"] = "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u043D\u044E";
    Keyboard["deny"] = "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u043A\u043E\u0433\u043E-\u0442\u043E";
    Keyboard["accept_all"] = "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0432\u0441\u0435\u0445";
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield module_1.getUsersArray(this);
            for (let i = 0; i < users.length; i++) {
                if (users[i].info.finishedRegistration && !users[i].info.acceptStatus) {
                    yield module_1.getUserInfo(this, users[i]);
                }
            }
            this.response.send('Что будем с ними делать?');
            this.response.setButtons([Keyboard.accept_all, Keyboard.deny, Keyboard.back]);
        });
    }
    answer() {
        switch (this.request.text) {
            case Keyboard.accept_all: {
                return module_1.admin_accept_all;
            }
            case Keyboard.deny: {
                return module_1.admin_deny;
            }
            case Keyboard.back: {
                return module_1.admin_menu;
            }
            default: {
                throw new Error('Невозможно обработать данный запрос');
            }
        }
    }
}
default_1.id = module_1.admin_show_registrated;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1yZWdpc3RyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2FkbWluL3Nob3ctcmVnaXN0cmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUd6RCxxQ0FRa0I7QUFFbEIsSUFBSyxRQUlKO0FBSkQsV0FBSyxRQUFRO0lBQ1QsMkdBQXlCLENBQUE7SUFDekIsaUhBQTBCLENBQUE7SUFDMUIsOEZBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUpJLFFBQVEsS0FBUixRQUFRLFFBSVo7QUFFRCxlQUFxQixTQUFRLDhCQUFjO0lBR2pDLFFBQVE7O1lBQ1YsTUFBTSxLQUFLLEdBQVcsTUFBTSxzQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLG9CQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQztLQUFBO0lBRUQsTUFBTTtRQUNGLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLHlCQUFnQixDQUFDO1lBQzVCLENBQUM7WUFDRCxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxDQUFDLG1CQUFVLENBQUM7WUFDdEIsQ0FBQztZQUNELEtBQUssUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsbUJBQVUsQ0FBQztZQUN0QixDQUFDO1lBQ0QsU0FBUyxDQUFDO2dCQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7O0FBNUJlLFlBQUUsR0FBRywrQkFBc0IsQ0FBQztBQURoRCw0QkE4QkMifQ==