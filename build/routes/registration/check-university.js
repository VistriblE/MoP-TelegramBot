"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_lite_1 = require("@jace1995/telegram-lite");
const module_1 = require("./module");
var Keyboard;
(function (Keyboard) {
    Keyboard["yes"] = "\u0414\u0430";
    Keyboard["no"] = "\u041D\u0435\u0442";
})(Keyboard || (Keyboard = {}));
class default_1 extends telegram_lite_1.TelegramAction {
    question() {
        this.response.send('Учишься в БГУИРе?');
        this.response.setButtons([
            [Keyboard.yes, Keyboard.no]
        ]);
    }
    answer() {
        // return registration_start; //test
        switch (this.request.text) {
            case Keyboard.yes:
                return module_1.registration_type_course;
            case Keyboard.no:
                return module_1.registration_type_phone_number;
            default:
                throw new telegram_lite_1.ActionNotFoundError(this.request.text);
        }
    }
}
default_1.id = module_1.registration_check_university;
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdW5pdmVyc2l0eS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3JlZ2lzdHJhdGlvbi9jaGVjay11bml2ZXJzaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQThFO0FBRTlFLHFDQU9rQjtBQUVsQixJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCxnQ0FBVSxDQUFBO0lBQ1YscUNBQVUsQ0FBQTtBQUNkLENBQUMsRUFISSxRQUFRLEtBQVIsUUFBUSxRQUdaO0FBRUQsZUFBcUIsU0FBUSw4QkFBYztJQUd2QyxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNyQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUM5QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTTtRQUNGLG9DQUFvQztRQUVwQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDYixNQUFNLENBQUMsaUNBQXdCLENBQUM7WUFFcEMsS0FBSyxRQUFRLENBQUMsRUFBRTtnQkFDWixNQUFNLENBQUMsdUNBQThCLENBQUM7WUFFMUM7Z0JBQ0ksTUFBTSxJQUFJLG1DQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7O0FBdEJlLFlBQUUsR0FBRyxzQ0FBNkIsQ0FBQztBQUR2RCw0QkF3QkMifQ==