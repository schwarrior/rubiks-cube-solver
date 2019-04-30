"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var cube_rotators_1 = require("./cube-rotators");
var randomizer_1 = require("./randomizer");
var CubeManipulator = /** @class */ (function () {
    function CubeManipulator() {
    }
    CubeManipulator.cubeRotators = cube_rotators_1.CubeRotators;
    CubeManipulator.rotateOnce = function (cube, rotationIndex) {
        var r = CubeManipulator.cubeRotators[rotationIndex];
        console.log(r.description);
        var rCube = r.rotate(cube);
        return rCube;
    };
    CubeManipulator.scramble = function (cube) {
        var scrambleMoveCount = randomizer_1.Randomizer.getRandomInt(50, 250);
        var scube = new types_1.Cube(cube);
        for (var moveIndex = 0; moveIndex < scrambleMoveCount; moveIndex++) {
            var rotatorIndex = randomizer_1.Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1);
            var rotator = CubeManipulator.cubeRotators[rotatorIndex];
            console.log("Scramble move " + (moveIndex + 1) + " of " + scrambleMoveCount + ": " + rotator.description);
            scube = rotator.rotate(scube);
        }
        return scube;
    };
    return CubeManipulator;
}());
exports.CubeManipulator = CubeManipulator;
//# sourceMappingURL=cube-manipulator.js.map