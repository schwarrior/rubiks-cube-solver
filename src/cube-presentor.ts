import { Cube } from "./types";

export class CubePresentor {
    
    static getSerializedVerbose = (cube : Cube) : string => {
        return JSON.stringify(cube)
    }

}