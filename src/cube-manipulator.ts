import { Cube } from "./types";
import { CubeRotators } from "./cube-rotators"
import { Randomizer } from "./randomizer";

export class CubeManipulator {
    
    private static cubeRotators = CubeRotators

    static rotateOnce = (cube : Cube, rotationIndex : number) => {
        const r = CubeManipulator.cubeRotators[rotationIndex]
        console.log(r.description)
        const rCube = r.rotate(cube)
        return rCube
    }

    static scramble = (cube : Cube) : Cube => {
        const scrambleMoveCount = Randomizer.getRandomInt(50, 250)
        let scube = new Cube(cube)
        for (let moveIndex = 0; moveIndex < scrambleMoveCount; moveIndex++) {
            const rotatorIndex = Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1)
            const rotator = CubeManipulator.cubeRotators[rotatorIndex]
            console.log(`Scramble move ${moveIndex + 1} of ${scrambleMoveCount}: ${rotator.description}`)
            scube = rotator.rotate(scube)
        }
        return scube
    }   
}
