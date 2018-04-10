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
    question() {
        this.response.send('Введи номер телефона');
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (module_1.checkPhoneNumber(this.request.text)) {
                yield module_1.setProperties(this, { phoneNumber: this.request.text });
                return module_1.menu;
            }
            else {
                throw new Error('Вы ввели неверный номер, повторите ввод!');
            }
        });
    }
}
default_1.id = module_1.registration_type_phone_number;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1waG9uZS1udW1iZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvcmVnaXN0cmF0aW9uL3R5cGUtcGhvbmUtbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFFekQscUNBTWtCO0FBRWxCLGVBQXFCLFNBQVEsOEJBQWM7SUFHdkMsUUFBUTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVLLE1BQU07O1lBQ1IsRUFBRSxDQUFDLENBQUMseUJBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sc0JBQWEsQ0FBQyxJQUFJLEVBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxNQUFNLENBQUMsYUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDaEUsQ0FBQztRQUNMLENBQUM7S0FBQTs7QUFiZSxZQUFFLEdBQUcsdUNBQThCLENBQUM7QUFEeEQsNEJBZUMifQ==