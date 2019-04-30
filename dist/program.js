"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_manipulator_1 = require("./cube-manipulator");
var Program = /** @class */ (function () {
    function Program() {
        this.run = function () {
            console.log("Rubik's Cube Solver");
            var cubeMan = new cube_manipulator_1.CubeManipulator();
            var cube = cubeMan.getSolvedCube();
            console.log(JSON.stringify(cube));
        };
    }
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map