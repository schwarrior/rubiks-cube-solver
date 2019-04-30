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
        for (let rotateIndex = 0; rotateIndex < 6; rotateIndex ++) {
            scube = CubeManipulator.rotateOnce(cube, rotateIndex)
            console.log(CubePresentor.getConsoleRepresentation(scube))
            console.log("\r\n")
        }

        console.log("Done")

    }
}