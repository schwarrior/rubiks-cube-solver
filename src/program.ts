import { CubeManipulator } from "./cube-manipulator";

export class Program {
    run = () => {
        console.log("Rubik's Cube Solver")
        const cubeMan = new CubeManipulator()
        const cube = cubeMan.getSolvedCube()
        console.log(JSON.stringify(cube))
    }
}