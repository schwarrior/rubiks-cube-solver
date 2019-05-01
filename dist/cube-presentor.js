"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var CubePresentor = /** @class */ (function () {
    function CubePresentor() {
    }
    CubePresentor.removeWhitespace = function (cubeString) {
        var cleaned = CubePresentor.replaceAll(cubeString, " ", "");
        cleaned = CubePresentor.replaceAll(cleaned, "\r", "");
        cleaned = CubePresentor.replaceAll(cleaned, "\n", "");
        return cleaned;
    };
    CubePresentor.replaceAll = function (targetString, searchValue, replaceValue) {
        var replaced = targetString.split(searchValue).join(replaceValue);
        return replaced;
    };
    CubePresentor.getConsoleRepresentation = function (cube) {
        var cubeStr = cube.toString();
        var colorCubeStr = CubePresentor.colorize(cubeStr);
        return colorCubeStr;
    };
    CubePresentor.colorize = function (src) {
        src = src.split("R").join(types_1.ConsoleColorCode.BgRed + "R" + types_1.ConsoleColorCode.Reset);
        src = src.split("G").join(types_1.ConsoleColorCode.BgGreen + "G" + types_1.ConsoleColorCode.Reset);
        src = src.split("Y").join(types_1.ConsoleColorCode.BgYellow + "Y" + types_1.ConsoleColorCode.Reset);
        src = src.split("B").join(types_1.ConsoleColorCode.BgBlue + "B" + types_1.ConsoleColorCode.Reset);
        src = src.split("O").join("" + types_1.ConsoleColorCode.BgYellow + types_1.ConsoleColorCode.FgRed + "O" + types_1.ConsoleColorCode.Reset);
        src = src.split("W").join("" + types_1.ConsoleColorCode.BgWhite + types_1.ConsoleColorCode.FgBlack + "W" + types_1.ConsoleColorCode.Reset);
        return src;
    };
    return CubePresentor;
}());
exports.CubePresentor = CubePresentor;
//# sourceMappingURL=cube-presentor.js.map