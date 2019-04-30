import { Cube } from "./types";

export class CubePresentor {
    
    static getSerializedVerbose = (cube : Cube) : string => {
        return JSON.stringify(cube)
    }

    static getConsoleRepresentation = (cube: Cube) : string => {

        //for console colorization codes
        //https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

        const r0 = `   ${cube.top.topLeft}${cube.top.top}${cube.top.topRight}   `
        const r1 = `   ${cube.top.left}${cube.top.center}${cube.top.right}   `
        const r2 = `   ${cube.top.bottomLeft}${cube.top.bottom}${cube.top.bottomRight}   `

        // tslint:disable:max-line-length
        const r3 = `${cube.left.topLeft}${cube.left.top}${cube.left.topRight}${cube.front.topLeft}${cube.front.top}${cube.front.topRight}${cube.right.topLeft}${cube.right.top}${cube.right.topRight}`
        const r4 = `${cube.left.left}${cube.left.center}${cube.left.right}${cube.front.left}${cube.front.center}${cube.front.right}${cube.right.left}${cube.right.center}${cube.right.right}`
        const r5 = `${cube.left.bottomLeft}${cube.left.bottom}${cube.left.bottomRight}${cube.front.bottomLeft}${cube.front.bottom}${cube.front.bottomRight}${cube.right.bottomLeft}${cube.right.bottom}${cube.right.bottomRight}`

        //todo consider flip bottom representation top-to-bottom to bottom-to-top
        const r6 = `   ${cube.bottom.topLeft}${cube.bottom.top}${cube.bottom.topRight}   `
        const r7 = `   ${cube.bottom.left}${cube.bottom.center}${cube.bottom.right}   `
        const r8 = `   ${cube.bottom.bottomLeft}${cube.bottom.bottom}${cube.bottom.bottomRight}   `
        
        //todo consider flip back representation left-to-right to right-to-left
        const r9 = `   ${cube.back.topLeft}${cube.back.top}${cube.back.topRight}   `
        const ra = `   ${cube.back.left}${cube.back.center}${cube.back.right}   `
        const rb = `   ${cube.back.bottomLeft}${cube.back.bottom}${cube.back.bottomRight}   `
        const c = `${r0}\r\n${r1}\r\n${r2}\r\n${r3}\r\n${r4}\r\n${r5}\r\n${r6}\r\n${r7}\r\n${r8}\r\n${r9}\r\n${ra}\r\n${rb}`
        return c
    }

}