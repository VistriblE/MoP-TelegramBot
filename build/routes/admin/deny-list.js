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
// enum Keyboard {
//     show_list_again = 'Вывести список снова',
//     back = 'Хватит с меня',
// }
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        return __awaiter(this, void 0, void 0, function* () {
            this.response.send('Что они уже натворили?');
            this.response.setButtons(yield module_1.denyUsersList(this));
        });
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.request.text != 'Ладно, оставим их') {
                yield module_1.deleteUser(this.request.text, this);
                this.response.send('Отчислен! Удалён! Убит!');
                return module_1.admin_deny;
                // this.response.setButtons([Keyboard.show_list_again, Keyboard.back]);
            }
            else {
                return module_1.admin_menu;
            }
        });
    }
}
default_1.id = module_1.admin_deny;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVueS1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvYWRtaW4vZGVueS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFFekQscUNBTWtCO0FBRWxCLGtCQUFrQjtBQUNsQixnREFBZ0Q7QUFDaEQsOEJBQThCO0FBQzlCLElBQUk7QUFFSixlQUFxQixTQUFRLDhCQUFjO0lBR2pDLFFBQVE7O1lBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLHNCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxtQkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsbUJBQVUsQ0FBQztnQkFDbEIsdUVBQXVFO1lBQzNFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsbUJBQVUsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQztLQUFBOztBQWhCZSxZQUFFLEdBQUcsbUJBQVUsQ0FBQztBQURwQyw0QkFrQkMifQ==