"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var CubePresentor = /** @class */ (function () {
    function CubePresentor() {
    }
    CubePresentor.getSerializedVerbose = function (cube) {
        return JSON.stringify(cube);
    };
    CubePresentor.getConsoleRepresentation = function (cube) {
        var r0 = "   " + cube.top.topLeft + cube.top.top + cube.top.topRight + "   ";
        var r1 = "   " + cube.top.left + cube.top.center + cube.top.right + "   ";
        var r2 = "   " + cube.top.bottomLeft + cube.top.bottom + cube.top.bottomRight + "   ";
        // tslint:disable:max-line-length
        var r3 = "" + cube.left.topLeft + cube.left.top + cube.left.topRight + cube.front.topLeft + cube.front.top + cube.front.topRight + cube.right.topLeft + cube.right.top + cube.right.topRight;
        var r4 = "" + cube.left.left + cube.left.center + cube.left.right + cube.front.left + cube.front.center + cube.front.right + cube.right.left + cube.right.center + cube.right.right;
        var r5 = "" + cube.left.bottomLeft + cube.left.bottom + cube.left.bottomRight + cube.front.bottomLeft + cube.front.bottom + cube.front.bottomRight + cube.right.bottomLeft + cube.right.bottom + cube.right.bottomRight;
        //todo consider flip bottom representation top-to-bottom to bottom-to-top
        var r6 = "   " + cube.bottom.topLeft + cube.bottom.top + cube.bottom.topRight + "   ";
        var r7 = "   " + cube.bottom.left + cube.bottom.center + cube.bottom.right + "   ";
        var r8 = "   " + cube.bottom.bottomLeft + cube.bottom.bottom + cube.bottom.bottomRight + "   ";
        //todo consider flip back representation left-to-right to right-to-left
        var r9 = "   " + cube.back.topLeft + cube.back.top + cube.back.topRight + "   ";
        var ra = "   " + cube.back.left + cube.back.center + cube.back.right + "   ";
        var rb = "   " + cube.back.bottomLeft + cube.back.bottom + cube.back.bottomRight + "   ";
        var bwConsoleCube = r0 + "\r\n" + r1 + "\r\n" + r2 + "\r\n" + r3 + "\r\n" + r4 + "\r\n" + r5 + "\r\n" + r6 + "\r\n" + r7 + "\r\n" + r8 + "\r\n" + r9 + "\r\n" + ra + "\r\n" + rb;
        var colorConsoleCube = CubePresentor.colorize(bwConsoleCube);
        return colorConsoleCube;
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