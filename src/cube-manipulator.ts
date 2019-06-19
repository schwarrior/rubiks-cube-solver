import { Cube } from "./cube";
import { CubeRotators, CubeRotator } from "./cube-rotators"
import { Randomizer } from "./randomizer";
import { CubePresentor } from "./cube-presentor";
import { SettingManager } from "./setting-manager";

export class CubeManipulator {
        
    private static cubeRotators = CubeRotators

    private static moveHistory : Array<string>

    static rotateOnce = (cube : Cube, rotationIndex : number) => {
        const r = CubeManipulator.cubeRotators[rotationIndex]
        console.log(r.description)
        const rCube = r.rotate(cube)
        return rCube
    }

    static scramble = (cube : Cube) : Cube => {
        const minscrablemoves = parseInt(SettingManager.getSetting("minscrablemoves"), 10)
        const maxscrablemoves = parseInt(SettingManager.getSetting("maxscrablemoves"), 10)
        const scrambleMoveCount = Randomizer.getRandomInt(minscrablemoves, maxscrablemoves)
        console.log(`Creating scrambled cube with ${scrambleMoveCount} random moves`)
        let scube = new Cube(cube)
        for (let moveIndex = 0; moveIndex < scrambleMoveCount; moveIndex++) {
            const rotatorIndex = Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1)
            const rotator = CubeManipulator.cubeRotators[rotatorIndex]
            //if (outputMoves) { console.log(`Scramble move ${moveIndex + 1} of ${scrambleMoveCount}: ${rotator.description}`) }
            scube = rotator.rotate(scube)
        }
        return scube
    }   

    static solve = (cube: Cube) : Cube => {
        const outputmovemodulus = parseInt(SettingManager.getSetting("outputmovemodulus"), 10)
        const outputformattedcube = (SettingManager.getSetting("outputformattedcube").toLowerCase() === "true")
        console.log(`Begin solving cube (status every ${outputmovemodulus} moves)`)
        CubeManipulator.moveHistory = new Array<string>()
        let topScoringCube = new MoveEvaluation()
        topScoringCube.cubeId = CubePresentor.removeWhitespace(cube.toString())
        topScoringCube.solutionScore = CubeManipulator.getSolutionScore(cube)
        let moveCount = 0
        while (topScoringCube.solutionScore < CubeManipulator.solvedScore) {   
            const fromCube = new Cube(topScoringCube.cubeId)
            const moveEvalArray = CubeManipulator.getMoveEvaluationArray()
            //make every possible move and place into move array
            for (let moveIndex = 0; moveIndex < moveEvalArray.length; moveIndex ++) {
                const move = moveEvalArray[moveIndex]
                const moveCube = move.rotator.rotate(fromCube)
                move.cubeId = CubePresentor.removeWhitespace(moveCube.toString())
                move.isDupe = (CubeManipulator.moveHistory.indexOf(move.cubeId) > -1)
                if (move.isDupe) {
                    move.solutionScore = -1
                    continue
                }
                move.solutionScore = CubeManipulator.getSolutionScore(moveCube)
            }
            //evaluate moves
            let selectedMove = moveEvalArray[0]
            for (let moveIndex = 0; moveIndex < moveEvalArray.length; moveIndex ++) {
                const move = moveEvalArray[moveIndex]
                if (move.solutionScore > selectedMove.solutionScore) {selectedMove = move}
            }
            topScoringCube = selectedMove
            moveCount ++
            CubeManipulator.moveHistory.push(topScoringCube.cubeId)
            // tslint:disable-next-line:max-line-length
            if (moveCount % outputmovemodulus === 0) { 
                console.log(`Move ${moveCount}: scoring ${topScoringCube.solutionScore} with ${topScoringCube.rotator.description}`)
                if (outputformattedcube) {
                    const tempCube = new Cube(topScoringCube.cubeId)
                    console.log(CubePresentor.getConsoleRepresentation(tempCube))
                } else {console.log(topScoringCube.cubeId)}
            }
        }
        console.log(`Solution found in ${moveCount} moves`)
        const solvedCube = new Cube(topScoringCube.cubeId)
        return solvedCube
    }

    static solvedScore = 24

    static getSolutionScore(moveCube: Cube): number {
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
