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
        this.response.send('Чего ты ожидаешь от обучения?');
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield module_1.setProperties(this, { expectations: this.request.text });
            this.response.send('Ваша заявка принята на рассмотрение');
            return module_1.registration_waiting_room;
        });
    }
}
default_1.id = module_1.registration_type_expectations;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1leHBlY3RhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9yZWdpc3RyYXRpb24vdHlwZS1leHBlY3RhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUV6RCxxQ0FLa0I7QUFFbEIsZUFBcUIsU0FBUSw4QkFBYztJQUV2QyxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUssTUFBTTs7WUFDUixNQUFNLHNCQUFhLENBQUMsSUFBSSxFQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxrQ0FBeUIsQ0FBQztRQUNyQyxDQUFDO0tBQUE7O0FBVGUsWUFBRSxHQUFHLHVDQUE4QixDQUFDO0FBRHhELDRCQVdDIn0=