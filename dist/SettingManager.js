"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var SettingManager = /** @class */ (function () {
    function SettingManager() {
    }
    SettingManager.getSetting = function (name) {
        //settings read from .env file at root of project 
        return process.env[name];
    };
    return SettingManager;
}());
exports.SettingManager = SettingManager;
//# sourceMappingURL=SettingManager.js.map