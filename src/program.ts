import { CubeCreator } from "./cube-creator";
import { CubePresentor } from "./cube-presentor";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver")
        const cube = CubeCreator.getSolvedCube()
        //console.log(CubePresentor.getSerializedVerbose(cube))
        const cubeForConsole = CubePresentor.getConsoleRepresentation(cube)
        console.log(cubeForConsole)
    }
}