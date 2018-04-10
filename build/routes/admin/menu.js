"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_lite_1 = require("@jace1995/telegram-lite");
const module_1 = require("./module");
var Keyboard;
(function (Keyboard) {
    Keyboard["show_registrated_users"] = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445";
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        this.response.send('Что будем делать?');
        this.response.setButtons(Keyboard.show_registrated_users);
    }
    answer() {
        switch (this.request.text) {
            case Keyboard.show_registrated_users: {
                return module_1.admin_show_registrated;
            }
            default: {
                throw new Error('Данный запрос не может быть обработан');
            }
        }
    }
}
default_1.id = module_1.admin_menu;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2FkbWluL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBeUQ7QUFFekQscUNBSWtCO0FBRWxCLElBQUssUUFFSjtBQUZELFdBQUssUUFBUTtJQUNULG9NQUFzRCxDQUFBO0FBQzFELENBQUMsRUFGSSxRQUFRLEtBQVIsUUFBUSxRQUVaO0FBRUQsZUFBcUIsU0FBUSw4QkFBYztJQUd2QyxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsK0JBQXNCLENBQUM7WUFDbEMsQ0FBQztZQUNELFNBQVMsQ0FBQztnQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDOztBQWhCZSxZQUFFLEdBQUcsbUJBQVUsQ0FBQztBQURwQyw0QkFrQkMifQ==