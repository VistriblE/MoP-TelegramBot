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
//import { admin_show_registrated } from '../router';
const module_1 = require("./module");
var Keyboard;
(function (Keyboard) {
    Keyboard["register"] = "\u0414\u0410!!!";
    // showRegistratedUsers = 'Показать зарегистрированых',
    // showAcceptedUsers = 'Показать участников'
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!module_1.userIsAdmin && !module_1.userIsAuthorized) {
                this.response.send('Желаешь зарегистрироваться?');
                this.response.setButtons('ДА!!!');
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
                default:
                    return this.id;
            }
        });
    }
}
default_1.id = module_1.menu;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsic3JjL3JvdXRlcy9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQscURBQXFEO0FBRXJELHFDQU9rQjtBQUVsQixJQUFLLFFBSUo7QUFKRCxXQUFLLFFBQVE7SUFDVCx3Q0FBa0IsQ0FBQTtJQUNsQix1REFBdUQ7SUFDdkQsNENBQTRDO0FBQ2hELENBQUMsRUFKSSxRQUFRLEtBQVIsUUFBUSxRQUlaO0FBRUQsZUFBcUIsU0FBUSw4QkFBYztJQUdqQyxRQUFROztZQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQVcsSUFBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELDBCQUEwQjtZQUMxQixvREFBb0Q7WUFDcEQsdUZBQXVGO1lBQ3ZGLElBQUk7UUFDUixDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNSLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLG1CQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRWpCLE1BQU0sQ0FBQywrQkFBc0IsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQU12QixDQUFDO1FBQ0wsQ0FBQztLQUFBOztBQTVCZSxZQUFFLEdBQUcsYUFBSSxDQUFDO0FBRDlCLDRCQThCQyJ9