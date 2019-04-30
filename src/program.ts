import { CubeCreator } from "./cube-creator";
import { CubePresentor } from "./cube-presentor";
import { CubeManipulator } from "./cube-manipulator";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver")
        console.log()

        const cube = CubeCreator.getNewCube()
        console.log("New Cube:")
        console.log(CubePresentor.getConsoleRepresentation(cube))
        console.log()

        const scube = CubeManipulator.rotateTopRight(cube)
        console.log("Scrambled Cube:")
        console.log(CubePresentor.getConsoleRepresentation(scube))
        console.log()

        console.log("Done")

    }
}