"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_lite_1 = require("@jace1995/telegram-lite");
const registration = require("./registration");
const start_1 = require("./start");
exports.default = telegram_lite_1.assignActions([
    start_1.default,
    registration.type_name,
    registration.type_second_name,
    registration.check_university,
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBd0Q7QUFFeEQsK0NBQStDO0FBQy9DLG1DQUE0QjtBQUU1QixrQkFBZSw2QkFBYSxDQUFDO0lBQ3pCLGVBQUs7SUFDTCxZQUFZLENBQUMsU0FBUztJQUN0QixZQUFZLENBQUMsZ0JBQWdCO0lBQzdCLFlBQVksQ0FBQyxnQkFBZ0I7Q0FDaEMsQ0FBQyxDQUFDIn0=