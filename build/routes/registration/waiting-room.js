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
    Keyboard["check_status"] = "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435";
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        this.response.send('Проверить текущее состояние?');
        this.response.setButtons(Keyboard.check_status);
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.request.text) {
                case Keyboard.check_status: {
                    if (yield module_1.getUserStatus(this)) {
                        this.response.send('Поздравляю, вас приняли на курс');
                        return this.id;
                    }
                    else {
                        this.response.send('Ваша заявка ещё на рассмотрении');
                        return module_1.registration_waiting_room;
                    }
                }
                default: {
                    throw new Error('Невозможно обработать данный запрос');
                }
            }
        });
    }
}
default_1.id = module_1.registration_waiting_room;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZy1yb29tLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvcmVnaXN0cmF0aW9uL3dhaXRpbmctcm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBRXpELHFDQU1rQjtBQUVsQixJQUFLLFFBRUo7QUFGRCxXQUFLLFFBQVE7SUFDVCxxTEFBNEMsQ0FBQTtBQUNoRCxDQUFDLEVBRkksUUFBUSxLQUFSLFFBQVEsUUFFWjtBQUVELGVBQXFCLFNBQVEsOEJBQWM7SUFHdkMsUUFBUTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBELENBQUM7SUFFSyxNQUFNOztZQUNSLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sc0JBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7d0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNuQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7d0JBQ3RELE1BQU0sQ0FBQyxrQ0FBeUIsQ0FBQztvQkFDckMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELFNBQVMsQ0FBQztvQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7Z0JBQzNELENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztLQUFBOztBQXZCZSxZQUFFLEdBQUcsa0NBQXlCLENBQUM7QUFEbkQsNEJBeUJDIn0=