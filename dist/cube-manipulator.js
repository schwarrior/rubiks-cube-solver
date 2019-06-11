"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cube_1 = require("./cube");
var cube_rotators_1 = require("./cube-rotators");
var randomizer_1 = require("./randomizer");
var cube_presentor_1 = require("./cube-presentor");
var CubeManipulator = /** @class */ (function () {
    function CubeManipulator() {
    }
    CubeManipulator.getSolutionScore = function (moveCube) {
        var c = moveCube;
        var score = 0;
        if (c.front.center === c.front.topLeft) {
            score++;
        }
        if (c.front.center === c.front.top) {
            score++;
        }
        if (c.front.center === c.front.topRight) {
            score++;
        }
        if (c.front.center === c.front.left) {
            score++;
        }
        if (c.front.center === c.front.right) {
            score++;
        }
        if (c.front.center === c.front.bottomLeft) {
            score++;
        }
        if (c.front.center === c.front.bottom) {
            score++;
        }
        if (c.front.center === c.front.bottomRight) {
            score++;
        }
        if (c.top.center === c.top.topLeft) {
            score++;
        }
        if (c.top.center === c.top.top) {
            score++;
        }
        if (c.top.center === c.top.topRight) {
            score++;
        }
        if (c.top.center === c.top.left) {
            score++;
        }
        if (c.top.center === c.top.right) {
            score++;
        }
        if (c.top.center === c.top.bottomLeft) {
            score++;
        }
        if (c.top.center === c.top.bottom) {
            score++;
        }
        if (c.top.center === c.top.bottomRight) {
            score++;
        }
        if (c.right.center === c.right.topLeft) {
            score++;
        }
        if (c.right.center === c.right.top) {
            score++;
        }
        if (c.right.center === c.right.topRight) {
            score++;
        }
        if (c.right.center === c.right.left) {
            score++;
        }
        if (c.right.center === c.right.right) {
            score++;
        }
        if (c.right.center === c.right.bottomLeft) {
            score++;
        }
        if (c.right.center === c.right.bottom) {
            score++;
        }
        if (c.right.center === c.right.bottomRight) {
            score++;
        }
        return score;
    };
    CubeManipulator.cubeRotators = cube_rotators_1.CubeRotators;
    CubeManipulator.rotateOnce = function (cube, rotationIndex) {
        var r = CubeManipulator.cubeRotators[rotationIndex];
        console.log(r.description);
        var rCube = r.rotate(cube);
        return rCube;
    };
    CubeManipulator.minScrambleMoves = 50;
    CubeManipulator.maxScrambleMoves = 250;
    CubeManipulator.scramble = function (cube, outputMoves) {
        var scrambleMoveCount = randomizer_1.Randomizer.getRandomInt(CubeManipulator.minScrambleMoves, CubeManipulator.maxScrambleMoves);
        var scube = new cube_1.Cube(cube);
        for (var moveIndex = 0; moveIndex < scrambleMoveCount; moveIndex++) {
            var rotatorIndex = randomizer_1.Randomizer.getRandomInt(0, CubeManipulator.cubeRotators.length - 1);
            var rotator = CubeManipulator.cubeRotators[rotatorIndex];
            if (outputMoves) {
                console.log("Scramble move " + (moveIndex + 1) + " of " + scrambleMoveCount + ": " + rotator.description);
            }
            scube = rotator.rotate(scube);
        }
        return scube;
    };
    CubeManipulator.solve = function (cube, outputMoves) {
        CubeManipulator.moveHistory = new Array();
        var topScoringCube = new MoveEvaluation();
        topScoringCube.cubeId = cube_presentor_1.CubePresentor.removeWhitespace(cube.toString());
        topScoringCube.solutionScore = CubeManipulator.getSolutionScore(cube);
        var moveCount = 0;
        while (topScoringCube.solutionScore < CubeManipulator.solvedScore) {
            var fromCube = new cube_1.Cube(topScoringCube.cubeId);
            var moveEvalArray = CubeManipulator.getMoveEvaluationArray();
            //make every possible move and place into move array
            for (var moveIndex = 0; moveIndex < moveEvalArray.length; moveIndex++) {
                var move = moveEvalArray[moveIndex];
                var moveCube = move.rotator.rotate(fromCube);
                move.cubeId = cube_presentor_1.CubePresentor.removeWhitespace(moveCube.toString());
                move.isDupe = (CubeManipulator.moveHistory.indexOf(move.cubeId) > -1);
                if (move.isDupe) {
                    move.solutionScore = -1;
                    continue;
                }
                move.solutionScore = CubeManipulator.getSolutionScore(moveCube);
            }
            //evaluate moves
            var selectedMove = moveEvalArray[0];
            for (var moveIndex = 0; moveIndex < moveEvalArray.length; moveIndex++) {
                var move = moveEvalArray[moveIndex];
                if (move.solutionScore > selectedMove.solutionScore) {
                    selectedMove = move;
                }
            }
            topScoringCube = selectedMove;
            moveCount++;
            CubeManipulator.moveHistory.push(topScoringCube.cubeId);
            // tslint:disable-next-line:max-line-length
            if (outputMoves) {
                console.log("Move " + moveCount + ": scoring " + topScoringCube.solutionScore + " with " + topScoringCube.rotator.description + " (" + topScoringCube.cubeId + ")");
            }
        }
        console.log("Solution found in " + moveCount + " moves");
        var solvedCube = new cube_1.Cube(topScoringCube.cubeId);
        return solvedCube;
    };
    CubeManipulator.solvedScore = 24;
    CubeManipulator.getMoveEvaluationArray = function () {
        var mevs = new Array();
        CubeManipulator.cubeRotators.forEach(function (rotator) {
            var mev = {
                cubeId: null,
                rotator: rotator,
                solutionScore: -1,
                isDupe: null
            };
            mevs.push(mev);
        });
        return mevs;
    };
    return CubeManipulator;
}());
exports.CubeManipulator = CubeManipulator;
var MoveEvaluation = /** @class */ (function () {
    function MoveEvaluation() {
    }
    return MoveEvaluation;
}());
//# sourceMappingURL=cube-manipulator.js.map