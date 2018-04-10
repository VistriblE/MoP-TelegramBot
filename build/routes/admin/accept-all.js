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
    Keyboard["back"] = "\u041D\u0430\u0437\u0430\u0434 \u0432 \u043C\u0435\u043D\u044E";
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        return __awaiter(this, void 0, void 0, function* () {
            yield module_1.acceptAll(this);
            this.response.send('Все приняты');
            this.response.send('Что дальше?');
            this.response.setButtons(Keyboard.back);
        });
    }
    answer() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.request.text) {
                case Keyboard.back: {
                    return module_1.admin_menu;
                }
                default: {
                    throw new Error('Данный запрос не может быть обработан');
                }
            }
        });
    }
}
default_1.id = module_1.admin_accept_all;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXB0LWFsbC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2FkbWluL2FjY2VwdC1hbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUV6RCxxQ0FJa0I7QUFFbEIsSUFBSyxRQUVKO0FBRkQsV0FBSyxRQUFRO0lBQ1QsbUZBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUZJLFFBQVEsS0FBUixRQUFRLFFBRVo7QUFFRCxlQUFxQixTQUFRLDhCQUFjO0lBR2pDLFFBQVE7O1lBQ1YsTUFBTSxrQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNSLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxtQkFBVSxDQUFDO2dCQUN0QixDQUFDO2dCQUNELFNBQVMsQ0FBQztvQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0JBQzdELENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztLQUFBOztBQWxCZSxZQUFFLEdBQUcseUJBQWdCLENBQUM7QUFEMUMsNEJBb0JDIn0=