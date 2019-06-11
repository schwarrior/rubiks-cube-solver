import { CubePresentor } from "./cube-presentor";
import { CubeManipulator } from "./cube-manipulator";
import { Cube } from "./cube";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver")
        console.log("\r\n")

        //create a new  cube
        const newCube = new Cube()

        // create scrambled cube
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