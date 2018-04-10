"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_lite_1 = require("@jace1995/telegram-lite");
const registration = require("./registration");
const admin = require("./admin");
const start_1 = require("./start");
const menu_1 = require("./menu");
exports.default = telegram_lite_1.assignActions([
    start_1.default,
    menu_1.default,
    registration.type_name,
    registration.type_second_name,
    registration.check_university,
    registration.type_course,
    registration.type_group,
    registration.type_phone_number,
    registration.waiting_room,
    registration.type_expectations,
    admin.menu,
    admin.show_registrated,
    admin.accept_all,
    admin.deny,
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF3RDtBQUV4RCwrQ0FBK0M7QUFDL0MsaUNBQWdDO0FBQ2hDLG1DQUE0QjtBQUM1QixpQ0FBMEI7QUFFMUIsa0JBQWUsNkJBQWEsQ0FBQztJQUN6QixlQUFLO0lBQ0wsY0FBSTtJQUNKLFlBQVksQ0FBQyxTQUFTO0lBQ3RCLFlBQVksQ0FBQyxnQkFBZ0I7SUFDN0IsWUFBWSxDQUFDLGdCQUFnQjtJQUM3QixZQUFZLENBQUMsV0FBVztJQUN4QixZQUFZLENBQUMsVUFBVTtJQUN2QixZQUFZLENBQUMsaUJBQWlCO0lBQzlCLFlBQVksQ0FBQyxZQUFZO0lBQ3pCLFlBQVksQ0FBQyxpQkFBaUI7SUFFOUIsS0FBSyxDQUFDLElBQUk7SUFDVixLQUFLLENBQUMsZ0JBQWdCO0lBQ3RCLEtBQUssQ0FBQyxVQUFVO0lBQ2hCLEtBQUssQ0FBQyxJQUFJO0NBQ2IsQ0FBQyxDQUFDIn0=