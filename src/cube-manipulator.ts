import { Cube, Face, Color } from "./types";
import { CubeCreator } from "./cube-creator";

export class CubeManipulator {
    
    static rotateTopRight = (cube : Cube) : Cube => {
        
        const rightTopLeft = cube.right.topLeft
        const rightTop = cube.right.top
        const rightTopRight = cube.right.topRight

        cube.right.topLeft = cube.back.topLeft 
        cube.right.top = cube.back.top
        cube.right.topRight = cube.back.topRight

        cube.back.topLeft = cube.left.topLeft
        cube.back.top = cube.left.top
        cube.back.topRight = cube.left.topRight

        cube.left.topLeft = cube.front.topLeft
        cube.left.top = cube.front.top
        cube.left.topRight = cube.front.topRight

        cube.front.topLeft = rightTopLeft
        cube.front.top = rightTop
        cube.front.topRight = rightTopRight

        return cube
    }   
}
