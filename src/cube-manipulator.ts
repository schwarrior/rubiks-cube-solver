import { Cube } from "./types";
import { CubeRotators } from "./cube-rotators"

export class CubeManipulator {
    
    static cubeRotators = CubeRotators

    static scramble = (cube : Cube) : Cube => {
        //const scube = new Cube(cube)
        //const rotateTopRight = new CubeRotateTopRight()
        //return rotateTopRight.rotate(cube)
        const r = CubeManipulator.cubeRotators[0]
        console.log(r.description)
        const rCube = r.rotator.rotate(cube)
        return rCube
        
        //todo implement rotations
        //todo test rotations
        //todo implment random rotations
    }   
}
