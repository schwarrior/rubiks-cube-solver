"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_rotators_1 = require("./cube-rotators");
var CubeManipulator = /** @class */ (function () {
    function CubeManipulator() {
    }
    CubeManipulator.cubeRotators = cube_rotators_1.CubeRotators;
    CubeManipulator.scramble = function (cube) {
        //const scube = new Cube(cube)
        //const rotateTopRight = new CubeRotateTopRight()
        //return rotateTopRight.rotate(cube)
        var r = CubeManipulator.cubeRotators[0];
        console.log(r.description);
        var rCube = r.rotator.rotate(cube);
        return rCube;
        //todo implement rotations
        //todo test rotations
        //todo implment random rotations
    };
    return CubeManipulator;
}());
exports.CubeManipulator = CubeManipulator;
//# sourceMappingURL=cube-manipulator.js.map