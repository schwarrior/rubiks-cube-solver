"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubeRotateTopRight = /** @class */ (function () {
    function CubeRotateTopRight() {
        this.rotate = function (cube) {
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
    }
    return CubeRotateTopRight;
}());
exports.CubeRotateTopRight = CubeRotateTopRight;
var CubeRotateTopLeft = /** @class */ (function () {
    function CubeRotateTopLeft() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateTopLeft;
}());
exports.CubeRotateTopLeft = CubeRotateTopLeft;
var CubeRotateMiddleRight = /** @class */ (function () {
    function CubeRotateMiddleRight() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateMiddleRight;
}());
exports.CubeRotateMiddleRight = CubeRotateMiddleRight;
var CubeRotateMiddleLeft = /** @class */ (function () {
    function CubeRotateMiddleLeft() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateMiddleLeft;
}());
exports.CubeRotateMiddleLeft = CubeRotateMiddleLeft;
var CubeRotateBottomRight = /** @class */ (function () {
    function CubeRotateBottomRight() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateBottomRight;
}());
exports.CubeRotateBottomRight = CubeRotateBottomRight;
var CubeRotateBottomLeft = /** @class */ (function () {
    function CubeRotateBottomLeft() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateBottomLeft;
}());
exports.CubeRotateBottomLeft = CubeRotateBottomLeft;
var CubeRotateLeftUp = /** @class */ (function () {
    function CubeRotateLeftUp() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateLeftUp;
}());
exports.CubeRotateLeftUp = CubeRotateLeftUp;
var CubeRotateLeftDown = /** @class */ (function () {
    function CubeRotateLeftDown() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateLeftDown;
}());
exports.CubeRotateLeftDown = CubeRotateLeftDown;
var CubeRotateCenterUp = /** @class */ (function () {
    function CubeRotateCenterUp() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateCenterUp;
}());
exports.CubeRotateCenterUp = CubeRotateCenterUp;
var CubeRotateCenterDown = /** @class */ (function () {
    function CubeRotateCenterDown() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateCenterDown;
}());
exports.CubeRotateCenterDown = CubeRotateCenterDown;
var CubeRotateRightUp = /** @class */ (function () {
    function CubeRotateRightUp() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateRightUp;
}());
exports.CubeRotateRightUp = CubeRotateRightUp;
var CubeRotateRightDown = /** @class */ (function () {
    function CubeRotateRightDown() {
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateRightDown;
}());
exports.CubeRotateRightDown = CubeRotateRightDown;
var CubeManipulator = /** @class */ (function () {
    function CubeManipulator() {
    }
    CubeManipulator.cubeRotations = [
        new CubeRotateTopRight(),
        new CubeRotateTopLeft(),
        new CubeRotateMiddleRight(),
        new CubeRotateMiddleLeft(),
        new CubeRotateBottomRight(),
        new CubeRotateBottomLeft(),
        new CubeRotateLeftUp(),
        new CubeRotateLeftDown(),
        new CubeRotateCenterUp(),
        new CubeRotateCenterDown(),
        new CubeRotateRightUp(),
        new CubeRotateRightDown()
    ];
    CubeManipulator.scrabble = function (cube) {
        var rotateTopRight = new CubeRotateTopRight();
        return rotateTopRight.rotate(cube);
        //return CubeManipulator.cubeRotations[0].rotate(cube)
        //todo implement rotations
        //todo test rotations
        //todo implment random rotations
    };
    return CubeManipulator;
}());
exports.CubeManipulator = CubeManipulator;
//# sourceMappingURL=cube-manipulator.js.map