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
        const rCube = new Cube(cube)

        rCube.front.left = cube.right.left
        rCube.front.center = cube.right.center
        rCube.front.right = cube.right.right

        rCube.left.left = cube.front.left 
        rCube.left.center = cube.front.center
        rCube.left.right = cube.front.right

        rCube.back.left = cube.left.left
        rCube.back.center = cube.left.center
        rCube.back.right = cube.left.right

        rCube.right.left = cube.back.left
        rCube.right.center = cube.back.center
        rCube.right.right = cube.back.right

        return rCube
    }
}

class CubeRotateMiddleRowCounterclockwise implements CubeRotator {
    description = "Rotate middle row counterclockwise"
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.front.left = cube.left.left
        rCube.front.center = cube.left.center
        rCube.front.right = cube.left.right

        rCube.right.left = cube.front.left
        rCube.right.center = cube.front.center
        rCube.right.right = cube.front.right

        rCube.back.left = cube.right.left
        rCube.back.center = cube.right.center
        rCube.back.right = cube.right.right

        rCube.left.left = cube.back.left 
        rCube.left.center = cube.back.center
        rCube.left.right = cube.back.right

        return rCube
    }
}

class CubeRotateBottomRowClockwise implements CubeRotator {
    description = "Rotate bottom row clockwise"
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.front.bottomLeft = cube.right.bottomLeft
        rCube.front.bottom = cube.right.bottom
        rCube.front.bottomRight = cube.right.bottomRight

        rCube.left.bottomLeft = cube.front.bottomLeft 
        rCube.left.bottom = cube.front.bottom
        rCube.left.bottomRight = cube.front.bottomRight

        rCube.back.bottomLeft = cube.left.bottomLeft
        rCube.back.bottom = cube.left.bottom
        rCube.back.bottomRight = cube.left.bottomRight

        rCube.right.bottomLeft = cube.back.bottomLeft
        rCube.right.bottom = cube.back.bottom
        rCube.right.bottomRight = cube.back.bottomRight

        return rCube
    }
}

class CubeRotateBottomRowCounterclockwise implements CubeRotator {
    description = "Rotate bottom row counterclockwise"
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.front.bottomLeft = cube.left.bottomLeft
        rCube.front.bottom = cube.left.bottom
        rCube.front.bottomRight = cube.left.bottomRight

        rCube.right.bottomLeft = cube.front.bottomLeft
        rCube.right.bottom = cube.front.bottom
        rCube.right.bottomRight = cube.front.bottomRight

        rCube.back.bottomLeft = cube.right.bottomLeft
        rCube.back.bottom = cube.right.bottom
        rCube.back.bottomRight = cube.right.bottomRight

        rCube.left.bottomLeft = cube.back.bottomLeft 
        rCube.left.bottom = cube.back.bottom
        rCube.left.bottomRight = cube.back.bottomRight

        return rCube
    }
}





class CubeRotateLeftColumnClockwiseDown implements CubeRotator {
    description = "Rotate left column clockwise down"
    rotate = (cube : Cube) : Cube => {
        const rCube = new Cube(cube)

        rCube.front.topLeft = cube.top.topLeft
        rCube.front.left = cube.top.left
        rCube.front.bottomLeft = cube.top.bottomLeft

        rCube.bottom.topLeft = cube.front.topLeft 
        rCube.bottom.left = cube.front.left
        rCube.bottom.bottomLeft = cube.front.bottomLeft

        rCube.back.topLeft = cube.bottom.topLeft
        rCube.back.left = cube.bottom.left
        rCube.back.bottomLeft = cube.bottom.bottomLeft

        rCube.top.topLeft = cube.back.topLeft
        rCube.top.left = cube.back.left
        rCube.top.bottomLeft = cube.back.bottomLeft

        return rCube
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