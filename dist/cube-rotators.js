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
            var rCube = new types_1.Cube(cube);
            rCube.front.left = cube.right.left;
            rCube.front.center = cube.right.center;
            rCube.front.right = cube.right.right;
            rCube.left.left = cube.front.left;
            rCube.left.center = cube.front.center;
            rCube.left.right = cube.front.right;
            rCube.back.left = cube.left.left;
            rCube.back.center = cube.left.center;
            rCube.back.right = cube.left.right;
            rCube.right.left = cube.back.left;
            rCube.right.center = cube.back.center;
            rCube.right.right = cube.back.right;
            return rCube;
        };
    }
    return CubeRotateMiddleRowClockwise;
}());
var CubeRotateMiddleRowCounterclockwise = /** @class */ (function () {
    function CubeRotateMiddleRowCounterclockwise() {
        this.description = "Rotate middle row counterclockwise";
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.front.left = cube.left.left;
            rCube.front.center = cube.left.center;
            rCube.front.right = cube.left.right;
            rCube.right.left = cube.front.left;
            rCube.right.center = cube.front.center;
            rCube.right.right = cube.front.right;
            rCube.back.left = cube.right.left;
            rCube.back.center = cube.right.center;
            rCube.back.right = cube.right.right;
            rCube.left.left = cube.back.left;
            rCube.left.center = cube.back.center;
            rCube.left.right = cube.back.right;
            return rCube;
        };
    }
    return CubeRotateMiddleRowCounterclockwise;
}());
var CubeRotateBottomRowClockwise = /** @class */ (function () {
    function CubeRotateBottomRowClockwise() {
        this.description = "Rotate bottom row clockwise";
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.front.bottomLeft = cube.right.bottomLeft;
            rCube.front.bottom = cube.right.bottom;
            rCube.front.bottomRight = cube.right.bottomRight;
            rCube.left.bottomLeft = cube.front.bottomLeft;
            rCube.left.bottom = cube.front.bottom;
            rCube.left.bottomRight = cube.front.bottomRight;
            rCube.back.bottomLeft = cube.left.bottomLeft;
            rCube.back.bottom = cube.left.bottom;
            rCube.back.bottomRight = cube.left.bottomRight;
            rCube.right.bottomLeft = cube.back.bottomLeft;
            rCube.right.bottom = cube.back.bottom;
            rCube.right.bottomRight = cube.back.bottomRight;
            return rCube;
        };
    }
    return CubeRotateBottomRowClockwise;
}());
var CubeRotateBottomRowCounterclockwise = /** @class */ (function () {
    function CubeRotateBottomRowCounterclockwise() {
        this.description = "Rotate bottom row counterclockwise";
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.front.bottomLeft = cube.left.bottomLeft;
            rCube.front.bottom = cube.left.bottom;
            rCube.front.bottomRight = cube.left.bottomRight;
            rCube.right.bottomLeft = cube.front.bottomLeft;
            rCube.right.bottom = cube.front.bottom;
            rCube.right.bottomRight = cube.front.bottomRight;
            rCube.back.bottomLeft = cube.right.bottomLeft;
            rCube.back.bottom = cube.right.bottom;
            rCube.back.bottomRight = cube.right.bottomRight;
            rCube.left.bottomLeft = cube.back.bottomLeft;
            rCube.left.bottom = cube.back.bottom;
            rCube.left.bottomRight = cube.back.bottomRight;
            return rCube;
        };
    }
    return CubeRotateBottomRowCounterclockwise;
}());
var CubeRotateLeftColumnClockwiseDown = /** @class */ (function () {
    function CubeRotateLeftColumnClockwiseDown() {
        this.description = "Rotate left column clockwise down";
        this.rotate = function (cube) {
            var rCube = new types_1.Cube(cube);
            rCube.front.topLeft = cube.top.topLeft;
            rCube.front.left = cube.top.left;
            rCube.front.bottomLeft = cube.top.bottomLeft;
            rCube.bottom.topLeft = cube.front.topLeft;
            rCube.bottom.left = cube.front.left;
            rCube.bottom.bottomLeft = cube.front.bottomLeft;
            rCube.back.topLeft = cube.bottom.topLeft;
            rCube.back.left = cube.bottom.left;
            rCube.back.bottomLeft = cube.bottom.bottomLeft;
            rCube.top.topLeft = cube.back.topLeft;
            rCube.top.left = cube.back.left;
            rCube.top.bottomLeft = cube.back.bottomLeft;
            return rCube;
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