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
    CubeManipulator.scramble = function (cube, outputMoves) {
        var scrambleMoveCount = randomizer_1.Randomizer.getRandomInt(50, 250);
        var scube = new types_1.Cube(cube);
        for (var moveIndex = 0; moveIndex < scrambleMoveCount; moveIndex++) {
            var rotatorIndex = randomizer_1.Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1);
            var rotator = CubeManipulator.cubeRotators[rotatorIndex];
            if (outputMoves) {
                console.log("Scramble move " + (moveIndex + 1) + " of " + scrambleMoveCount + ": " + rotator.description);
            }
            scube = rotator.rotate(scube);
        }
        return scube;
    };
    CubeManipulator.solve = function (scrambledCube) {
        return scrambledCube;
    };
    CubeManipulator.isSolved = function (candidateCube) {
        var c = candidateCube;
        if (c.front.center !== c.front.topLeft) {
            return false;
        }
        if (c.front.center !== c.front.top) {
            return false;
        }
        if (c.front.center !== c.front.topRight) {
            return false;
        }
        if (c.front.center !== c.front.left) {
            return false;
        }
        if (c.front.center !== c.front.right) {
            return false;
        }
        if (c.front.center !== c.front.bottomLeft) {
            return false;
        }
        if (c.front.center !== c.front.bottom) {
            return false;
        }
        if (c.front.center !== c.front.bottomRight) {
            return false;
        }
        if (c.top.center !== c.top.topLeft) {
            return false;
        }
        if (c.top.center !== c.top.top) {
            return false;
        }
        if (c.top.center !== c.top.topRight) {
            return false;
        }
        if (c.top.center !== c.top.left) {
            return false;
        }
        if (c.top.center !== c.top.right) {
            return false;
        }
        if (c.top.center !== c.top.bottomLeft) {
            return false;
        }
        if (c.top.center !== c.top.bottom) {
            return false;
        }
        if (c.top.center !== c.top.bottomRight) {
            return false;
        }
        if (c.right.center !== c.right.topLeft) {
            return false;
        }
        if (c.right.center !== c.right.top) {
            return false;
        }
        if (c.right.center !== c.right.topRight) {
            return false;
        }
        if (c.right.center !== c.right.left) {
            return false;
        }
        if (c.right.center !== c.right.right) {
            return false;
        }
        if (c.right.center !== c.right.bottomLeft) {
            return false;
        }
        if (c.right.center !== c.right.bottom) {
            return false;
        }
        if (c.right.center !== c.right.bottomRight) {
            return false;
        }
        return true;
    };
    return CubeManipulator;
}());
exports.CubeManipulator = CubeManipulator;
//# sourceMappingURL=cube-manipulator.js.map