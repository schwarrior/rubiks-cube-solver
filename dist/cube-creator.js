"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var CubeCreator = /** @class */ (function () {
    function CubeCreator() {
    }
    CubeCreator.getNewCube = function () {
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
        return {
            front: front,
            right: right,
            back: back,
            left: left,
            top: top,
            bottom: bottom
        };
    };
    return CubeCreator;
}());
exports.CubeCreator = CubeCreator;
//# sourceMappingURL=cube-creator.js.map