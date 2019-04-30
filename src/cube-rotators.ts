import { Cube } from "./types";

interface CubeRotator {
    description : string
    rotate (cube : Cube) : Cube 
}

class CubeRotateTopRowClockwise implements CubeRotator {
    description = "Rotate top row clockwise"
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.front.topLeft = cube.right.topLeft
        rCube.front.top = cube.right.top
        rCube.front.topRight = cube.right.topRight

        rCube.left.topLeft = cube.front.topLeft 
        rCube.left.top = cube.front.top
        rCube.left.topRight = cube.front.topRight

        rCube.back.topLeft = cube.left.topLeft
        rCube.back.top = cube.left.top
        rCube.back.topRight = cube.left.topRight

        rCube.right.topLeft = cube.back.topLeft
        rCube.right.top = cube.back.top
        rCube.right.topRight = cube.back.topRight

        return rCube
    }
}

class CubeRotateTopRowCounterclockwise implements CubeRotator {
    description = "Rotate top row counterclockwise"
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.front.topLeft = cube.left.topLeft
        rCube.front.top = cube.left.top
        rCube.front.topRight = cube.left.topRight

        rCube.right.topLeft = cube.front.topLeft
        rCube.right.top = cube.front.top
        rCube.right.topRight = cube.front.topRight

        rCube.back.topLeft = cube.right.topLeft
        rCube.back.top = cube.right.top
        rCube.back.topRight = cube.right.topRight

        rCube.left.topLeft = cube.back.topLeft 
        rCube.left.top = cube.back.top
        rCube.left.topRight = cube.back.topRight

        return rCube
    }
}

class CubeRotateMiddleRowClockwise implements CubeRotator {
    description = "Rotate middle row clockwise"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateMiddleRowCounterclockwise implements CubeRotator {
    description = "Rotate middle row counterclockwise"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateBottomRowClockwise implements CubeRotator {
    description = "Rotate bottom row clockwise"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateBottomRowCounterclockwise implements CubeRotator {
    description = "Rotate bottom row counterclockwise"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateLeftColumnClockwiseDown implements CubeRotator {
    description = "Rotate left column clockwise down"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateLeftColumnCounterclockwiseUp implements CubeRotator {
    description = "Rotate left column counterclockwise up"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateCenterColumnClockwiseDown implements CubeRotator {
    description = "Rotate center column clockwise down"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateCenterColumnCounterclockwiseUp implements CubeRotator {
    description = "Rotate center column clockwise down"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateRightColumnClockwiseDown implements CubeRotator {
    description = "Rotate right column clockwise down"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

class CubeRotateRightColumnCounterclockwiseUp implements CubeRotator {
    description = "Rotate right column counterclockwise up"
    rotate = (cube : Cube) : Cube => {
        throw new Error("Not Implmented")
    }
}

export const CubeRotators : Array<CubeRotator> = [
    new CubeRotateTopRowClockwise(),
    new CubeRotateTopRowCounterclockwise(),
    new CubeRotateMiddleRowClockwise(),
    new CubeRotateMiddleRowCounterclockwise(),
    new CubeRotateBottomRowClockwise(),
    new CubeRotateBottomRowCounterclockwise(),
    
    new CubeRotateLeftColumnClockwiseDown(),
    new CubeRotateLeftColumnCounterclockwiseUp(),
    new CubeRotateCenterColumnClockwiseDown(),
    new CubeRotateCenterColumnCounterclockwiseUp(),
    new CubeRotateRightColumnClockwiseDown(),
    new CubeRotateRightColumnCounterclockwiseUp(),
]