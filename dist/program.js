"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_creator_1 = require("./cube-creator");
var cube_presentor_1 = require("./cube-presentor");
var Program = /** @class */ (function () {
    function Program() {
        this.run = function () {
            console.log("Rubik's Cube Solver");
            var cube = cube_creator_1.CubeCreator.getSolvedCube();
            //console.log(CubePresentor.getSerializedVerbose(cube))
            var cubeForConsole = cube_presentor_1.CubePresentor.getConsoleRepresentation(cube);
            console.log(cubeForConsole);
        };
    }
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map