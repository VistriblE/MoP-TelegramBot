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
            return module_1.menu;
        });
    }
}
default_1.id = module_1.start;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBRXpELHFDQU1rQjtBQUVsQixlQUFxQixTQUFRLDhCQUFjO0lBR2pDLE1BQU07O1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsYUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTs7QUFMZSxZQUFFLEdBQUcsY0FBSyxDQUFDO0FBRC9CLDRCQU9DIn0=