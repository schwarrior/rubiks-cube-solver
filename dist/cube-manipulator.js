"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubeManipulator = /** @class */ (function () {
    function CubeManipulator() {
    }
    CubeManipulator.rotateTopRight = function (cube) {
        var rightTopLeft = cube.right.topLeft;
        var rightTop = cube.right.top;
        var rightTopRight = cube.right.topRight;
        cube.right.topLeft = cube.back.topLeft;
        cube.right.top = cube.back.top;
        cube.right.topRight = cube.back.topRight;
        cube.back.topLeft = cube.left.topLeft;
        cube.back.top = cube.left.top;
        cube.back.topRight = cube.left.topRight;
        cube.left.topLeft = cube.front.topLeft;
        cube.left.top = cube.front.top;
        cube.left.topRight = cube.front.topRight;
        cube.front.topLeft = rightTopLeft;
        cube.front.top = rightTop;
        cube.front.topRight = rightTopRight;
        return cube;
    };
    return CubeManipulator;
}());
exports.CubeManipulator = CubeManipulator;
//# sourceMappingURL=cube-manipulator.js.map