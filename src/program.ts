import { CubePresentor } from "./cube-presentor";
import { CubeManipulator } from "./cube-manipulator";
import { Cube } from "./types";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver")
        console.log("\r\n")

        //create a randomly scrambled cube
        const cube = new Cube()
        const scube = CubeManipulator.scramble(cube)
        console.log("Scrambled Cube:")
        console.log(CubePresentor.getConsoleRepresentation(scube))
        console.log("\r\n")

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

        console.log("Done")

    }
}