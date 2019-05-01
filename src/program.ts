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

        //test parsing cube from string
        const decodedCube = new Cube(scrambledCube.toString())
        console.log("Decoded cube:")
        console.log(CubePresentor.getConsoleRepresentation(decodedCube))
        console.log("\r\n")
        const revCubeStr = scrambledCube.toString().split("").reverse().join("")
        const revDecoded = new Cube(revCubeStr.toString())
        console.log("Reverse decoded cube:")
        console.log(CubePresentor.getConsoleRepresentation(revDecoded))
        console.log("\r\n")

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

        console.log("Done")

    }
}