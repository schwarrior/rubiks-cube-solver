import { CubeCreator } from "./cube-creator";
import { CubePresentor } from "./cube-presentor";
import { CubeManipulator } from "./cube-manipulator";
import { Cube } from "./types";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver\r\n")

        const cube = new Cube()
        console.log("Orig Cube:")
        console.log(CubePresentor.getConsoleRepresentation(cube))
        console.log("\r\n")

        let scube : Cube

        scube = CubeManipulator.rotateOnce(cube, 0)
        console.log(CubePresentor.getConsoleRepresentation(scube))
        console.log("\r\n")

        scube = CubeManipulator.rotateOnce(cube, 1)
        console.log(CubePresentor.getConsoleRepresentation(scube))
        console.log("\r\n")

        console.log("Done")

    }
}