"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_presentor_1 = require("./cube-presentor");
var cube_manipulator_1 = require("./cube-manipulator");
var types_1 = require("./types");
var Program = /** @class */ (function () {
    function Program() {
        this.run = function () {
            console.log("Rubik's Cube Solver");
            console.log("\r\n");
            //create a randomly scrambled cube
            var cube = new types_1.Cube();
            var scube = cube_manipulator_1.CubeManipulator.scramble(cube);
            console.log("Scrambled Cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(scube));
            console.log("\r\n");
            //test randoms
            // Randomizer.testRandoms(1, 10, 50)
            //output new (solved) cube
            // const cube = new Cube()
            // console.log("Orig Cube:")
            // console.log(CubePresentor.getConsoleRepresentation(cube))
            // console.log("\r\n")
            //test from new to single rotation of each type
            // let scube : Cube
            // for (let rotateIndex = 0; rotateIndex < 12; rotateIndex ++) {
            //     scube = CubeManipulator.rotateOnce(cube, rotateIndex)
            //     console.log(CubePresentor.getConsoleRepresentation(scube))
            //     console.log("\r\n")
            // }
            console.log("Done");
        };
    }
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map