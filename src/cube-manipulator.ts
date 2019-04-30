import { Cube, Face, Color } from "./types";

export class CubeManipulator {
    
    getSolvedCube = () : Cube => {
        const front : Face = {
            bottom : Color.Yellow,
            bottomRight : Color.Yellow,
            right : Color.Yellow,
            topRight : Color.Yellow,
            top : Color.Yellow,
            topLeft : Color.Yellow,
            left : Color.Yellow,
            bottomLeft : Color.Yellow,
            center : Color.Yellow
        }
        const right : Face = {
            bottom : Color.Blue,
            bottomRight : Color.Blue,
            right : Color.Blue,
            topRight : Color.Blue,
            top : Color.Blue,
            topLeft : Color.Blue,
            left : Color.Blue,
            bottomLeft : Color.Blue,
            center : Color.Blue
        }
        const back : Face = {
            bottom : Color.White,
            bottomRight : Color.White,
            right : Color.White,
            topRight : Color.White,
            top : Color.White,
            topLeft : Color.White,
            left : Color.White,
            bottomLeft : Color.White,
            center : Color.White
        }
        const left : Face = {
            bottom : Color.Green,
            bottomRight : Color.Green,
            right : Color.Green,
            topRight : Color.Green,
            top : Color.Green,
            topLeft : Color.Green,
            left : Color.Green,
            bottomLeft : Color.Green,
            center : Color.Green
        }
        const top : Face = {
            bottom : Color.Red,
            bottomRight : Color.Red,
            right : Color.Red,
            topRight : Color.Red,
            top : Color.Red,
            topLeft : Color.Red,
            left : Color.Red,
            bottomLeft : Color.Red,
            center : Color.Red
        }
        const bottom : Face = {
            bottom : Color.Orange,
            bottomRight : Color.Orange,
            right : Color.Orange,
            topRight : Color.Orange,
            top : Color.Orange,
            topLeft : Color.Orange,
            left : Color.Orange,
            bottomLeft : Color.Orange,
            center : Color.Orange
        }
        return {
            front,
            right,
            back,
            left,
            top,
            bottom
        }
    }
}
