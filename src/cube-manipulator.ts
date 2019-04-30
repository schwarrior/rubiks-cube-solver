import { Cube } from "./types";
import { CubeRotators } from "./cube-rotators"

export class CubeManipulator {
    
    static cubeRotators = CubeRotators

    static rotateOnce = (cube : Cube, rotationIndex : number) => {
        const r = CubeManipulator.cubeRotators[rotationIndex]
        console.log(r.description)
        const rCube = r.rotate(cube)
        return rCube
    }

    static scramble = (cube : Cube) : Cube => {
        throw new Error("Not implemented")
        //todo implment random rotations
    }   
}
