"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color["Yellow"] = "Y";
    Color["Blue"] = "B";
    Color["White"] = "W";
    Color["Green"] = "G";
    Color["Red"] = "R";
    Color["Orange"] = "O";
})(Color = exports.Color || (exports.Color = {}));
var EnumUtilities = /** @class */ (function () {
    function EnumUtilities() {
    }
    EnumUtilities.getColor = function (val) {
        if (val === Color.Blue) {
            return Color.Blue;
        }
        if (val === Color.Green) {
            return Color.Green;
        }
        if (val === Color.Orange) {
            return Color.Orange;
        }
        if (val === Color.Red) {
            return Color.Red;
        }
        if (val === Color.White) {
            return Color.White;
        }
        if (val === Color.Yellow) {
            return Color.Yellow;
        }
        throw new Error("Could not parse Color from value '" + val + "'");
    };
    return EnumUtilities;
}());
exports.EnumUtilities = EnumUtilities;
var Face = /** @class */ (function () {
    function Face() {
    }
    return Face;
}());
exports.Face = Face;
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
var ConsoleColorCode;
(function (ConsoleColorCode) {
    ConsoleColorCode["Reset"] = "\u001B[0m";
    ConsoleColorCode["Bright"] = "\u001B[1m";
    ConsoleColorCode["Dim"] = "\u001B[2m";
    ConsoleColorCode["Underscore"] = "\u001B[4m";
    ConsoleColorCode["Blink"] = "\u001B[5m";
    ConsoleColorCode["Reverse"] = "\u001B[7m";
    ConsoleColorCode["Hidden"] = "\u001B[8m";
    ConsoleColorCode["FgBlack"] = "\u001B[30m";
    ConsoleColorCode["FgRed"] = "\u001B[31m";
    ConsoleColorCode["FgGreen"] = "\u001B[32m";
    ConsoleColorCode["FgYellow"] = "\u001B[33m";
    ConsoleColorCode["FgBlue"] = "\u001B[34m";
    ConsoleColorCode["FgMagenta"] = "\u001B[35m";
    ConsoleColorCode["FgCyan"] = "\u001B[36m";
    ConsoleColorCode["FgWhite"] = "\u001B[37m";
    ConsoleColorCode["BgBlack"] = "\u001B[40m";
    ConsoleColorCode["BgRed"] = "\u001B[41m";
    ConsoleColorCode["BgGreen"] = "\u001B[42m";
    ConsoleColorCode["BgYellow"] = "\u001B[43m";
    ConsoleColorCode["BgBlue"] = "\u001B[44m";
    ConsoleColorCode["BgMagenta"] = "\u001B[45m";
    ConsoleColorCode["BgCyan"] = "\u001B[46m";
    ConsoleColorCode["BgWhite"] = "\u001B[47m";
})(ConsoleColorCode = exports.ConsoleColorCode || (exports.ConsoleColorCode = {}));
//# sourceMappingURL=types.js.map