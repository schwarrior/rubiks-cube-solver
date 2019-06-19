import { ConsoleColorCode } from "./types";
import { Cube } from "./cube";

export class CubePresentor {
    
    static removeWhitespace = (cubeString : string) : string => {
        let cleaned = CubePresentor.replaceAll(cubeString, " ", "")
        cleaned = CubePresentor.replaceAll(cleaned, "\r", "")
        cleaned = CubePresentor.replaceAll(cleaned, "\n", "")
        return cleaned
    }

    static replaceAll = (targetString : string, searchValue : string, replaceValue : string) : string => {
        const replaced = targetString.split(searchValue).join(replaceValue)
        return replaced
    }

    static getConsoleRepresentation = (cube: Cube) : string => {
        const cubeStr = cube.toString()
        const colorCubeStr = CubePresentor.colorize(cubeStr)
        return colorCubeStr
    }

    private static colorize = (src : string) : string => {
        

        src = src.split("R").join(`${ConsoleColorCode.BgRed}R${ConsoleColorCode.Reset}`)
        src = src.split("G").join(`${ConsoleColorCode.BgGreen}G${ConsoleColorCode.Reset}`)
        //bug: in Powershell yellow presenting as white on white
        src = src.split("Y").join(`${ConsoleColorCode.BgYellow}Y${ConsoleColorCode.Reset}`)
        src = src.split("B").join(`${ConsoleColorCode.BgBlue}B${ConsoleColorCode.Reset}`)
        //bug: in Powershell orange presenting as orange on white (instead of orange on red)
        src = src.split("O").join(`${ConsoleColorCode.BgYellow}${ConsoleColorCode.FgRed}O${ConsoleColorCode.Reset}`)
        src = src.split("W").join(`${ConsoleColorCode.BgWhite}${ConsoleColorCode.FgBlack}W${ConsoleColorCode.Reset}`)
        return src
    }

}