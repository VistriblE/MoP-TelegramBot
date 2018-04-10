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
        this.response.send('В какой группе?');
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield module_1.setProperties(this, { bsuir: { group: this.request.text } });
            return module_1.registration_type_phone_number;
        });
    }
}
default_1.id = module_1.registration_type_group;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsic3JjL3JvdXRlcy9yZWdpc3RyYXRpb24vdHlwZS1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBRXpELHFDQUtrQjtBQUVsQixlQUFxQixTQUFRLDhCQUFjO0lBR3ZDLFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSyxNQUFNOztZQUNSLE1BQU0sc0JBQWEsQ0FBQyxJQUFJLEVBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0UsTUFBTSxDQUFDLHVDQUE4QixDQUFDO1FBQzFDLENBQUM7S0FBQTs7QUFUZSxZQUFFLEdBQUcsZ0NBQXVCLENBQUM7QUFEakQsNEJBV0MifQ==