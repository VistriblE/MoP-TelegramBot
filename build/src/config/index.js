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
const rethinkdb = require("rethinkdb");
function createConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            db: {
                table: {
                    users: rethinkdb.db('Telegram_Bot').table('users'),
                },
                connection: yield rethinkdb.connect('127.0.0.1'),
            },
        };
    });
}
exports.createConfig = createConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy90ZWxlZ3JhbS1ib3QtbmV3L3NyYy8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVDQUF1QztBQWF2Qzs7UUFDSSxNQUFNLENBQUM7WUFDSCxFQUFFLEVBQUU7Z0JBQ0EsS0FBSyxFQUFFO29CQUNILEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ3JEO2dCQUNELFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO2FBQ25EO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FBQTtBQVRELG9DQVNDIn0=