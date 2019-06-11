
// //create a new  cube
// const newCube = new Cube()
// console.log("New cube:")
// console.log(newCube.toString())
// console.log("\r\n")
// console.log(CubePresentor.removeWhitespace(newCube.toString()))

// //test parsing cube from string
// const decodedNewCube = new Cube(newCube.toString())
// console.log("Decoded new cube:")
// console.log(CubePresentor.getConsoleRepresentation(decodedNewCube))
// console.log("\r\n")
// const decodedCube = new Cube(scrambledCube.toString())
// console.log("Decoded cube:")
// console.log(CubePresentor.getConsoleRepresentation(decodedCube))
// console.log("\r\n")
// const revCubeStr = scrambledCube.toString().split("").reverse().join("")
// const revDecoded = new Cube(revCubeStr.toString())
// console.log("Reverse decoded cube:")
// console.log(CubePresentor.getConsoleRepresentation(revDecoded))
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


// // test cube scoring
// console.log("newCube:")
// console.log(newCube.toString())
// const newCubeScore = CubeManipulator.getSolutionScore(newCube)
// console.log(`newCubeScore: ${newCubeScore}`)
// const isSolved = (newCubeScore === CubeManipulator.solvedScore)
// console.log(`isSolved: ${isSolved}`)