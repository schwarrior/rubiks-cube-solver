import { Face, Color, EnumUtilities } from "./types"
import { CubePresentor } from "./cube-presentor"

export class Cube {

    constructor(fromCube? : Cube | string) {
        if (!fromCube) { 
            this.reset()
            return
        } 
        if (typeof fromCube === "object") {
            this.front = new Face()
            Object.assign(this.front, fromCube.front)
            this.right = new Face()
            Object.assign(this.right, fromCube.right)
            this.back = new Face()
            Object.assign(this.back, fromCube.back)
            this.left = new Face()
            Object.assign(this.left, fromCube.left)
            this.top = new Face()
            Object.assign(this.top, fromCube.top)
            this.bottom = new Face()
            Object.assign(this.bottom, fromCube.bottom)
            return
        }
        //its a string represenation
        this.importFromString(fromCube)
    }

    front : Face
    right : Face
    back : Face
    left : Face
    top : Face
    bottom : Face

    private reset = () => {

        //todo consider refactor reset to use importfromstring with solvedcubeid values

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
        this.front = front
        this.right = right
        this.back = back
        this.left = left
        this.top = top
        this.bottom = bottom
    }

    public toString = () : string => {
        const r0 = `   ${this.top.topLeft}${this.top.top}${this.top.topRight}`
        const r1 = `   ${this.top.left}${this.top.center}${this.top.right}`
        const r2 = `   ${this.top.bottomLeft}${this.top.bottom}${this.top.bottomRight}`

        // tslint:disable:max-line-length
        const r3 = `${this.left.topLeft}${this.left.top}${this.left.topRight}${this.front.topLeft}${this.front.top}${this.front.topRight}${this.right.topLeft}${this.right.top}${this.right.topRight}  ${this.back.topLeft}${this.back.top}${this.back.topRight}`
        const r4 = `${this.left.left}${this.left.center}${this.left.right}${this.front.left}${this.front.center}${this.front.right}${this.right.left}${this.right.center}${this.right.right}  ${this.back.left}${this.back.center}${this.back.right}`
        const r5 = `${this.left.bottomLeft}${this.left.bottom}${this.left.bottomRight}${this.front.bottomLeft}${this.front.bottom}${this.front.bottomRight}${this.right.bottomLeft}${this.right.bottom}${this.right.bottomRight}  ${this.back.bottomLeft}${this.back.bottom}${this.back.bottomRight}`

        const r6 = `   ${this.bottom.topLeft}${this.bottom.top}${this.bottom.topRight}`
        const r7 = `   ${this.bottom.left}${this.bottom.center}${this.bottom.right}`
        const r8 = `   ${this.bottom.bottomLeft}${this.bottom.bottom}${this.bottom.bottomRight}`
        
        const concat = `${r0}\r\n${r1}\r\n${r2}\r\n${r3}\r\n${r4}\r\n${r5}\r\n${r6}\r\n${r7}\r\n${r8}`
        return concat
    }

    private importFromString = (cubeString : string) => {
        const cleanCubeStr = CubePresentor.removeWhitespace(cubeString)
        const s : Array<string> = cleanCubeStr.split("")

        this.top = new Face()    
        this.top.topLeft = EnumUtilities.getColor(s[0])
        this.top.top = EnumUtilities.getColor(s[1])
        this.top.topRight = EnumUtilities.getColor(s[2])
        this.top.left = EnumUtilities.getColor(s[3])
        this.top.center = EnumUtilities.getColor(s[4])
        this.top.right = EnumUtilities.getColor(s[5])
        this.top.bottomLeft = EnumUtilities.getColor(s[6])
        this.top.bottom = EnumUtilities.getColor(s[7])
        this.top.bottomRight = EnumUtilities.getColor(s[8])

        this.left = new Face()
        this.front = new Face()
        this.right = new Face()
        this.back = new Face()

        this.left.topLeft = EnumUtilities.getColor(s[9])
        this.left.top = EnumUtilities.getColor(s[10])
        this.left.topRight = EnumUtilities.getColor(s[11])
        this.front.topLeft = EnumUtilities.getColor(s[12])
        this.front.top = EnumUtilities.getColor(s[13])
        this.front.topRight = EnumUtilities.getColor(s[14])
        this.right.topLeft = EnumUtilities.getColor(s[15])
        this.right.top = EnumUtilities.getColor(s[16])
        this.right.topRight = EnumUtilities.getColor(s[17])
        this.back.topLeft = EnumUtilities.getColor(s[18])
        this.back.top = EnumUtilities.getColor(s[19])
        this.back.topRight = EnumUtilities.getColor(s[20])

        this.left.left = EnumUtilities.getColor(s[21])
        this.left.center = EnumUtilities.getColor(s[22])
        this.left.right = EnumUtilities.getColor(s[23])
        this.front.left = EnumUtilities.getColor(s[24])
        this.front.center = EnumUtilities.getColor(s[25])
        this.front.right = EnumUtilities.getColor(s[26])
        this.right.left = EnumUtilities.getColor(s[27])
        this.right.center = EnumUtilities.getColor(s[28])
        this.right.right = EnumUtilities.getColor(s[29])
        
        this.back.left = EnumUtilities.getColor(s[30])
        this.back.center = EnumUtilities.getColor(s[31])
        this.back.right = EnumUtilities.getColor(s[32])

        this.left.bottomLeft = EnumUtilities.getColor(s[33])
        this.left.bottom = EnumUtilities.getColor(s[34])
        this.left.bottomRight = EnumUtilities.getColor(s[35])
        this.front.bottomLeft = EnumUtilities.getColor(s[36])
        this.front.bottom = EnumUtilities.getColor(s[37])
        this.front.bottomRight = EnumUtilities.getColor(s[38])
        this.right.bottomLeft = EnumUtilities.getColor(s[39])
        this.right.bottom = EnumUtilities.getColor(s[40])
        this.right.bottomRight = EnumUtilities.getColor(s[41])

        this.back.bottomLeft = EnumUtilities.getColor(s[42])
        this.back.bottom = EnumUtilities.getColor(s[43])
        this.back.bottomRight = EnumUtilities.getColor(s[44])

        this.bottom = new Face()
        this.bottom.topLeft = EnumUtilities.getColor(s[45])
        this.bottom.top = EnumUtilities.getColor(s[46])
        this.bottom.topRight = EnumUtilities.getColor(s[47])

        this.bottom.left = EnumUtilities.getColor(s[48])
        this.bottom.center = EnumUtilities.getColor(s[49])
        this.bottom.right = EnumUtilities.getColor(s[50])
        
        this.bottom.bottomLeft = EnumUtilities.getColor(s[51])
        this.bottom.bottom = EnumUtilities.getColor(s[52])
        this.bottom.bottomRight = EnumUtilities.getColor(s[53])
    }

    static solvedCubeId = 
        "   RRR" +
        "   RRR" +
        "   RRR" +
        "GGGYYYBBB  WWW" +
        "GGGYYYBBB  WWW" +
        "GGGYYYBBB  WWW" +
        "   OOO" +
        "   OOO" +
        "   OOO"

    static solvedCubeIdTerse = "RRRRRRRRRGGGYYYBBBWWWGGGYYYBBBWWWGGGYYYBBBWWWOOOOOOOOO"
}