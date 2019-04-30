"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_presentor_1 = require("./cube-presentor");
var cube_manipulator_1 = require("./cube-manipulator");
var types_1 = require("./types");
var Program = /** @class */ (function () {
    function Program() {
        this.run = function () {
            console.log("Rubik's Cube Solver\r\n");
            var cube = new types_1.Cube();
            console.log("Orig Cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(cube));
            console.log("\r\n");
            var scube;
            for (var rotateIndex = 0; rotateIndex < 6; rotateIndex++) {
                scube = cube_manipulator_1.CubeManipulator.rotateOnce(cube, rotateIndex);
                console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(scube));
                console.log("\r\n");
            }
            console.log("Done");
        };
    }
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map