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
            //create a randomly scrambled cube
            var newCube = new cube_1.Cube();
            var scrambledCube = cube_manipulator_1.CubeManipulator.scramble(newCube);
            console.log("Scrambled cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(scrambledCube));
            console.log("\r\n");
            //test parsing cube from string
            var decodedCube = new cube_1.Cube(scrambledCube.toString());
            console.log("Decoded cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(decodedCube));
            console.log("\r\n");
            var revCubeStr = scrambledCube.toString().split("").reverse().join("");
            var revDecoded = new cube_1.Cube(revCubeStr.toString());
            console.log("Reverse decoded cube:");
            console.log(cube_presentor_1.CubePresentor.getConsoleRepresentation(revDecoded));
            console.log("\r\n");
            // // solve scrambled cube
            // const solvedCube = CubeManipulator.solve(scrambledCube, true)
            // console.log("Solved cube:")
            // console.log(CubePresentor.getConsoleRepresentation(solvedCube))
            // console.log("\r\n")
            // // test isSolved method
            // const newCubeIsSolved = CubeManipulator.isSolved(newCube)
            // console.log(`New cube is solved: ${newCubeIsSolved}`)
            // const scrambledCubeIsSolved = CubeManipulator.isSolved(scrambledCube)
            // console.log(`Scrambled cube is solved: ${scrambledCubeIsSolved}`)
            // // test randoms
            // Randomizer.testRandoms(1, 10, 50)
            // // output new (solved) cube
            // const cube = new Cube()
            // console.log("Orig Cube:")
            // console.log(CubePresentor.getConsoleRepresentation(cube))
            // console.log("\r\n")
            // // test from new to single rotation of each type
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