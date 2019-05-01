import { CubePresentor } from "./cube-presentor";
import { CubeManipulator } from "./cube-manipulator";
import { Cube } from "./cube";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver")
        console.log("\r\n")

        //create a randomly scrambled cube
        const newCube = new Cube()
        const scrambledCube = CubeManipulator.scramble(newCube)
        console.log("Scrambled cube:")
        console.log(CubePresentor.getConsoleRepresentation(scrambledCube))
        console.log("\r\n")

        // solve scrambled cube
        const solvedCube = CubeManipulator.solve(scrambledCube, true)
        console.log("Solved cube:")
        console.log(CubePresentor.getConsoleRepresentation(solvedCube))
        console.log("\r\n")

        console.log("Done")

    }
}