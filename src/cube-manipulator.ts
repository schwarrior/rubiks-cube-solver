import { Cube } from "./cube";
import { CubeRotators } from "./cube-rotators"
import { Randomizer } from "./randomizer";
import { CubePresentor } from "./cube-presentor";

export class CubeManipulator {
    
    private static cubeRotators = CubeRotators

    private static moveHistory : Array<string>

    static rotateOnce = (cube : Cube, rotationIndex : number) => {
        const r = CubeManipulator.cubeRotators[rotationIndex]
        console.log(r.description)
        const rCube = r.rotate(cube)
        return rCube
    }

    private static minScrambleMoves = 50
    private static maxScrambleMoves = 250

    static scramble = (cube : Cube, outputMoves? : boolean) : Cube => {
        const scrambleMoveCount = Randomizer.getRandomInt(CubeManipulator.minScrambleMoves, CubeManipulator.maxScrambleMoves)
        let scube = new Cube(cube)
        for (let moveIndex = 0; moveIndex < scrambleMoveCount; moveIndex++) {
            const rotatorIndex = Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1)
            const rotator = CubeManipulator.cubeRotators[rotatorIndex]
            if (outputMoves) { console.log(`Scramble move ${moveIndex + 1} of ${scrambleMoveCount}: ${rotator.description}`) }
            scube = rotator.rotate(scube)
        }
        return scube
    }   

    static solve = (cube: Cube, outputMoves? : boolean) : Cube => {
        CubeManipulator.moveHistory = new Array<string>()
        let candidateCube = new Cube(cube)
        let moveCount = 0
        let isSolved = CubeManipulator.isSolved(candidateCube)
        while (!isSolved) {
            
            const rotatorIndex = Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1)
            const rotator = CubeManipulator.cubeRotators[rotatorIndex]
            candidateCube = rotator.rotate(candidateCube)
            const moveId = CubePresentor.removeWhitespace(candidateCube.toString())
            const dupeMove : boolean = (CubeManipulator.moveHistory.indexOf(moveId) > -1)
            if (dupeMove) {continue}
            moveCount ++
            CubeManipulator.moveHistory.push(moveId)
            if (outputMoves) { console.log(`Move ${moveCount}: ${rotator.description} (${moveId})`) }
            isSolved = CubeManipulator.isSolved(candidateCube)
        }
        console.log(`Solution found in ${moveCount} moves`)
        return candidateCube
    }

    static isSolved = (candidateCube : Cube) : boolean => {
        const c = candidateCube
        
        if (c.front.center !== c.front.topLeft) {return false}
        if (c.front.center !== c.front.top) {return false}
        if (c.front.center !== c.front.topRight) {return false}
        if (c.front.center !== c.front.left) {return false}
        if (c.front.center !== c.front.right) {return false}
        if (c.front.center !== c.front.bottomLeft) {return false}
        if (c.front.center !== c.front.bottom) {return false}
        if (c.front.center !== c.front.bottomRight) {return false}

        if (c.top.center !== c.top.topLeft) {return false}
        if (c.top.center !== c.top.top) {return false}
        if (c.top.center !== c.top.topRight) {return false}
        if (c.top.center !== c.top.left) {return false}
        if (c.top.center !== c.top.right) {return false}
        if (c.top.center !== c.top.bottomLeft) {return false}
        if (c.top.center !== c.top.bottom) {return false}
        if (c.top.center !== c.top.bottomRight) {return false}

        if (c.right.center !== c.right.topLeft) {return false}
        if (c.right.center !== c.right.top) {return false}
        if (c.right.center !== c.right.topRight) {return false}
        if (c.right.center !== c.right.left) {return false}
        if (c.right.center !== c.right.right) {return false}
        if (c.right.center !== c.right.bottomLeft) {return false}
        if (c.right.center !== c.right.bottom) {return false}
        if (c.right.center !== c.right.bottomRight) {return false}

        return true
    }

}
