"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_presentor_1 = require("./cube-presentor");
var cube_manipulator_1 = require("./cube-manipulator");
var cube_1 = require("./cube");
var Program = /** @class */ (function () {
    function Program() {
        this.run = function () {
            console.log("Rubik's Cube Solver");
            console.log("\r\n");
            //create a new  cube
            var newCube = new cube_1.Cube();
            // create scrambled cube
            var scrambledCube = cube_manipulator_1.CubeManipulator.scramble(newCube);
            console.log("Scrambled cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(scrambledCube));
            console.log("\r\n");
            // solve scrambled cube
            var solvedCube = cube_manipulator_1.CubeManipulator.solve(scrambledCube, true);
            console.log("Solved cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(solvedCube));
            console.log("\r\n");
            console.log("Done");
        };
    }
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map