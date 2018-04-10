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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdW5pdmVyc2l0eS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aXN0cmlibGUv0JTQvtC60YPQvNC10L3RgtGLL01hZ2ljIG9mIFByb2dyYW1taW5nL3RlbGVncmFtLWJvdC1uZXcvc3JjLyIsInNvdXJjZXMiOlsic3JjL3JvdXRlcy9yZWdpc3RyYXRpb24vY2hlY2stdW5pdmVyc2l0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUE4RTtBQUU5RSxxQ0FPa0I7QUFFbEIsSUFBSyxRQUdKO0FBSEQsV0FBSyxRQUFRO0lBQ1QsZ0NBQVUsQ0FBQTtJQUNWLHFDQUFVLENBQUE7QUFDZCxDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUVELGVBQXFCLFNBQVEsOEJBQWM7SUFHdkMsUUFBUTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDckIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE1BQU07UUFDRixvQ0FBb0M7UUFFcEMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssUUFBUSxDQUFDLEdBQUc7Z0JBQ2IsTUFBTSxDQUFDLGlDQUF3QixDQUFDO1lBRXBDLEtBQUssUUFBUSxDQUFDLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLHVDQUE4QixDQUFDO1lBRTFDO2dCQUNJLE1BQU0sSUFBSSxtQ0FBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDOztBQXRCZSxZQUFFLEdBQUcsc0NBQTZCLENBQUM7QUFEdkQsNEJBd0JDIn0=