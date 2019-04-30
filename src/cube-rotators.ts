import { Cube } from "./types";

export interface CubeRotator {
    rotate (cube : Cube) : Cube 
}

export class CubeRotatorDescribed {
    description : string
    rotator : CubeRotator
}

export class CubeRotateTopRight implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.left.topLeft = cube.front.topLeft 
        rCube.left.top = cube.front.top
        rCube.left.topRight = cube.front.topRight

        rCube.front.topLeft = cube.right.topLeft
        rCube.front.top = cube.right.top
        rCube.front.topRight = cube.right.topRight

        rCube.right.topLeft = cube.back.topLeft
        rCube.right.top = cube.back.top
        rCube.right.topRight = cube.back.topRight

        rCube.back.topLeft = cube.left.topLeft
        rCube.back.top = cube.left.top
        rCube.back.topRight = cube.left.topRight

        return rCube
    }
}

export class CubeRotateTopLeft implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        const rightTopLeft = cube.right.topLeft
        const rightTop = cube.right.top
        const rightTopRight = cube.right.topRight

        rCube.right.topLeft = cube.back.topLeft 
        rCube.right.top = cube.back.top
        rCube.right.topRight = cube.back.topRight

        rCube.back.topLeft = cube.left.topLeft
        rCube.back.top = cube.left.top
        rCube.back.topRight = cube.left.topRight

        rCube.left.topLeft = cube.front.topLeft
        rCube.left.top = cube.front.top
        rCube.left.topRight = cube.front.topRight

        rCube.front.topLeft = rightTopLeft
        rCube.front.top = rightTop
        rCube.front.topRight = rightTopRight

        return rCube
    }
}

export class CubeRotateMiddleRight implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateMiddleLeft implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateBottomRight implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateBottomLeft implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateLeftUp implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateLeftDown implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateCenterUp implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateCenterDown implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateRightUp implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export class CubeRotateRightDown implements CubeRotator {
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export const CubeRotators : Array<CubeRotatorDescribed> = [
    {description : "Rotate Top Right", rotator: new CubeRotateTopRight()}
]