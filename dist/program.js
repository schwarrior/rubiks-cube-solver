"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_creator_1 = require("./cube-creator");
var cube_presentor_1 = require("./cube-presentor");
var cube_manipulator_1 = require("./cube-manipulator");
var Program = /** @class */ (function () {
    function Program() {
        this.run = function () {
            console.log("Rubik's Cube Solver\r\n");
            var cube = cube_creator_1.CubeCreator.getNewCube();
            console.log("New Cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(cube));
            console.log("\r\n");
            var scube = cube_manipulator_1.CubeManipulator.rotateTopRight(cube);
            console.log("Scrambled Cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(scube));
            console.log("\r\n");
            console.log("Done");
        };
    }
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map