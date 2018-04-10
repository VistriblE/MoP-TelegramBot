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
        this.response.send('Введи имя');
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield module_1.setProperties(this, { name: this.request.text });
            return module_1.registration_type_second_name;
        });
    }
}
default_1.id = module_1.registration_type_name;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1uYW1lLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvdGVsZWdyYW0tYm90LW5ldy9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvcmVnaXN0cmF0aW9uL3R5cGUtbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBRXpELHFDQUtrQjtBQUVsQixlQUFxQixTQUFRLDhCQUFjO0lBR3ZDLFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUssTUFBTTs7WUFDUixNQUFNLHNCQUFhLENBQUMsSUFBSSxFQUFZLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsc0NBQTZCLENBQUM7UUFDekMsQ0FBQztLQUFBOztBQVRlLFlBQUUsR0FBRywrQkFBc0IsQ0FBQztBQURoRCw0QkFXQyJ9