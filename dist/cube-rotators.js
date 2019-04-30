"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var CubeRotateTopRowClockwise = /** @class */ (function () {
    function CubeRotateTopRowClockwise() {
        this.description = "Rotate top row clockwise";
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.front.topLeft = cube.right.topLeft;
            rCube.front.top = cube.right.top;
            rCube.front.topRight = cube.right.topRight;
            rCube.left.topLeft = cube.front.topLeft;
            rCube.left.top = cube.front.top;
            rCube.left.topRight = cube.front.topRight;
            rCube.back.topLeft = cube.left.topLeft;
            rCube.back.top = cube.left.top;
            rCube.back.topRight = cube.left.topRight;
            rCube.right.topLeft = cube.back.topLeft;
            rCube.right.top = cube.back.top;
            rCube.right.topRight = cube.back.topRight;
            return rCube;
        };
    }
    return CubeRotateTopRowClockwise;
}());
var CubeRotateTopRowCounterclockwise = /** @class */ (function () {
    function CubeRotateTopRowCounterclockwise() {
        this.description = "Rotate top row counterclockwise";
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.front.topLeft = cube.left.topLeft;
            rCube.front.top = cube.left.top;
            rCube.front.topRight = cube.left.topRight;
            rCube.right.topLeft = cube.front.topLeft;
            rCube.right.top = cube.front.top;
            rCube.right.topRight = cube.front.topRight;
            rCube.back.topLeft = cube.right.topLeft;
            rCube.back.top = cube.right.top;
            rCube.back.topRight = cube.right.topRight;
            rCube.left.topLeft = cube.back.topLeft;
            rCube.left.top = cube.back.top;
            rCube.left.topRight = cube.back.topRight;
            return rCube;
        };
    }
    return CubeRotateTopRowCounterclockwise;
}());
var CubeRotateMiddleRowClockwise = /** @class */ (function () {
    function CubeRotateMiddleRowClockwise() {
        this.description = "Rotate middle row clockwise";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateMiddleRowClockwise;
}());
var CubeRotateMiddleRowCounterclockwise = /** @class */ (function () {
    function CubeRotateMiddleRowCounterclockwise() {
        this.description = "Rotate middle row counterclockwise";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateMiddleRowCounterclockwise;
}());
var CubeRotateBottomRowClockwise = /** @class */ (function () {
    function CubeRotateBottomRowClockwise() {
        this.description = "Rotate bottom row clockwise";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateBottomRowClockwise;
}());
var CubeRotateBottomRowCounterclockwise = /** @class */ (function () {
    function CubeRotateBottomRowCounterclockwise() {
        this.description = "Rotate bottom row counterclockwise";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateBottomRowCounterclockwise;
}());
var CubeRotateLeftColumnClockwiseDown = /** @class */ (function () {
    function CubeRotateLeftColumnClockwiseDown() {
        this.description = "Rotate left column clockwise down";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateLeftColumnClockwiseDown;
}());
var CubeRotateLeftColumnCounterclockwiseUp = /** @class */ (function () {
    function CubeRotateLeftColumnCounterclockwiseUp() {
        this.description = "Rotate left column counterclockwise up";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateLeftColumnCounterclockwiseUp;
}());
var CubeRotateCenterColumnClockwiseDown = /** @class */ (function () {
    function CubeRotateCenterColumnClockwiseDown() {
        this.description = "Rotate center column clockwise down";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateCenterColumnClockwiseDown;
}());
var CubeRotateCenterColumnCounterclockwiseUp = /** @class */ (function () {
    function CubeRotateCenterColumnCounterclockwiseUp() {
        this.description = "Rotate center column clockwise down";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateCenterColumnCounterclockwiseUp;
}());
var CubeRotateRightColumnClockwiseDown = /** @class */ (function () {
    function CubeRotateRightColumnClockwiseDown() {
        this.description = "Rotate right column clockwise down";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateRightColumnClockwiseDown;
}());
var CubeRotateRightColumnCounterclockwiseUp = /** @class */ (function () {
    function CubeRotateRightColumnCounterclockwiseUp() {
        this.description = "Rotate right column counterclockwise up";
        this.rotate = function (cube) {
            throw new Error("Not Implmented");
        };
    }
    return CubeRotateRightColumnCounterclockwiseUp;
}());
exports.CubeRotators = [
    new CubeRotateTopRowClockwise(),
    new CubeRotateTopRowCounterclockwise(),
    new CubeRotateMiddleRowClockwise(),
    new CubeRotateMiddleRowCounterclockwise(),
    new CubeRotateBottomRowClockwise(),
    new CubeRotateBottomRowCounterclockwise(),
    new CubeRotateLeftColumnClockwiseDown(),
    new CubeRotateLeftColumnCounterclockwiseUp(),
    new CubeRotateCenterColumnClockwiseDown(),
    new CubeRotateCenterColumnCounterclockwiseUp(),
    new CubeRotateRightColumnClockwiseDown(),
    new CubeRotateRightColumnCounterclockwiseUp(),
];
//# sourceMappingURL=cube-rotators.js.map