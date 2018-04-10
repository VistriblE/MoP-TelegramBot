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
    Keyboard["register"] = "\u0414\u0410!!!";
    Keyboard["waiting_room"] = "Ok";
    Keyboard["admin_start"] = "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044E!";
    Keyboard["yeah"] = "\u0423\u0440\u0430\u0430\u0430!";
    // showRegistratedUsers = 'Показать зарегистрированых',
    // showAcceptedUsers = 'Показать участников'
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield module_1.findUser(this);
            console.log(`user: ${user}`);
            if (this.request.user.id == '392321375') {
                this.response.send('Привет, Админ!');
                this.response.setButtons(Keyboard.admin_start);
            }
            else {
                if (user == null) {
                    this.response.send('Желаешь зарегистрироваться?');
                    this.response.setButtons('ДА!!!');
                }
                else {
                    if (!user.info.acceptStatus) {
                        this.response.send('Ваша заявка ещё на рассмотрении');
                        this.response.setButtons(Keyboard.waiting_room);
                    }
                    else {
                        this.response.send('Поздравляю, вас приняли на курс');
                        this.response.setButtons(Keyboard.yeah);
                    }
                    // this.response.send('Уже зарегистрирован');
                }
            }
            // else if (userIsAdmin) {
            //     this.response.send('Здравствуй админушака!');
            //     this.response.setButtons(['Показать зарегистрированых', 'Показать участников']);
            // }
        });
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.request.text) {
                case Keyboard.register: {
                    module_1.createUser(this);
                    return module_1.registration_type_name;
                }
                case Keyboard.waiting_room:
                case Keyboard.yeah: {
                    return module_1.registration_waiting_room;
                }
                case Keyboard.admin_start: {
                    return module_1.admin_menu;
                }
                default:
                    throw new Error('Данный запрос не может быть обработан');
            }
        });
    }
}
default_1.id = module_1.menu;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUl6RCxxQ0FVa0I7QUFFbEIsSUFBSyxRQU9KO0FBUEQsV0FBSyxRQUFRO0lBQ1Qsd0NBQWtCLENBQUE7SUFDbEIsK0JBQW1CLENBQUE7SUFDbkIsMkdBQThCLENBQUE7SUFDOUIsb0RBQWUsQ0FBQTtJQUNmLHVEQUF1RDtJQUN2RCw0Q0FBNEM7QUFDaEQsQ0FBQyxFQVBJLFFBQVEsS0FBUixRQUFRLFFBT1o7QUFFRCxlQUFxQixTQUFRLDhCQUFjO0lBR2pDLFFBQVE7O1lBQ1YsTUFBTSxJQUFJLEdBQWdCLE1BQU0saUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO29CQUNuRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7d0JBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUMsQ0FBQztvQkFDRCw2Q0FBNkM7Z0JBQ2pELENBQUM7WUFDTCxDQUFDO1lBRUQsMEJBQTBCO1lBQzFCLG9EQUFvRDtZQUNwRCx1RkFBdUY7WUFDdkYsSUFBSTtRQUNSLENBQUM7S0FBQTtJQUVLLE1BQU07O1lBQ1IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckIsbUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFakIsTUFBTSxDQUFDLCtCQUFzQixDQUFDO2dCQUNsQyxDQUFDO2dCQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDM0IsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxrQ0FBeUIsQ0FBQztnQkFDckMsQ0FBQztnQkFDRCxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDeEIsTUFBTSxDQUFDLG1CQUFVLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0Q7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBS2pFLENBQUM7UUFDTCxDQUFDO0tBQUE7O0FBbkRlLFlBQUUsR0FBRyxhQUFJLENBQUM7QUFEOUIsNEJBcURDIn0=