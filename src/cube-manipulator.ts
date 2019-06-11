import { Cube } from "./cube";
import { CubeRotators, CubeRotator } from "./cube-rotators"
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
        const topScoringCube = new MoveEvaluation()
        topScoringCube.cubeId = CubePresentor.removeWhitespace(cube.toString())
        topScoringCube.solutionScore = CubeManipulator.getSolutionScore(cube)
        let moveCount = 0
        while (topScoringCube.solutionScore < CubeManipulator.solvedScore) {   
            const fromCube = new Cube(topScoringCube.cubeId)
            const moveEvalArray = CubeManipulator.getMoveEvaluationArray()
            let topScoringMove = moveEvalArray[0]
            //make every possible move and place into move array
            for (let moveIndex = 0; moveIndex < moveEvalArray.length; moveIndex ++) {
                const move = moveEvalArray[moveIndex]
                const moveCube = move.rotator.rotate(fromCube)
                move.cubeId = CubePresentor.removeWhitespace(moveCube.toString())
                move.isDupe = (CubeManipulator.moveHistory.indexOf(move.cubeId) > -1)
                if (move.isDupe) {continue}
                if (topScoringCube.cubeId === CubePresentor.removeWhitespace(fromCube.toString())) {
                    topScoringCube.cubeId = move.cubeId
                }
                move.solutionScore = CubeManipulator.getSolutionScore(moveCube)
                if (move.solutionScore > topScoringMove.solutionScore) {topScoringMove = move}
            }
            moveCount ++
            CubeManipulator.moveHistory.push(topScoringMove.cubeId)
            // tslint:disable-next-line:max-line-length
            if (outputMoves) { console.log(`Move ${moveCount}: scoring ${topScoringMove.solutionScore} with ${topScoringMove.rotator.description} (${topScoringMove.cubeId})`) }
        }
        console.log(`Solution found in ${moveCount} moves`)
        const solvedCube = new Cube(topScoringCube.cubeId)
        return solvedCube
    }

    // static isSolved = (candidateCube : Cube) : boolean => {
    //     const c = candidateCube
        
    //     if (c.front.center !== c.front.topLeft) {return false}
    //     if (c.front.center !== c.front.top) {return false}
    //     if (c.front.center !== c.front.topRight) {return false}
    //     if (c.front.center !== c.front.left) {return false}
    //     if (c.front.center !== c.front.right) {return false}
    //     if (c.front.center !== c.front.bottomLeft) {return false}
    //     if (c.front.center !== c.front.bottom) {return false}
    //     if (c.front.center !== c.front.bottomRight) {return false}

    //     if (c.top.center !== c.top.topLeft) {return false}
    //     if (c.top.center !== c.top.top) {return false}
    //     if (c.top.center !== c.top.topRight) {return false}
    //     if (c.top.center !== c.top.left) {return false}
    //     if (c.top.center !== c.top.right) {return false}
    //     if (c.top.center !== c.top.bottomLeft) {return false}
    //     if (c.top.center !== c.top.bottom) {return false}
    //     if (c.top.center !== c.top.bottomRight) {return false}

    //     if (c.right.center !== c.right.topLeft) {return false}
    //     if (c.right.center !== c.right.top) {return false}
    //     if (c.right.center !== c.right.topRight) {return false}
    //     if (c.right.center !== c.right.left) {return false}
    //     if (c.right.center !== c.right.right) {return false}
    //     if (c.right.center !== c.right.bottomLeft) {return false}
    //     if (c.right.center !== c.right.bottom) {return false}
    //     if (c.right.center !== c.right.bottomRight) {return false}

    //     return true
    // }

    private static solvedScore = 24

    private static getSolutionScore(moveCube: Cube): number {
        const c = moveCube
        let score = 0

        if (c.front.center === c.front.topLeft) {score++}
        if (c.front.center === c.front.top) {score++}
        if (c.front.center === c.front.topRight) {score++}
        if (c.front.center === c.front.left) {score++}
        if (c.front.center === c.front.right) {score++}
        if (c.front.center === c.front.bottomLeft) {score++}
        if (c.front.center === c.front.bottom) {score++}
        if (c.front.center === c.front.bottomRight) {score++}
        
        if (c.top.center === c.top.topLeft) {score++}
        if (c.top.center === c.top.top) {score++}
        if (c.top.center === c.top.topRight) {score++}
        if (c.top.center === c.top.left) {score++}
        if (c.top.center === c.top.right) {score++}
        if (c.top.center === c.top.bottomLeft) {score++}
        if (c.top.center === c.top.bottom) {score++}
        if (c.top.center === c.top.bottomRight) {score++}
        
        if (c.right.center === c.right.topLeft) {score++}
        if (c.right.center === c.right.top) {score++}
        if (c.right.center === c.right.topRight) {score++}
        if (c.right.center === c.right.left) {score++}
        if (c.right.center === c.right.right) {score++}
        if (c.right.center === c.right.bottomLeft) {score++}
        if (c.right.center === c.right.bottom) {score++}
        if (c.right.center === c.right.bottomRight) {score++}

        return score
    }

    private static getMoveEvaluationArray = () : Array<MoveEvaluation> => {
        const mevs = new Array<MoveEvaluation>()
        CubeManipulator.cubeRotators.forEach( (rotator : CubeRotator) => {
            const mev : MoveEvaluation = {
                cubeId: null,
                rotator : rotator,
                solutionScore: -1,
                isDupe: null
            }
            mevs.push(mev)    
        })
        return mevs
    }

}

class MoveEvaluation {
    cubeId : string
    rotator : CubeRotator
    solutionScore : number
    isDupe : boolean
}
