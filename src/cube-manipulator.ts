import { Cube } from "./types";

export interface CubeRotation {
    rotate (cube : Cube) : Cube 
}

export class CubeRotateTopRight implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
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

export class CubeRotateTopLeft implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateMiddleRight implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateMiddleLeft implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateBottomRight implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateBottomLeft implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateLeftUp implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateLeftDown implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateCenterUp implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateCenterDown implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateRightUp implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateRightDown implements CubeRotation {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeManipulator {
    
    static cubeRotations : Array<CubeRotation> = [
        new CubeRotateTopRight(),
        new CubeRotateTopLeft(),
        new CubeRotateMiddleRight(),
        new CubeRotateMiddleLeft(),
        new CubeRotateBottomRight(),
        new CubeRotateBottomLeft(),
        new CubeRotateLeftUp(),
        new CubeRotateLeftDown(),
        new CubeRotateCenterUp(),
        new CubeRotateCenterDown(),
        new CubeRotateRightUp(),
        new CubeRotateRightDown()
    ]

    static scrabble = (cube : Cube) : Cube => {
        const rotateTopRight = new CubeRotateTopRight()
        return rotateTopRight.rotate(cube)
        //return CubeManipulator.cubeRotations[0].rotate(cube)
        
        //todo implement rotations
        //todo test rotations
        //todo implment random rotations
    }   
}
