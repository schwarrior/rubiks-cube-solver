"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var cube_presentor_1 = require("./cube-presentor");
var Cube = /** @class */ (function () {
    function Cube(fromCube) {
        var _this = this;
        this.reset = function () {
            var front = {
                bottom: types_1.Color.Yellow,
                bottomRight: types_1.Color.Yellow,
                right: types_1.Color.Yellow,
                topRight: types_1.Color.Yellow,
                top: types_1.Color.Yellow,
                topLeft: types_1.Color.Yellow,
                left: types_1.Color.Yellow,
                bottomLeft: types_1.Color.Yellow,
                center: types_1.Color.Yellow
            };
            var right = {
                bottom: types_1.Color.Blue,
                bottomRight: types_1.Color.Blue,
                right: types_1.Color.Blue,
                topRight: types_1.Color.Blue,
                top: types_1.Color.Blue,
                topLeft: types_1.Color.Blue,
                left: types_1.Color.Blue,
                bottomLeft: types_1.Color.Blue,
                center: types_1.Color.Blue
            };
            var back = {
                bottom: types_1.Color.White,
                bottomRight: types_1.Color.White,
                right: types_1.Color.White,
                topRight: types_1.Color.White,
                top: types_1.Color.White,
                topLeft: types_1.Color.White,
                left: types_1.Color.White,
                bottomLeft: types_1.Color.White,
                center: types_1.Color.White
            };
            var left = {
                bottom: types_1.Color.Green,
                bottomRight: types_1.Color.Green,
                right: types_1.Color.Green,
                topRight: types_1.Color.Green,
                top: types_1.Color.Green,
                topLeft: types_1.Color.Green,
                left: types_1.Color.Green,
                bottomLeft: types_1.Color.Green,
                center: types_1.Color.Green
            };
            var top = {
                bottom: types_1.Color.Red,
                bottomRight: types_1.Color.Red,
                right: types_1.Color.Red,
                topRight: types_1.Color.Red,
                top: types_1.Color.Red,
                topLeft: types_1.Color.Red,
                left: types_1.Color.Red,
                bottomLeft: types_1.Color.Red,
                center: types_1.Color.Red
            };
            var bottom = {
                bottom: types_1.Color.Orange,
                bottomRight: types_1.Color.Orange,
                right: types_1.Color.Orange,
                topRight: types_1.Color.Orange,
                top: types_1.Color.Orange,
                topLeft: types_1.Color.Orange,
                left: types_1.Color.Orange,
                bottomLeft: types_1.Color.Orange,
                center: types_1.Color.Orange
            };
            _this.front = front;
            _this.right = right;
            _this.back = back;
            _this.left = left;
            _this.top = top;
            _this.bottom = bottom;
        };
        this.toString = function () {
            var r0 = "   " + _this.top.topLeft + _this.top.top + _this.top.topRight;
            var r1 = "   " + _this.top.left + _this.top.center + _this.top.right;
            var r2 = "   " + _this.top.bottomLeft + _this.top.bottom + _this.top.bottomRight;
            // tslint:disable:max-line-length
            var r3 = "" + _this.left.topLeft + _this.left.top + _this.left.topRight + _this.front.topLeft + _this.front.top + _this.front.topRight + _this.right.topLeft + _this.right.top + _this.right.topRight + "  " + _this.back.topLeft + _this.back.top + _this.back.topRight;
            var r4 = "" + _this.left.left + _this.left.center + _this.left.right + _this.front.left + _this.front.center + _this.front.right + _this.right.left + _this.right.center + _this.right.right + "  " + _this.back.left + _this.back.center + _this.back.right;
            var r5 = "" + _this.left.bottomLeft + _this.left.bottom + _this.left.bottomRight + _this.front.bottomLeft + _this.front.bottom + _this.front.bottomRight + _this.right.bottomLeft + _this.right.bottom + _this.right.bottomRight + "  " + _this.back.bottomLeft + _this.back.bottom + _this.back.bottomRight;
            var r6 = "   " + _this.bottom.topLeft + _this.bottom.top + _this.bottom.topRight;
            var r7 = "   " + _this.bottom.left + _this.bottom.center + _this.bottom.right;
            var r8 = "   " + _this.bottom.bottomLeft + _this.bottom.bottom + _this.bottom.bottomRight;
            var concat = r0 + "\r\n" + r1 + "\r\n" + r2 + "\r\n" + r3 + "\r\n" + r4 + "\r\n" + r5 + "\r\n" + r6 + "\r\n" + r7 + "\r\n" + r8;
            return concat;
        };
        this.importFromString = function (cubeString) {
            var cleanCubeStr = cube_presentor_1.CubePresentor.removeWhitespace(cubeString);
            var s = cleanCubeStr.split("");
            _this.top = new types_1.Face();
            _this.top.topLeft = Cube.getColor(s[0]);
            _this.top.top = Cube.getColor(s[1]);
            _this.top.topRight = Cube.getColor(s[2]);
            _this.top.left = Cube.getColor(s[3]);
            _this.top.center = Cube.getColor(s[4]);
            _this.top.right = Cube.getColor(s[5]);
            _this.top.bottomLeft = Cube.getColor(s[6]);
            _this.top.bottom = Cube.getColor(s[7]);
            _this.top.bottomRight = Cube.getColor(s[8]);
            _this.left = new types_1.Face();
            _this.front = new types_1.Face();
            _this.right = new types_1.Face();
            _this.back = new types_1.Face();
            _this.left.topLeft = Cube.getColor(s[9]);
            _this.left.top = Cube.getColor(s[10]);
            _this.left.topRight = Cube.getColor(s[11]);
            _this.front.topLeft = Cube.getColor(s[12]);
            _this.front.top = Cube.getColor(s[13]);
            _this.front.topRight = Cube.getColor(s[14]);
            _this.right.topLeft = Cube.getColor(s[15]);
            _this.right.top = Cube.getColor(s[16]);
            _this.right.topRight = Cube.getColor(s[17]);
            _this.back.topLeft = Cube.getColor(s[18]);
            _this.back.top = Cube.getColor(s[19]);
            _this.back.topRight = Cube.getColor(s[20]);
            _this.left.left = Cube.getColor(s[21]);
            _this.left.center = Cube.getColor(s[22]);
            _this.left.right = Cube.getColor(s[23]);
            _this.front.left = Cube.getColor(s[24]);
            _this.front.center = Cube.getColor(s[25]);
            _this.front.right = Cube.getColor(s[26]);
            _this.right.left = Cube.getColor(s[27]);
            _this.right.center = Cube.getColor(s[28]);
            _this.right.right = Cube.getColor(s[29]);
            _this.back.left = Cube.getColor(s[30]);
            _this.back.center = Cube.getColor(s[31]);
            _this.back.right = Cube.getColor(s[32]);
            _this.left.bottomLeft = Cube.getColor(s[33]);
            _this.left.bottom = Cube.getColor(s[34]);
            _this.left.bottomRight = Cube.getColor(s[35]);
            _this.front.bottomLeft = Cube.getColor(s[36]);
            _this.front.bottom = Cube.getColor(s[37]);
            _this.front.bottomRight = Cube.getColor(s[38]);
            _this.right.bottomLeft = Cube.getColor(s[39]);
            _this.right.bottom = Cube.getColor(s[40]);
            _this.right.bottomRight = Cube.getColor(s[41]);
            _this.back.bottomLeft = Cube.getColor(s[42]);
            _this.back.bottom = Cube.getColor(s[43]);
            _this.back.bottomRight = Cube.getColor(s[44]);
            _this.bottom = new types_1.Face();
            _this.bottom.topLeft = Cube.getColor(s[45]);
            _this.bottom.top = Cube.getColor(s[46]);
            _this.bottom.topRight = Cube.getColor(s[47]);
            _this.bottom.left = Cube.getColor(s[48]);
            _this.bottom.center = Cube.getColor(s[49]);
            _this.bottom.right = Cube.getColor(s[50]);
            _this.bottom.bottomLeft = Cube.getColor(s[51]);
            _this.bottom.bottom = Cube.getColor(s[52]);
            _this.bottom.bottomRight = Cube.getColor(s[53]);
        };
        if (!fromCube) {
            this.reset();
            return;
        }
        if (typeof fromCube === "object") {
            this.front = new types_1.Face();
            Object.assign(this.front, fromCube.front);
            this.right = new types_1.Face();
            Object.assign(this.right, fromCube.right);
            this.back = new types_1.Face();
            Object.assign(this.back, fromCube.back);
            this.left = new types_1.Face();
            Object.assign(this.left, fromCube.left);
            this.top = new types_1.Face();
            Object.assign(this.top, fromCube.top);
            this.bottom = new types_1.Face();
            Object.assign(this.bottom, fromCube.bottom);
            return;
        }
        //its a string represenation
        this.importFromString(fromCube);
    }
    Cube.getColor = function (val) {
        if (val === types_1.Color.Blue) {
            return types_1.Color.Blue;
        }
        if (val === types_1.Color.Green) {
            return types_1.Color.Green;
        }
        if (val === types_1.Color.Orange) {
            return types_1.Color.Orange;
        }
        if (val === types_1.Color.Red) {
            return types_1.Color.Red;
        }
        if (val === types_1.Color.White) {
            return types_1.Color.White;
        }
        if (val === types_1.Color.Yellow) {
            return types_1.Color.Yellow;
        }
        throw new Error("Could not parse Color from value '" + val + "'");
    };
    return Cube;
}());
exports.Cube = Cube;
//# sourceMappingURL=cube.js.map