"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var CubeRotatorDescribed = /** @class */ (function () {
    function CubeRotatorDescribed() {
    }
    return CubeRotatorDescribed;
}());
exports.CubeRotatorDescribed = CubeRotatorDescribed;
var CubeRotateTopRight = /** @class */ (function () {
    function CubeRotateTopRight() {
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.left.topLeft = cube.front.topLeft;
            rCube.left.top = cube.front.top;
            rCube.left.topRight = cube.front.topRight;
            rCube.front.topLeft = cube.right.topLeft;
            rCube.front.top = cube.right.top;
            rCube.front.topRight = cube.right.topRight;
            rCube.right.topLeft = cube.back.topLeft;
            rCube.right.top = cube.back.top;
            rCube.right.topRight = cube.back.topRight;
            rCube.back.topLeft = cube.left.topLeft;
            rCube.back.top = cube.left.top;
            rCube.back.topRight = cube.left.topRight;
            return rCube;
        };
    }
    return CubeRotateTopRight;
}());
exports.CubeRotateTopRight = CubeRotateTopRight;
var CubeRotateTopLeft = /** @class */ (function () {
    function CubeRotateTopLeft() {
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            var rightTopLeft = cube.right.topLeft;
            var rightTop = cube.right.top;
            var rightTopRight = cube.right.topRight;
            rCube.right.topLeft = cube.back.topLeft;
            rCube.right.top = cube.back.top;
            rCube.right.topRight = cube.back.topRight;
            rCube.back.topLeft = cube.left.topLeft;
            rCube.back.top = cube.left.top;
            rCube.back.topRight = cube.left.topRight;
            rCube.left.topLeft = cube.front.topLeft;
            rCube.left.top = cube.front.top;
            rCube.left.topRight = cube.front.topRight;
            rCube.front.topLeft = rightTopLeft;
            rCube.front.top = rightTop;
            rCube.front.topRight = rightTopRight;
            return rCube;
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
exports.CubeRotators = [
    { description: "Rotate Top Right", rotator: new CubeRotateTopRight() }
];
//# sourceMappingURL=cube-rotators.js.map